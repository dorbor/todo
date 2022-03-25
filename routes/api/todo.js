const express = require("express");
const router = express.Router();

// const User = require("../../models/Todo");

router.get("/todo", (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  todo
    .find({}, "action")
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/todos", (req, res, next) => {
  if (req.body.action) {
    todo
      .create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: "The input field is empty",
    });
  }
});

router.delete("/todos/:id", (req, res, next) => {
  todo
    .findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
