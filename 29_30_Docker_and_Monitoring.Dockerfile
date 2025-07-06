# Node.js and Docker + Monitoring and Logging
# Save as Dockerfile
# Requires Docker installed and a Node.js app

FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy application code
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "index.js"]

# index.js (conceptual):
# const express = require("express");
# const promClient = require("prom-client"); // Assumes `npm install prom-client`
# const app = express();
# const counter = new promClient.Counter({
#     name: "http_requests_total",
#     help: "Total HTTP requests"
# });
# app.get("/", (req, res) => {
#     counter.inc();
#     res.send("Hello, Docker!");
# });
# app.get("/metrics", async (req, res) => {
#     res.set("Content-Type", promClient.register.contentType);
#     res.end(await promClient.register.metrics());
# });
# app.listen(3000, () => console.log("App running"));

# Build and Run:
# docker build -t my-node-app .
# docker run -p 3000:3000 my-node-app

# Monitoring with Prometheus (assumes Prometheus installed)
# prometheus.yml (conceptual):
# scrape_configs:
#   - job_name: "node-app"
#     static_configs:
#       - targets: ["localhost:3000"]

# Logging with Winston (assumes `npm install winston`)
# const winston = require("winston");
# const logger = winston.createLogger({
#     transports: [new winston.transports.File({ filename: "app.log" })]
# });
# logger.info("App started");

# Best Practices
# Use multi-stage builds to reduce Docker image size.
# Expose only necessary ports in Dockerfile.
# Monitor with Prometheus for metrics and Grafana for visualization.
# Centralize logs with Winston or ELK Stack.
# Test Docker containers with health checks and CI/CD pipelines.