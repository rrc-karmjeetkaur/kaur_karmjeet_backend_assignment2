import request from "supertest";
import app from "../app";

describe("Employee API", () => {
  it("should return all employees", async () => {
    const res = await request(app).get("/employees");
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it("should return a single employee by ID", async () => {
    const res = await request(app).get("/employees/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id", 1);
  });
});
