// Modules and npm

// Creating Custom Modules
// Save as myModule.js:
/*
module.exports = {
    greet: (name) => `Hello, ${name}!`
};
*/
const myModule = require("./myModule.js"); // Assumes myModule.js exists
console.log("Custom Module:", myModule.greet("Alice"));

// Installing npm Packages
// Example: Install lodash (`npm install lodash`)
const _ = require("lodash"); // Assumes lodash is installed
console.log("Lodash Sample:", _.chunk([1, 2, 3, 4], 2)); // [[1, 2], [3, 4]]

// Managing package.json
// Add dependencies with `npm install <package> --save`
// Example package.json:
/*
{
    "name": "my-app",
    "dependencies": { "lodash": "^4.17.21" }
}
*/

// Example: Using a Module
const os = require("os");
console.log("OS Info:", os.platform(), os.cpus().length);

// Best Practices
// Keep modules small and focused on single responsibilities.
// Use npm scripts for common tasks (e.g., "start", "test").
// Pin dependency versions in package.json for stability.
// Use `npm audit` to check for vulnerabilities.