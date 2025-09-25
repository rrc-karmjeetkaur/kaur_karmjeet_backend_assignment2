import request from "supertest";
import app from "../app";

describe("Branch Routes", () => {
  let createRes: any;

  it("POST /api/v1/branches should create a branch", async () => {
    createRes = await request(app)
      .post("/api/v1/branches")
      .send({
        name: "New Branch",
        address: "123 Main St",
        phone: "555-123-4567"
      });
    expect(createRes.status).toBe(201);
    expect(createRes.body).toHaveProperty("id");
    expect(createRes.body.name).toBe("New Branch");
  });

  it("GET /api/v1/branches/:id should return a branch", async () => {
    const res = await request(app).get(`/api/v1/branches/${createRes.body.id}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("id", createRes.body.id);
    expect(res.body.name).toBe("New Branch");
  });

  it("GET /api/v1/branches should return all branches", async () => {
    const res = await request(app).get("/api/v1/branches");
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});