// Serverless Node.js
// Example for AWS Lambda (assumes AWS SDK installed: `npm install aws-sdk`)
// Deploy with serverless framework (`npm install -g serverless`)

const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();

// Lambda Handler
exports.handler = async (event) => {
    try {
        const { id } = event.pathParameters || {};
        const params = {
            TableName: "Users",
            Key: { id },
        };
        const data = await dynamoDB.get(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(data.Item || { message: "User not found" }),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: err.message }),
        };
    }
};

// Serverless.yml (conceptual):
/*
service: my-service
provider:
  name: aws
functions:
  getUser:
    handler: ServerlessNodeJs.handler
    events:
      - http:
          path: users/{id}
          method: get
*/

// Local Testing (Simulated)
const event = { pathParameters: { id: "1" } };
exports.handler(event).then(response => console.log("Lambda Response:", response));

// Best Practices
// Keep Lambda functions small and focused.
// Use environment variables for configuration (e.g., table names).
// Optimize cold start performance (minimize dependencies).
// Test locally with `serverless invoke local`.
// Monitor with CloudWatch or similar tools.