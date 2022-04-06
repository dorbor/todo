const express = require("express");
const router = express.Router();
const Todo = require("../../models/Todo");

router.get("/", (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Todo.find({}, "action")
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/", (req, res, next) => {
  if (req.body.action) {
    Todo.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: "The input field is empty",
    });
  }
});

router.delete("/:id", (req, res, next) => {
  Todo.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

router.put("/:id", async (req, res) => {
  let todo = await Todo.findById(req.params.id);
  todo = req.body;

  const editTodo = new Todo(todo);

  try {
    await Todo.updateOne({ _id: req.params.id }, editTodo);
    res.status(201).json(editTodo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

module.exports = router;
