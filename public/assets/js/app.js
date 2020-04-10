$("#add-game-btn").on("click", function (event) {
  event.preventDefault();

  var gameName = $("#game-name-input").val().trim();
  var platform = $("#platform-input").val().trim();
  var gameLink = $("#link-input").val().trim();

  var newGame = {
    name: gameName,
    platform: platform,
    link: gameLink,
  };

  $.ajax({ url: "/api/games", method: "POST", data: newGame })
  .then(function () {
    alert("Game successfully added");

    $("#game-name-input").val("");
    $("#platform-input").val("");
    $("#link-input").val("");

    window.location.reload();
  });
});

$(".delete-game-btn").on("click", function (event) {
  event.preventDefault();
  console.log("Game successfully deleted");

   var id = $(this).data("id");

  $.ajax({ url: "/api/games/" + id, method: "DELETE"})
  .then(function () {
    alert("Game successfully deleted");

    window.location.reload();
  });
});
