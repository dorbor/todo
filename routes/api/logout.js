const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const options = {
    expires: new Date(Date.now() + 10000),
    secure: NODE_ENV === "prodution" ? true : false,
    httpOnly: NODE_ENV === "production" ? true : false,
  };
  res.cookie("jwt", "expiredtoken", options);
  res.status(200).json({ status: "success" });
});

module.exports = router;
