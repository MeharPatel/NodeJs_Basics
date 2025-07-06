// Core Modules

// Overview of Built-in Modules
// Node.js includes modules like fs, path, http, events, etc., accessible via require().

// Using require() and module.exports
const fs = require("fs");
const path = require("path");

// Example: File System (fs)
fs.writeFileSync("test.txt", "Hello, Core Modules!");
console.log("File Content:", fs.readFileSync("test.txt", "utf8"));

// Example: Path Module
const filePath = path.join(__dirname, "test.txt");
console.log("Resolved Path:", filePath);

// Example: Events Module
const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("greet", (message) => console.log("Event:", message));
emitter.emit("greet", "Hello, Events!");

// Example: module.exports
module.exports = {
    sayHello: () => "Hello from module!"
};
console.log(require("./CoreModules.js").sayHello()); // Self-reference for demo

// Best Practices
// Use core modules for basic functionality to avoid external dependencies.
// Prefer asynchronous methods (e.g., fs.promises) for better performance.
// Understand module caching (require() caches modules).
// Document custom module exports for clarity.