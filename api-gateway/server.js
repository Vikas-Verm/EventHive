const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const rateLimit = require("express-rate-limit");

// Limit each IP to 100 requests per 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

const app = express();
const PORT = process.env.PORT || 8000;

app.use(morgan("dev"));
app.use(cors());
// Apply to all requests
app.use(limiter);
// 1. Auth Service Proxy
// Fix: We use pathRewrite to add '/api/auth' back to the URL
app.use(
  "/api/auth",
  createProxyMiddleware({
    target: process.env.AUTH_SERVICE_URL, // http://localhost:5001
    changeOrigin: true,
    pathRewrite: {
      "^/": "/api/auth/", // Takes the incoming '/' (login) and makes it '/api/auth/login'
    },
  })
);

// 2. Core Service Proxy
// Fix: We add '/api' back so the core service gets the full path
app.use(
  "/api",
  createProxyMiddleware({
    target: process.env.CORE_SERVICE_URL, // http://localhost:5000
    changeOrigin: true,
    pathRewrite: {
      "^/": "/api/", // Takes '/events' and makes it '/api/events'
    },
  })
);

app.get("/", (req, res) => {
  res.send("API Gateway is Running");
});

app.listen(PORT, () => {
  console.log(`🌍 API Gateway running on port ${PORT}`);
});
