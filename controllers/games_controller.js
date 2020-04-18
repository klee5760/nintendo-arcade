var express = require("express");
var router = express.Router();
const DB = require("../models");

router.get("/", function (req, res) {
  DB.Nintendo.findAll().then(function (result) {
    console.log(result.map((x) => x.dataValues));
    res.render("index", {
      games: result.map((x) => x.dataValues),
    });
  });
});

router.post("/api/games", function (req, res) {
  console.log(req.body);
  DB.Nintendo.create(req.body).then(function (newGame) {
    console.log(newGame);
    res.sendStatus(200);
  });
});

router.delete("/api/games/:id", function (req, res) {
  DB.Nintendo.destroy({ where: { id: req.params.id } }).then(function (
    deleteGame
  ) {
    console.log(deleteGame);
    res.sendStatus(200);
  });
});

module.exports = router;
