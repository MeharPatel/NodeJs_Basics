// Introduction to Node.js

// What is Node.js?
// Node.js is a server-side JavaScript runtime built on Chrome's V8 engine.
// It enables JavaScript to run outside browsers, ideal for backend development, CLI tools, and more.

// History and Use Cases
// Created in 2009 by Ryan Dahl to handle asynchronous, non-blocking I/O.
// Use cases: REST APIs, real-time apps (e.g., chat), microservices, CLI utilities.

// Node.js Architecture
// Event-driven, non-blocking I/O model for high concurrency.
// Uses V8 engine for JavaScript execution and libuv for async operations.
// Single-threaded but scalable via event loop (see topic 7).

// Example: Basic Node.js Script
console.log("Hello, Node.js!");

// Example: Simple Server Preview
const http = require("http");
const server = http.createServer((req, res) => {
    res.end("Welcome to Node.js!");
});
server.listen(3000, () => console.log("Server running on http://localhost:3000"));

// Best Practices
// Use Node.js for I/O-heavy tasks (e.g., APIs, streaming).
// Avoid CPU-intensive tasks due to single-threaded nature.
// Keep Node.js updated for performance and security patches.
// Test scripts in Node.js REPL for quick prototyping.