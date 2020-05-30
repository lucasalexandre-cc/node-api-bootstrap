require("./config/load-env");

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const ErrorHandler = require("./src/helpers/error-handler");
const indexRouter = require("./src/routes/index");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 error
app.use((req, res, next) => {
  const error = new ErrorHandler(404, "Route not found");
  next(error);
});

// error handler
app.use((err, req, res) => {
  const status = err.statusCode || 500;
  const { message } = err;

  res.status(status).send(message);
});

module.exports = app;
