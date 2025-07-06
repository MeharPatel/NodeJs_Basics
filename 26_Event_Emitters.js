// Event Emitters

const EventEmitter = require("events");

// Creating Custom Event Emitter
class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter();

// Handling Events
emitter.on("data", (data) => console.log("Data Received:", data));
emitter.emit("data", { message: "Hello, Event Emitter!" });

// Event-Driven Architecture
class Logger extends EventEmitter {
    log(message) {
        console.log("Log:", message);
        this.emit("log", { message, timestamp: new Date() });
    }
}
const logger = new Logger();
logger.on("log", (data) => console.log("Logged Event:", data));
logger.log("Test log");

// Best Practices
// Use EventEmitter for decoupled, event-driven systems.
// Name events clearly to avoid confusion.
// Handle errors with "error" event listeners.
// Test event emitters with multiple listeners and edge cases.
// Avoid excessive event listeners to prevent memory leaks.