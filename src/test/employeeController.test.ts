import request from "supertest";
import app from "../app";

describe("Employee Controller", () => {
  it("should create an employee", async () => {
    const res = await request(app)
      .post("/api/v1/employees")
      .send({
        name: "John Doe",
        position: "Developer",
        department: "IT",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        branchId: 1
      });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
  });

  it("should get employee by ID", async () => {
    const res = await request(app).get("/api/v1/employees/1");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("id", 1);
  });
});
