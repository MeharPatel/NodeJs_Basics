// REST API Development
// Requires `npm install express`

const express = require("express");
const app = express();
app.use(express.json());

// Sample Data
let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

// RESTful Endpoints
// GET: Retrieve all users
app.get("/api/users", (req, res) => {
    res.json(users);
});

// GET: Retrieve user by ID
app.get("/api/users/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
});

// POST: Create a user
app.post("/api/users", (req, res) => {
    const user = { id: users.length + 1, name: req.body.name };
    users.push(user);
    res.status(201).json(user);
});

// PUT: Update a user
app.put("/api/users/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: "User not found" });
    user.name = req.body.name;
    res.json(user);
});

// DELETE: Delete a user
app.delete("/api/users/:id", (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.status(204).end();
});

// Starting the Server
app.listen(3001, () => console.log("REST API on http://localhost:3001"));

// Best Practices
// Follow REST conventions (e.g., use nouns for endpoints, proper HTTP methods).
// Validate request bodies and parameters.
// Use appropriate status codes (201 for created, 204 for deleted).
// Test APIs with tools like Postman or curl.