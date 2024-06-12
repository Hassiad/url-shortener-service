const path = require("path");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./utils/errorHandler");
const routes = require("./routes/routes");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Enable CORS
app.use(cors());
app.options("*", cors());

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());

// Data sanitization against XSS
app.use(xss());

// Compression
app.use(compression());

// Test middleware to log request time
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Welcome route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to URL Shortener Service API" });
});

// Use defined routes
app.use(routes);

// Handle undefined routes
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handling middleware
app.use(globalErrorHandler);

module.exports = app;
