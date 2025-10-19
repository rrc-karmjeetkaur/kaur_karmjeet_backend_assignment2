jest.mock("../config/firebaseConfig", () => ({
  auth: {
    verifyIdToken: jest.fn(),
    getUser: jest.fn(),
  },
  db: {
    collection: jest.fn().mockReturnValue({
      add: jest.fn(),
      get: jest.fn(),
      doc: jest.fn().mockReturnValue({
        get: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      }),
      where: jest.fn().mockReturnValue({
        get: jest.fn(),
      }),
    }),
    runTransaction: jest.fn(),
    batch: jest.fn(),
  },
}));

// Reset mocks after each test so tests are isolated
afterEach(() => {
  jest.clearAllMocks();
});

// Reset module registry to avoid cross-test state
afterAll(() => {
  jest.resetModules();
});