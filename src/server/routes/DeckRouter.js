const express = require("express");
const router = express.Router();
const deckController = require("../controllers/deckController");
const cookieController = require("../controllers/cookieController");

router.get('/_', deckController.getDecks, (req, res) => {
  res.status(200).json(res.locals.decks);
})

router.post('/addDeck', deckController.createDeck, (req, res) => {

})


module.exports = router;