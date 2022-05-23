const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  body: {
    type: String,
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "Users",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const users = mongoose.model("blogs", blogSchema);
module.exports = users;
