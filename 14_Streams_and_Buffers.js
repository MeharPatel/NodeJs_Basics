// Streams and Buffers

const fs = require("fs");

// Buffers: Handle binary data
const buffer = Buffer.from("Hello, Node.js!");
console.log("Buffer:", buffer.toString()); // Hello, Node.js!
console.log("Buffer Slice:", buffer.slice(0, 5).toString()); // Hello

// Streams: Handle large data in chunks
// Readable Stream
const readStream = fs.createReadStream("largeFile.txt"); // Assumes largeFile.txt exists
readStream.on("data", (chunk) => console.log("Read Chunk:", chunk.toString()));
readStream.on("end", () => console.log("Read Stream Ended"));

// Writable Stream
const writeStream = fs.createWriteStream("output.txt");
writeStream.write("Written via stream\n");
writeStream.end(() => console.log("Write Stream Ended"));

// Piping Streams
const source = fs.createReadStream("largeFile.txt");
const destination = fs.createWriteStream("copy.txt");
source.pipe(destination).on("finish", () => console.log("Pipe Complete"));

// Best Practices
// Use streams for large files to avoid memory issues.
// Handle stream errors with event listeners.
// Use Buffers for binary data (e.g., images, files).
// Test streams with large datasets and error scenarios.