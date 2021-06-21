const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

dotenv.config({ path: "./config.env" });

require("./db/connection");
// const User = require('./model/userSchema');

app.use(express.json());

// link the router files
app.use(require("./router/auth"));

const PORT = process.env.PORT;

// Middleware

app.use(cookieParser());

// const middleware = (req, res, next) => {
//   console.log(`Hello Middleware`);
//   next();
// };

// app.get("/", (req, res) => {
//   res.send(`Hello there from server`);
// });

// app.get("/about", middleware, (req, res) => {
//   console.log(`Hello About`);
//   res.send(`Hello About from server`);
// });

app.get("/contact", (req, res) => {
  res.send(`Hello Contact`);
});

app.get("/signin", (req, res) => {
  res.send(`Hello Login`);
});

app.get("/signup", (req, res) => {
  res.send(`Hello Registration`);
});

// console.log(`Hi..`)

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
