// Microservices with Node.js and GraphQL
// Requires `npm install express @apollo/server graphql`

const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

// Microservices Architecture
// Example: User microservice with GraphQL API
const typeDefs = `
    type User {
        id: ID!
        name: String!
    }
    type Query {
        users: [User]
        user(id: ID!): User
    }
    type Mutation {
        addUser(name: String!): User
    }
`;

const users = [{ id: "1", name: "Alice" }, { id: "2", name: "Bob" }];

const resolvers = {
    Query: {
        users: () => users,
        user: (_, { id }) => users.find(user => user.id === id),
    },
    Mutation: {
        addUser: (_, { name }) => {
            const user = { id: String(users.length + 1), name };
            users.push(user);
            return user;
        },
    },
};

// GraphQL Server
const server = new ApolloServer({ typeDefs, resolvers });
async function startServer() {
    const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
    console.log(`GraphQL Microservice running at ${url}`);
}
startServer();

// Inter-Service Communication (Simulated)
// Example: REST call to another microservice
const axios = require("axios"); // Assumes `npm install axios`
async function fetchOrderService() {
    try {
        const response = await axios.get("http://localhost:4001/orders");
        console.log("Order Service Data:", response.data);
    } catch (err) {
        console.error("Inter-Service Error:", err.message);
    }
}
fetchOrderService();

// Best Practices
// Design microservices with single responsibilities (e.g., user management).
// Use GraphQL for flexible, client-driven APIs.
// Implement service discovery (e.g., Consul) for dynamic communication.
// Secure GraphQL APIs with authentication (e.g., JWT).
// Test microservices with integration tests and mock services.