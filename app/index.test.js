// index.test.js

// Require 'supertest' — a library used to test HTTP servers
const request = require("supertest");

// Require the Express app from your main application file
const app = require("./index");

// Group 1: Basic Routes
describe("Root and Basic ID Routes", () => {
  it("GET / returns Hello World", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello World");
  });

  it("GET /:id with normal ID", async () => {
    const res = await request(app).get("/YashPandey");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello World YashPandey");
  });

  it("GET /:id with numeric ID", async () => {
    const res = await request(app).get("/12345");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello World 12345");
  });
});

// Group 2: Edge Case Routes
describe("Edge Case Route Tests", () => {
  it("GET /:id with special characters", async () => {
    const res = await request(app).get("/user_42-test");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello World user_42-test");
  });

  it("GET /:id with encoded space", async () => {
    const res = await request(app).get("/John%20Doe");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello World John Doe");
  });

  it("GET /:id with root path again to confirm", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello World");
  });
});
