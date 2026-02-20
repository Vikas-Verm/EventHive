import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "EventHive API",
      version: "1.0.0",
      description: "API Documentation for the EventHive Platform",
      contact: {
        name: "EventHive Support",
      },
    },
    servers: [
      {
        url: "http://localhost:7000/api", // Point to the Gateway!
        description: "API Gateway",
      },
      {
        url: "http://localhost:5000/api",
        description: "Direct Backend (Dev)",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  // Look for comments in these files to generate docs
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
