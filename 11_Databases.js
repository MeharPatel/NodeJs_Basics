// Working with Databases
// Requires MongoDB (`npm install mongodb`) and a running MongoDB instance
// For SQL, use `npm install sequelize mysql2` or `pg` for PostgreSQL

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017"; // Adjust for your MongoDB setup
const dbName = "testdb";

// Connecting to MongoDB and CRUD Operations
async function mongoOperations() {
    const client = new MongoClient(url);
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("users");

        // Create
        await collection.insertOne({ name: "Alice", age: 25 });
        console.log("Inserted user");

        // Read
        const users = await collection.find({}).toArray();
        console.log("Users:", users);

        // Update
        await collection.updateOne({ name: "Alice" }, { $set: { age: 26 } });
        console.log("Updated user");

        // Delete
        await collection.deleteOne({ name: "Alice" });
        console.log("Deleted user");
    } catch (err) {
        console.error("MongoDB Error:", err);
    } finally {
        await client.close();
    }
}
mongoOperations();

// Example: Using Mongoose (NoSQL ORM, assumes `npm install mongoose`)
// const mongoose = require("mongoose");
// mongoose.connect(url, { dbName });
// const User = mongoose.model("User", new mongoose.Schema({ name: String, age: Number }));
// async function mongooseOperations() {
//     await User.create({ name: "Bob", age: 30 });
//     console.log("Mongoose Users:", await User.find());
// }
// mongooseOperations();

// Best Practices
// Use connection pooling for performance in production.
// Handle database errors with try-catch or promises.
// Use ORMs (Mongoose, Sequelize) for complex applications.
// Validate input data before database operations.
// Test database connections with mock data.