import request from "supertest";
import app from "../app";


describe("Branch API", () => {
  it("should return all branches", async () => {
    const res = await request(app).get("/branches");
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it("should return a branch by ID", async () => {
    const res = await request(app).get("/branches/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id", 1);
  });
});
