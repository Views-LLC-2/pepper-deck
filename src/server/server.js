const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// const DeckRouter = require("./routes/DeckRouter");
const SignupRouter = require("./routes/SignupRouter");

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(cors());
app.use(cors({ credentials: true, origin: "http://localhost:8080" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //for form data
app.use(cookieParser());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../../public")));
} else {
  app.use(express.static(path.resolve(__dirname, "../../public")));
}

// app.use(express.static(path.resolve(__dirname, "../../public")));

//Router to serve signup
app.use("/access", SignupRouter);
// NEED TO SET THIS UP
// Router to serve middleware & response
// app.use("/deckRoute", DeckRouter);

app.get("/login", (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, "../../public/index.html"));
});

app.get("/signup", (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, "../../public/index.html"));
});

// app.use('/login', loginRouter)
// app.use('/signup', loginRouter)

// Serve files
app.get("/", (req, res) => {
  return res.sendFile(path.resolve(__dirname, "../../public/index.html"));
});

// Global error handler
app.use((req, res) =>
  res.status(404).send("Status Code 404: Page not found...")
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred in global error handler" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

module.exports = app.listen(PORT, () =>
  console.log("Listening in on PORT: ", PORT)
);
