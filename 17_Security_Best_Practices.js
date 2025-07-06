// Security Best Practices
// Requires `npm install express helmet bcrypt`

const express = require("express");
const helmet = require("helmet");
const bcrypt = require("bcrypt");
const app = express();

// Preventing Injection Attacks
app.use(express.json());
app.post("/login", (req, res) => {
    const { username } = req.body;
    // Sanitize input to prevent injection
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
        return res.status(400).json({ error: "Invalid username" });
    }
    res.json({ message: "Login processed" });
});

// Securing APIs with Helmet
app.use(helmet()); // Sets security headers (e.g., Content-Security-Policy)

// Password Hashing with bcrypt
async function hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    console.log("Hashed Password:", hash);
    return hash;
}
hashPassword("myPassword");

// JWT for Authentication (assumes `npm install jsonwebtoken`)
// const jwt = require("jsonwebtoken");
// const token = jwt.sign({ userId: 1 }, "secret-key");
// console.log("JWT:", token);

// Best Practices
// Use helmet to secure HTTP headers.
// Hash passwords with bcrypt, never store plain text.
// Validate and sanitize all user inputs.
// Use JWT or OAuth for secure API authentication.
// Test security with tools like OWASP ZAP.