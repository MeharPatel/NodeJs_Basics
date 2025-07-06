// Performance Optimization

// Optimizing Event Loop
// Avoid blocking operations
function heavyComputation() {
    console.time("Heavy Computation");
    let sum = 0;
    for (let i = 0; i < 1e8; i++) sum += i; // CPU-intensive
    console.timeEnd("Heavy Computation");
    return sum;
}
console.log("Sum:", heavyComputation());

// Using Worker Threads (assumes `npm install worker_threads`)
const { Worker, isMainThread, parentPort } = require("worker_threads");
if (isMainThread) {
    const worker = new Worker(__filename);
    worker.on("message", (msg) => console.log("Worker Result:", msg));
} else {
    let sum = 0;
    for (let i = 0; i < 1e8; i++) sum += i;
    parentPort.postMessage(sum);
}

// Profiling with Node.js
// Run with `node --prof PerformanceOptimization.js`
// Process with `node --prof-process isolate-*.log > profile.txt`

// Best Practices
// Offload CPU-intensive tasks to worker threads.
// Use async I/O to keep the event loop free.
// Profile apps with `--prof` or tools like clinic.js.
// Monitor event loop delay with `perf_hooks`.
// Test performance with realistic workloads.