const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
// const cookieController = require("../controllers/cookieController");


router.get('/', (req, res) => {
  console.log('HELLO')
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../../public/index.html'));
});

// Sign up
router.post("/signup", userController.createUser, (req, res) => {
  // console.log(res.locals.newUser);
  res.sendStatus(200);
});

router.post(
  "/login",
  userController.login,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

module.exports = router;
