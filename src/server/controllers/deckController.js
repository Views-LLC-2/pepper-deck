const db = require("../models/model");

const deckController = {};

deckController.getDecks = async (req, res, next) => {
  const getDecksQuery = `SELECT * FROM decks where user_id= '${res.locals.userID}';`;
  // Company title, interview date, position title
  await db
    .query(getDecksQuery)
    .then((result) => {
      console.log("getDecks result: ", result);
      res.locals.decks = result.rows;
      return next();
    })
    .catch((err) => {
      return next({
        log: "Express error handler caught error in deckController.getDecks",
        status: err.status,
        message: { err: err },
      });
    });
};

deckController.createDeck = (req, res, next) => {
  const { userID, jobDescription, jobTitle, date } = req.body;
  console.log("CREATED DECK", req.body);

  const createDeckQuery = `INSERT INTO decks `;
};

deckController.updateDeck = (req, res, next) => {};

deckController.deleteDeck = (req, res, next) => {};
