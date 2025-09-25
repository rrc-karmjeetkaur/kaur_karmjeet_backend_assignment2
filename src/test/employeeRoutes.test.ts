import request from "supertest";
import app from "../app";

describe("Employee Routes", () => {
  let createRes: any;

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

  it("GET /api/v1/employees/:id should return an employee", async () => {
    const res = await request(app).get(`/api/v1/employees/${createRes.body.id}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("id", createRes.body.id);
    expect(res.body.name).toBe("Alice");
  });

  it("GET /api/v1/employees should return all employees", async () => {
    const res = await request(app).get("/api/v1/employees");
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
