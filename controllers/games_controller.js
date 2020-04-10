var express = require("express");
var router = express.Router();
const connection = require("../config/connection");

router.get("/", function (req, res) {
  connection.query("SELECT * FROM nintendo", function (err, result) {
    if (err) throw err;
    console.log(result);
    res.render("index", {
      games: result,
    });
  });
});

router.post("/api/games", function (req, res) {
  console.log(req.body)
  connection.query(
    "INSERT INTO nintendo (game_name, platform, link) VALUES (?,?,?);",
    [req.body.name, req.body.platform, req.body.link], 
  function (err, result) {
    if (err) throw err;
    console.log(result);
   
    res.send("Okay")
  });
});

router.delete("/api/games/:id", function (req, res) {
  const id = req.params.id
  console.log(req.body)
  connection.query(
    "DELETE FROM nintendo WHERE id=?",
    [id], 
  function (err, result) {
    if (err) throw err;
    console.log(result);
   
    res.send("Okay")
  });
});

module.exports = router;
