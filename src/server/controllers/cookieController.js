const jwt = require("jsonwebtoken"); // Import jwt
const { secretKey } = require("../../config");

const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  const { token, userID, userName } = res.locals;

  console.log("setCookie Token: ", token);

  /*
 jwt.sign({username, id:userDoc._id}, secret, {}, (err, token) => {
        if(err) throw err;
        res.cookie('token', token).json({
          id:userDoc._id,
          username,
        });
   */

  // res.cookie("token", token, {
  //   httpOnly: true,
  //   maxAge: 7200000, // 2 hours in milliseconds
  // });

  res.cookie("token", token).json({ id: userID, username: userName });
  return next();
};

cookieController.verifyCookie = (req, res, next) => {
  const { token } = req.cookies;
  // console.log('req.cookies: ', req.cookies['token'])
  console.log("res.locals.token: ", token === res.locals.token);
  console.log("req.cookies: ", req.cookies);
  console.log("res.locals.token: ", token);
  // console.log("SECRET KEY", secretKey);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      // console.log('JWT Error: ', err);
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    // Attach user information to the request object for further processing
    req.userID = decoded.userID;
    console.log("UserID: ", req.userID);
    next();
  });
};

module.exports = cookieController;

// cookieController.setSSID = (req, res, next) => {
//   if (res.locals.newUser) {
//     res.cookie("SSID", res.locals.newUser._id, {
//       httpOnly: true,
//       maxAge: 7200000, // 2 hours
//     });
//   }
//   return next();
// };
