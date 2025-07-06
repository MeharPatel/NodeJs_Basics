// HTTP Module and Servers

const http = require("http");

// Creating an HTTP Server
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from Node.js HTTP server!");
});
server.listen(3000, () => console.log("Server running on http://localhost:3000"));

// Handling Requests and Responses
const server2 = http.createServer((req, res) => {
    if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About Page</h1>");
    } else {
        res.writeHead(404);
        res.end("Not Found");
    }
});
server2.listen(3001, () => console.log("Server 2 on http://localhost:3001"));

// Routing Basics
const server3 = http.createServer((req, res) => {
    const routes = {
        "/": () => "Home",
        "/contact": () => "Contact Us"
    };
    res.end(routes[req.url] ? routes[req.url]() : "404 Not Found");
});
server3.listen(3002, () => console.log("Server 3 on http://localhost:3002"));

// Best Practices
// Use descriptive status codes (200, 404, 500, etc.).
// Set appropriate Content-Type headers.
// Keep routing logic simple; use Express.js for complex apps.
// Test servers with tools like curl or Postman.