// $("document").ready(function() {
//   $("button").click(function() {
//     getCard()
//
//   })
// });

// function getName() {
//   var url = "https://api.magicthegathering.io/v1/cards?name="
//   url += $("input").val()
//   $.get(url).then(function(data) {
//     console.log(data)
//     var cards = data.cards; //array of cards
//     for (var i = 0; i < cards.length; i++) {
//       updatePage(cards[i]);
//     }
//   })
//               // .catch(function(error) {
//               //   console.log(error)
//               // }
// };



// $("#addTheme").select(function() {
//   let theme =
//   var $query = $.getJSON('https://api.magicthegathering.io/v1/cards?name=' + search + colorPick);
//   $query.done((data) => {
//     if($query.status !== 200){
//       return;
//     }
//     console.log(data);
//     display(data);
//   })
// })


$("#submit").click(function(event) {
  event.preventDefault()
  //console.log($("#addRarity").val())
  var addTheme = $("#colorTheme").val();
  var addType = $("#cardType").val();
  var addRarity = $("#rarity").val();
  var addEternal = $("#setsEternal").val();
  var addModern = $("#setsModern").val();
  var addSearch = $("#nameSearch").val();
  console.log(addTheme)
  console.log(addType)
  console.log(addRarity)
  console.log(addEternal)
  console.log(addModern)
  console.log(addSearch)
})



//   var $query = $.getJSON('https://api.magicthegathering.io/v1/cards?name=' + search + colorPick);
//   $query.done((data) => {
//     if($query.status !== 200){
//       return;
//     }
//     console.log(data);
//     display(data);
//   })
// })



// <script>
// $( "select" )
//   .change(function() {
//     var str = "";
//     $( "select option:selected" ).each(function() {
//       str += $( this ).text() + " ";
//     });
//     $( "div" ).text( str );
//   })
//   .trigger( "change" );
// </script>


//
// function updatePage(card) {
//   //$("body").append(card.name)
//   $("body").append('<img src="'+ card.imageUrl + '">')
// };
//
              // function showMessage(title, poster) {
              //   $("body").append("Cool movie, yo")
              // }

              //   $.get("http://www.omdbapi.com/?t=rambo",
              //   function(data) {
              // 	console.log(data);
              // })




// function getSet() {
//   var setUrl = "https://api.magicthegathering.io/v1/sets"
//   setUrl += $("input").val()
//   $.get(setUrl).then(function(setData) {
//
//     var sets = setData.sets
//     for (var i = 0; i < sets.length; i++) {
//       console.log(sets[i])
//     }
//     // var cards = data.cards; //array of cards
//     // for (var i = 0; i < cards.length; i++) {
//     //   updatePage(cards[i]);
//     }
//   })
//   // .catch(function(error) {
//   //   console.log(error)
//   // }
// };
