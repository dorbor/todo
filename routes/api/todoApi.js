const express = require("express");
const router = express.Router();
const Todo = require("../../models/Todo");

router.get("/", (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Todo.find({}, "action")
    .then((data) => res.json(data))
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Todo.findOne({ _id: req.params.id }, "action")
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

router.patch("/:id", (req, res) => {
  Todo.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    // { overwrite: true },

    function (err) {
      if (!err) {
        res.send("Data successfully updated");
      } else {
        res.send(err);
      }
    }
  );
});

module.exports = router;
