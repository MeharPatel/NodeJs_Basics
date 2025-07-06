// Node.js and TypeScript
// Save as .ts and compile with `tsc NodeJsAndTypeScript.ts`
// Requires `npm install typescript @types/node`

import { Request, Response } from "express";
const express = require("express");
const app = express();

// Type-Safe API
interface User {
    id: number;
    name: string;
}

const users: User[] = [{ id: 1, name: "Alice" }];

app.get("/api/users", (req: Request, res: Response) => {
    res.json(users);
});

app.get("/api/users/:id", (req: Request, res: Response) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
});

// Starting Server
app.listen(3000, () => console.log("TypeScript Server on http://localhost:3000"));

// tsconfig.json (conceptual):
/*
{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true
    }
}
*/

// Best Practices
// Use TypeScript for type-safe Node.js applications.
// Define interfaces for data models (e.g., User).
// Install @types packages for Node.js modules.
// Compile with strict mode for robust type checking.
// Test TypeScript code with Jest or Mocha.