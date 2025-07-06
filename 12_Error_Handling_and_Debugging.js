// Error Handling and Debugging

// Error-First Callbacks
const fs = require("fs");
fs.readFile("nonexistent.txt", "utf8", (err, data) => {
    if (err) return console.error("Callback Error:", err.message);
    console.log("File Data:", data);
});

// Try-Catch with Async/Await
const fsPromises = require("fs").promises;
async function readFileAsync() {
    try {
        const data = await fsPromises.readFile("test.txt", "utf8");
        console.log("Async Data:", data);
    } catch (err) {
        console.error("Async Error:", err.message);
    }
}
readFileAsync();

// Debugging Node.js Apps
// Use `--inspect` flag: `node --inspect ErrorHandlingAndDebugging.js`
// Example: Setting a breakpoint
function processData(data) {
    debugger; // Pause execution in debugger
    return data.toUpperCase();
}
console.log(processData("debug me"));

// Logging with Winston (assumes `npm install winston`)
// const winston = require("winston");
// const logger = winston.createLogger({
//     transports: [new winston.transports.Console()]
// });
// logger.error("Error logged with Winston");

// Best Practices
// Always check for errors in callbacks (error-first pattern).
// Use try-catch for promise-based and async/await code.
// Enable Node.js debugger or use VS Code for breakpoints.
// Use logging libraries like Winston for production logging.
// Test error handling with invalid inputs and edge cases.