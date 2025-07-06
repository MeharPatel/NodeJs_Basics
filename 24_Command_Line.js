// Command-Line Applications
// Requires `npm install yargs`

const yargs = require("yargs");

// Building a CLI Tool
yargs
    .command(
        "greet",
        "Greet a user",
        { name: { description: "User name", demand: true, type: "string" } },
        (argv) => console.log(`Hello, ${argv.name}!`)
    )
    .command(
        "add",
        "Add two numbers",
        {
            a: { description: "First number", demand: true, type: "number" },
            b: { description: "Second number", demand: true, type: "number" },
        },
        (argv) => console.log("Sum:", argv.a + argv.b)
    )
    .help().argv;

// Example Usage:
// node CommandLineApplications.js greet --name Alice
// node CommandLineApplications.js add --a 5 --b 3

// Best Practices
// Use yargs or commander for parsing CLI arguments.
// Provide clear help messages and examples.
// Handle invalid inputs with meaningful errors.
// Test CLI tools with automated scripts or manual runs.
// Use shebang (`#!/usr/bin/env node`) for executable scripts.