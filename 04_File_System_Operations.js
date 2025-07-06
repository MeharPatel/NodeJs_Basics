// File System Operations

const fs = require("fs");
const path = require("path");

// Reading Files
// Synchronous
const content = fs.readFileSync("test.txt", "utf8");
console.log("Sync Read:", content);

// Asynchronous
fs.readFile("test.txt", "utf8", (err, data) => {
    if (err) console.error("Read Error:", err);
    else console.log("Async Read:", data);
});

// Writing Files
// Synchronous
fs.writeFileSync("output.txt", "Written by Node.js!");

// Asynchronous
fs.writeFile("output.txt", "Updated content!", (err) => {
    if (err) console.error("Write Error:", err);
    else console.log("Async Write: Done");
});

// Working with Directories
const dir = "myFolder";
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    console.log("Directory Created:", dir);
}

// Streams for Large Files
const readStream = fs.createReadStream("test.txt", "utf8");
const writeStream = fs.createWriteStream("copy.txt");
readStream.pipe(writeStream);
readStream.on("end", () => console.log("Stream Copy: Done"));

// Best Practices
// Use asynchronous methods for non-blocking I/O.
// Handle errors in async operations with callbacks or try-catch.
// Use streams for large files to manage memory.
// Validate file paths with path module to avoid errors.