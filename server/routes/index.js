const express = require("express");

const { DB } = require("../DB");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req);
  const isUser = DB.users.find((user) => user.firstName === req.body.firstName);

  res.status(200).json(isUser);
});

module.exports = router;
