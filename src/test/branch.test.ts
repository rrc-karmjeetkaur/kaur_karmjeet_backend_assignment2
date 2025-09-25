import request from "supertest";
import app from "../app";

describe("Branch API", () => {

  // GET all branches
  it("should return all branches", async () => {
    const res = await request(app).get("/branches");
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  // GET a branch by ID
  it("should return a branch by ID", async () => {
    const res = await request(app).get("/branches/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id", 1);
  });

  // POST a new branch
  it("should create a new branch", async () => {
    const newBranch = { name: "Test Branch", address: "123 Test St", phone: "123-456-7890" };
    const res = await request(app).post("/branches").send(newBranch);
    expect(res.statusCode).toBe(201);
    expect(res.body).toMatchObject(newBranch);
    expect(res.body).toHaveProperty("id");
  });

  // PUT / update a branch
  it("should update a branch", async () => {
    const updatedData = { phone: "987-654-3210" };
    const res = await request(app).put("/branches/1").send(updatedData);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id", 1);
    expect(res.body).toHaveProperty("phone", "987-654-3210");
  });

  // DELETE a branch
  it("should delete a branch", async () => {
    const res = await request(app).delete("/branches/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Branch deleted successfully");
  });

  // Test branch not found
  it("should return 404 for non-existent branch", async () => {
    const res = await request(app).get("/branches/999");
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty("message", "Branch not found");
  });

});
 