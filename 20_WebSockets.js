// WebSockets with Node.js
// Requires `npm install ws`

const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 8080 });

// WebSocket Server
server.on("connection", (ws) => {
    console.log("Client connected");
    ws.on("message", (message) => {
        console.log("Received:", message.toString());
        ws.send(`Echo: ${message}`);
    });
    ws.on("close", () => console.log("Client disconnected"));
});

// Example: Broadcasting to All Clients
server.on("connection", (ws) => {
    ws.on("message", (message) => {
        server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(`Broadcast: ${message}`);
            }
        });
    });
});

// Best Practices
// Use ws or Socket.IO for WebSocket implementation.
// Handle connection errors and disconnections gracefully.
// Secure WebSockets with wss:// in production.
// Test WebSocket performance with multiple clients.
// Use WebSockets for real-time apps (e.g., chat, notifications).