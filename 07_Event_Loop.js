// Event Loop in Node.js

// How Node.js Processes Async Tasks
// Event loop manages async operations via libuv.
// Phases: timers, pending callbacks, poll, check, close callbacks.

// Example: Timers (setTimeout, setImmediate)
console.log("Start");
setTimeout(() => console.log("Timeout (timers phase)"), 0);
setImmediate(() => console.log("Immediate (check phase)"));
Promise.resolve().then(() => console.log("Promise (microtask)"));
console.log("End");
// Output: Start, End, Promise, Immediate, Timeout

// Example: I/O and Event Loop
const fs = require("fs");
fs.readFile("test.txt", () => console.log("File read (poll phase)"));
process.nextTick(() => console.log("Next tick (microtask)"));
// Output order depends on I/O speed, but nextTick precedes file read.

// Best Practices
// Use process.nextTick for microtask scheduling when needed.
// Avoid blocking the event loop with CPU-intensive tasks.
// Understand phase priorities (microtasks > timers > I/O).
// Monitor event loop lag with tools like `clinic.js`.