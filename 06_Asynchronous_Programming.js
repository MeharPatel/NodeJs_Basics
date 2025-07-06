// Asynchronous Programming in Node.js

// Callbacks
const fs = require("fs");
fs.readFile("test.txt", "utf8", (err, data) => {
    if (err) console.error("Callback Error:", err);
    else console.log("Callback Read:", data);
});

// Promises
const fsPromises = require("fs").promises;
fsPromises.readFile("test.txt", "utf8")
    .then(data => console.log("Promise Read:", data))
    .catch(err => console.error("Promise Error:", err));

// Async/Await
async function readFileAsync() {
    try {
        const data = await fsPromises.readFile("test.txt", "utf8");
        console.log("Async/Await Read:", data);
    } catch (err) {
        console.error("Async/Await Error:", err);
    }
}
readFileAsync();

// Handling Asynchronous Errors
async function processFiles() {
    try {
        const files = await fsPromises.readdir(".");
        console.log("Files:", files);
    } catch (err) {
        console.error("Dir Error:", err);
    }
}
processFiles();

// Best Practices
// Prefer async/await for readable async code.
// Always handle errors in callbacks, promises, and async/await.
// Avoid callback hell by using promises or async/await.
// Test async operations with realistic scenarios (e.g., missing files).