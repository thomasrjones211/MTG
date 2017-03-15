$("document").ready(function() {
  $("button").click(function() {
    getCard()

  })
});

//function getCard() {
  var url = "https://api.magicthegathering.io/v1/cards?name="
  url += $("input").val()
  $.get(url).then(function(data) {
    console.log(data)
    var cards = data.cards; //array of cards
    for (var i = 0; i < cards.length; i++) {
      updatePage(cards[i]);
    }
  })
  // .catch(function(error) {
  //   console.log(error)
  // }
};

function updatePage(card) {
  $("body").append(card.name)
  $("body").append('<img src="'+ card.imageUrl + '">')
};

// function showMessage(title, poster) {
//   $("body").append("Cool movie, yo")
// }

//   $.get("http://www.omdbapi.com/?t=rambo",
//   function(data) {
// 	console.log(data);
// })
