const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT_URL;
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", () => console.log("Error Connecting to database"));
db.once("open", () => console.log("Database connected successfully!"));

const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./router/register");
const blogRouter = require("./router/blogs");

const app = express();
console.log(process.env.parsed);

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // parse application/json
app.use(express.json());
app.use(cors());

// Api Routes

app.use("/", userRouter);
app.use("/", blogRouter);

app.listen(PORT, (req, res) => {
  console.log(`App listening on port ${PORT}`);
});
