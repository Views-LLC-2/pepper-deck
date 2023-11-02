const db = require("../models/model");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const { secretKey } = require("../../config");

const userController = {};

userController.createUser = async (req, res, next) => {
  const { userName, userPassword } = req.body;
  console.log("CREATED USER", req.body);

  const uniqueUserQuery = `SELECT COUNT(*) FROM Users WHERE username = '${userName}';`;

  await db
    .query(uniqueUserQuery)
    .then((result) => {
      console.log(
        "uniqueUser Result: ",
        result.rows[0].count,
        "; type: ",
        typeof result.rows[0].count
      );

      if (Number(result.rows[0].count) >= 1) {
        return res.status(401).json({message: 'Failed to Sign Up: Username Taken'})
      }
      else {
        const hashedPassword = bcrypt.hashSync(userPassword, salt);
        const userID = crypto.randomUUID();
        const createUserQuery = `INSERT INTO users ("_id", "username", "password") VALUES ('${userID}', '${userName}', '${hashedPassword}');`;

        db.query(createUserQuery)
          .then((result) => {
            console.log("creatueUser result: ", result);
            const token = jwt.sign({ userID: userID }, secretKey, {
              expiresIn: "1h",
            });
            res.locals.token = token;
            res.locals.userName = userName;
            res.locals.userID = userID;
            return next();
          })
          .catch((err) => {
            return next({
              log: "Express error handler caught error in userController.createUser",
              status: err.status,
              message: { err: err },
            });
          });
      }
    })
    .catch((err) => {
      return next({
        log: "Express error handler caught error in userController.createUser",
        status: err.status,
        message: { err: err },
      });
    });

  // const hashedPassword = bcrypt.hashSync(userPassword, salt);
  // const userID = crypto.randomUUID();
  // const createUserQuery = `INSERT INTO users ("_id", "username", "password") VALUES ('${userID}', '${userName}', '${hashedPassword}');`;

  // db.query(createUserQuery)
  //   .then((result) => {
  //     console.log("creatueUser result: ", result);
  //     // res.locals.userID = idk
  //     const token = jwt.sign({ userID: userID }, secretKey, {
  //       expiresIn: "1h",
  //     });
  //     res.locals.token = token;
  //     return next();
  //   })
  //   .catch((err) => {
  //     return next({
  //       log: "Express error handler caught error in userController.createUser",
  //       status: err.status,
  //       message: { err: err },
  //     });
  //   });

  // res.locals.newUser
};

userController.login = (req, res, next) => {
  // check database if user exists
  const { userName, userPassword } = req.body;

  const findUserQuery = `SELECT _id, password FROM Users WHERE username = '${userName}';`;

  db.query(findUserQuery)
    .then((result) => {
      console.log("login result: ", result);
      if (
        result.rows.length &&
        bcrypt.compareSync(userPassword, result.rows[0].password)
      ) {
        res.locals.userID = result.rows[0]._id;
        const token = jwt.sign({ userID: res.locals.userID }, secretKey, {
          expiresIn: "1h",
        });
        res.locals.token = token;
        res.locals.loginSuccess = true;
      } else {
        res.locals.loginSuccess = false;
      }
      return next();
    })
    .catch((err) => {
      return next({
        log: "Express error handler caught error in userController.login",
        status: err.status,
        message: { err: err },
      });
    });
};

module.exports = userController;
