// Background Jobs and Task Queues
// Requires `npm install bull`

const Bull = require("bull");
const queue = new Bull("my-queue", { redis: { host: "127.0.0.1", port: 6379 } });

// Adding Jobs
async function addJob(data) {
    await queue.add(data);
    console.log("Job Added:", data);
}
addJob({ task: "Process data" });

// Processing Jobs
queue.process(async (job) => {
    console.log("Processing Job:", job.data);
    // Simulate work
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { result: "Done" };
});

// Job Completion
queue.on("completed", (job, result) => {
    console.log(`Job ${job.id} completed with result:`, result);
});

// Best Practices
// Use Bull or Agenda for reliable job queues.
// Connect to Redis for persistent job storage.
// Handle job failures with retries and error logging.
// Monitor queue performance with Bull Dashboard.
// Test jobs with mock data and failure scenarios.