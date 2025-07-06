// Testing Node.js Applications
// Requires `npm install jest supertest`

// Unit Testing with Jest
function add(a, b) {
    return a + b;
}
// Jest Test (save as add.test.js):
/*
describe("add", () => {
    test("adds two numbers", () => {
        expect(add(2, 3)).toBe(5);
    });
});
*/
console.log("Add:", add(2, 3)); // 5

// Integration Testing with Supertest
const express = require("express");
const app = express();
app.get("/api/test", (req, res) => res.json({ message: "Test" }));
// Supertest (save as app.test.js):
/*
const request = require("supertest");
describe("GET /api/test", () => {
    test("responds with message", async () => {
        const response = await request(app).get("/api/test");
        expect(response.body.message).toBe("Test");
    });
});
*/

// Mocking Dependencies
const fs = require("fs");
jest.mock("fs"); // Mock fs module
fs.readFileSync.mockReturnValue("Mocked data");
console.log("Mocked FS:", fs.readFileSync("test.txt"));

// Best Practices
// Write unit tests for all public functions.
// Use Supertest for API integration testing.
// Mock external dependencies to isolate tests.
// Run tests with `npm test` in CI/CD pipelines.
// Test edge cases and error scenarios.