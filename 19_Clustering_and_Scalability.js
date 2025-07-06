// Clustering and Scalability

const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

// Using Cluster Module
if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    // Fork workers
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on("exit", (worker) => console.log(`Worker ${worker.process.pid} died`));
} else {
    // Workers run HTTP server
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`Worker ${process.pid} responds`);
    }).listen(3000);
    console.log(`Worker ${process.pid} started`);
}

// Load Balancing with pm2 (assumes `npm install -g pm2`)
// Run with `pm2 start ClusteringAndScalability.js -i max`

// Best Practices
// Use cluster module to utilize all CPU cores.
// Monitor worker health and restart on crashes.
// Use pm2 for production load balancing and monitoring.
// Scale horizontally with multiple Node.js instances.
// Test clustering under high load with tools like Apache Bench.