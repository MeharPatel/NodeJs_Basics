// Environment Variables

// Using process.env
console.log("Node Environment:", process.env.NODE_ENV || "development");

// Setting Environment Variables
// Set via terminal: `export MY_VAR=value` (Unix) or `set MY_VAR=value` (Windows)
console.log("Custom Env Var:", process.env.MY_VAR || "Not set");

// Using dotenv (assumes `npm install dotenv`)
// Create a .env file: MY_KEY=secret
// const dotenv = require("dotenv");
// dotenv.config();
// console.log("Dotenv Key:", process.env.MY_KEY);

// Example: Configuration with Environment Variables
const config = {
    port: process.env.PORT || 3000,
    apiKey: process.env.API_KEY || "default-key"
};
console.log("Config:", config);

// Best Practices
// Store sensitive data (e.g., API keys) in environment variables.
// Use dotenv for managing .env files in development.
// Add .env to .gitignore to avoid exposing secrets.
// Validate environment variables at app startup.
// Test with different environments (development, production).