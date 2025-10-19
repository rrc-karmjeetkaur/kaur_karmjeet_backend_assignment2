jest.mock("../src/config/firebaseConfig", () => ({
    auth: {
        verifyIdToken: jest.fn(),
        getUser: jest.fn(),
    },
    db: {
        collection: jest.fn(() => ({
            doc: jest.fn(() => ({
                set: jest.fn(),
                get: jest.fn(),
                update: jest.fn(),
                delete: jest.fn(),
            })),
            get: jest.fn(),
            add: jest.fn(),
        })),
        runTransaction: jest.fn(),
        batch: jest.fn(() => ({
            set: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
            commit: jest.fn(),
        })),
    },
}));

afterEach(() => {
    jest.clearAllMocks();
});

afterAll(() => {
    jest.resetModules();
});
