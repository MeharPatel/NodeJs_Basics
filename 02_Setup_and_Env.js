// Setup and Environment

// Installing Node.js and npm
// Download from nodejs.org (LTS recommended).
// npm (Node Package Manager) comes bundled with Node.js.

// Running Node.js Scripts
// Use `node filename.js` to execute scripts.
// Node.js REPL: Run `node` in terminal for interactive coding.

// Setting up a Node.js Project
// Initialize with `npm init` to create package.json.
const pkg = require("./package.json"); // Assumes package.json exists
console.log("Project Name:", pkg.name || "Not initialized");

// Example: Creating package.json
// Run `npm init -y` to generate:
// {
//   "name": "my-project",
//   "version": "1.0.0",
//   "main": "index.js"
// }

// Example: Running a Script
console.log("Running in Node.js:", process.version);

// Best Practices
// Use LTS Node.js version for stability.
// Organize projects with package.json for dependency management.
// Use `.gitignore` to exclude node_modules.
// Test setup by running simple scripts in REPL or files.