import request from "supertest";
import app from "../app";

describe("Employee Routes", () => {
  let createRes: any;

  // Create an employee
  it("POST /api/v1/employees should create an employee", async () => {
    createRes = await request(app)
      .post("/api/v1/employees")
      .send({
        name: "Alice",
        position: "Manager",
        department: "IT",
        email: "alice@example.com",
        phone: "123-456-7890",
        branchId: 1
      });
    expect(createRes.status).toBe(201);
    expect(createRes.body).toHaveProperty("id");
    expect(createRes.body.name).toBe("Alice");
  });

  // Get employee by ID
  it("GET /api/v1/employees/:id should return an employee", async () => {
    const res = await request(app).get(`/api/v1/employees/${createRes.body.id}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("id", createRes.body.id);
    expect(res.body.name).toBe("Alice");
  });

  // Get all employees
  it("GET /api/v1/employees should return all employees", async () => {
    const res = await request(app).get("/api/v1/employees");
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  // --- Step 6: Logical Operations Tests ---

  // Get employees by branch
  describe("GET /api/v1/employees/branch/:branchId", () => {
    it("should return all employees for a specific branch", async () => {
      const branchId = 1;
      const res = await request(app).get(`/api/v1/employees/branch/${branchId}`);
      expect(res.status).toBe(200);
      expect(res.body).toBeInstanceOf(Array);
      res.body.forEach((employee: any) => {
        expect(employee.branchId).toBe(branchId);
      });
    });

    it("should return 400 if branchId is missing", async () => {
      const res = await request(app).get("/api/v1/employees/branch/");
      expect(res.status).toBe(400);
      expect(res.body.message).toBe("Branch ID is required");
    });
  });

  // Get employees by department
  describe("GET /api/v1/employees/department/:department", () => {
    it("should return all employees in a specific department", async () => {
      const department = "IT";
      const res = await request(app).get(`/api/v1/employees/department/${department}`);
      expect(res.status).toBe(200);
      expect(res.body).toBeInstanceOf(Array);
      res.body.forEach((employee: any) => {
        expect(employee.department.toLowerCase()).toBe(department.toLowerCase());
      });
    });

    it("should return 400 if department is missing", async () => {
      const res = await request(app).get("/api/v1/employees/department/");
      expect(res.status).toBe(400);
      expect(res.body.message).toBe("Department is required");
    });
  });
});
 