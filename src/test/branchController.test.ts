import request from "supertest";
import app from "../app";

describe("Branch Controller", () => {
  it("should create a branch", async () => {
    const res = await request(app)
      .post("/api/v1/branches")
      .send({
        name: "Test Branch",
        address: "123 Test St",
        phone: "123-456-7890"
      });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
  });

  it("should get branch by ID", async () => {
    const res = await request(app).get("/api/v1/branches/1");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("id", 1);
  });
});
