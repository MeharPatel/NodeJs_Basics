// Child Processes

const { spawn, exec, fork } = require("child_process");

// Spawning a Process
const ls = spawn("ls", ["-la"]);
ls.stdout.on("data", (data) => console.log("Spawn Output:", data.toString()));
ls.stderr.on("data", (data) => console.error("Spawn Error:", data.toString()));
ls.on("close", (code) => console.log("Spawn Exit Code:", code));

// Executing a Command
exec("echo Hello from exec", (err, stdout, stderr) => {
    if (err) return console.error("Exec Error:", err);
    console.log("Exec Output:", stdout);
});

// Forking a Child Process
// Create child.js: console.log("Child process:", process.pid);
// const child = fork("child.js");
// child.on("message", (msg) => console.log("Child Message:", msg));
// child.send("Hello from parent");

// Best Practices
// Use spawn for streaming large output (e.g., logs).
// Use exec for simple commands with buffered output.
// Use fork for JavaScript-heavy child processes.
// Handle errors and exit codes in all child processes.
// Test child processes with different inputs and failure cases.