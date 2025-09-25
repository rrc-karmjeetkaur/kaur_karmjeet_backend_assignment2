import request from "supertest";
import app from "../app";

describe("Employee Routes", () => {
  let createdEmployee: any;

  // Test creating an employee
  it("POST /api/v1/employees should create an employee", async () => {
    const res = await request(app)
      .post("/api/v1/employees")
      .send({
        name: "Alice",
        position: "Manager",
        department: "IT",
        email: "alice@example.com",
        phone: "123-456-7890",
        branchId: 1,
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.name).toBe("Alice");

    createdEmployee = res.body; // Save for later tests
  });

  // Test fetching a single employee by ID
  it("GET /api/v1/employees/:id should return an employee", async () => {
    const res = await request(app).get(`/api/v1/employees/${createdEmployee.id}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("id", createdEmployee.id);
    expect(res.body.name).toBe("Alice");
  });

  // Test fetching all employees
  it("GET /api/v1/employees should return all employees", async () => {
    const res = await request(app).get("/api/v1/employees");
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  // Test fetching employees by branch
  it("GET /api/v1/employees/branch/:branchId should return employees for a branch", async () => {
    const res = await request(app).get("/api/v1/employees/branch/1");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  // Test fetching employees by department
  it("GET /api/v1/employees/department/:department should return employees for a department", async () => {
    const res = await request(app).get("/api/v1/employees/department/IT");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
