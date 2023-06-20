const express = require("express");
const bcrypt = require("bcrypt");

const { DB } = require("../DB");

const router = express.Router();

router.post("/register", async (req, res) => {
  console.log(req.headers.authorization, "req");

  try {
    const tokenized = await bcrypt.hash(req.body.firstName, 10);
    console.log(tokenized);
    res.status(201).send({
      message: "유저가 성공적으로 로그인되었습니다.",
      token: tokenized,
    });
    return;
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: "비밀번호 암호화에 실패했습니다.",
    });
  }
});

router.post("/login", async (req, res) => {
  const { firstName } = req.body;

  const user = DB.users.find((user) => user.firstName === firstName);

  if (!user) {
    res.status(404).send({
      err: "Y",
      message: "가입된 유저가 없습니다.",
    });
    return;
  }

  //   res.status(200).json({
  //     err: "N",
  //     user,
  //   });
  res
    .status(201)
    .cookie("user", user, {
      path: "/",
      httpOnly: true,
      secure: true,
    })
    .send({
      err: "N",
    });
});

router.get("/check", (req, res) => {
  const auth = req.cookies.user ? JSON.parse(req.cookies.user) : "";
  console.log(req.cookies);
  const user = DB.users.find((user) => user.firstName === auth.firstName);

  if (!user) {
    console.error("UnAuthorized User");
    res.status(401).send({
      err: "Y",
      verify: false,
    });
    return;
  }

  res.status(200).json({
    err: "N",
    verify: true,
  });
});

module.exports = router;
