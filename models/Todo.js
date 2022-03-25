const mongoose = require("mongoose");
const User = require("./User");
const Schema = mongoose.Schema;

// Create schema for todo
const TodoSchema = new Schema({
  createBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    require: true,
  },
  action: {
    type: String,
    required: [true, "The todo text field is required"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create model for todo
const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;
