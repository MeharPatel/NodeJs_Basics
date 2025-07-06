// Express.js Framework
// Requires `npm install express`

const express = require("express");
const app = express();

// Setting up Express.js
app.use(express.json()); // Parse JSON bodies

// Middleware
// Built-in: express.json, express.static
app.use(express.static("public")); // Serve static files from 'public' folder

// Custom Middleware
app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.url}`);
    next();
});

// Third-Party Middleware (e.g., Morgan, assumed installed)
// const morgan = require("morgan");
// app.use(morgan("dev"));

// Routing
app.get("/", (req, res) => res.send("Welcome to Express!"));
app.get("/users", (req, res) => res.json([{ id: 1, name: "Alice" }]));

// REST API Basics
app.post("/users", (req, res) => {
    const user = req.body;
    res.status(201).json({ id: 2, ...user });
});

// Starting the Server
app.listen(3000, () => console.log("Express server on http://localhost:3000"));

// Best Practices
// Use Express for simplified routing and middleware management.
// Organize routes in separate files for large apps.
// Handle errors with custom middleware (see topic 12).
// Test APIs with tools like Postman or Supertest.