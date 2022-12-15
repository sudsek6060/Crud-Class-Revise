require("dotenv").config()
const express = require("express");
const connectToDb = require("./config/db");
const userRouter = require("./routers/userRouter")
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))

connectToDb();
app.use("/", userRouter)
module.exports = app;