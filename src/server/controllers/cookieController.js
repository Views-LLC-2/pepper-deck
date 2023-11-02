const jwt = require("jsonwebtoken"); // Import jwt
const { secretKey } = require("./config"); // Import the secret key

const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  const { token } = res.locals;
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 7200000, // 2 hours
  });

  return next();
};

cookieController.verifyCookie = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
    
    // Attach user information to the request object for further processing
    req.userID = decoded.userID;
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
