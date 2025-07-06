// Advanced File System Operations

const fs = require("fs").promises;
const path = require("path");

// Watching File Changes
async function watchFiles() {
    const watcher = fs.watch("watchDir");
    for await (const event of watcher) {
        console.log("File Event:", event);
    }
}
watchFiles().catch(console.error);

// Handling Large Files with Streams
async function processLargeFile() {
    const readStream = fs.createReadStream("largeFile.txt", { highWaterMark: 16384 });
    let count = 0;
    for await (const chunk of readStream) {
        count += chunk.toString().length;
    }
    console.log("Total Bytes:", count);
}
processLargeFile();

// File System Performance Optimization
async function optimizeFileWrite() {
    const data = "Data".repeat(1000000); // Large data
    await fs.writeFile("optimized.txt", data, { flag: "w" });
    console.log("Optimized Write Complete");
}
optimizeFileWrite();

// Best Practices
// Use fs.promises for async/await file operations.
// Set appropriate highWaterMark for streams to balance memory and speed.
// Use watch with caution; prefer specific files over directories.
// Test file operations with large datasets and error cases.
// Handle concurrent file access in multi-user scenarios.