// $("document").ready(function() {
//   $("button").click(function() {
//     getCard()
//
//   })
// });


$('#black').click(function() {
  $(this).toggleClass('glassBlack').toggleClass("active")
  console.log("Black was clicked")
})

$('#blue').click(function() {
  $(this).toggleClass('glassBlue').toggleClass("active")
  console.log("Blue was clicked")
})

$('#green').click(function() {
  $(this).toggleClass('glassGreen').toggleClass("active")
  console.log("Green was clicked")
})

$('#red').click(function() {
  $(this).toggleClass('glassRed').toggleClass("active")
  console.log("Red was clicked")
})

$('#white').click(function() {
  $(this).toggleClass('glassWhite').toggleClass("active")
  console.log("White was clicked")
})

function getActive() {
  var activeColors = ""
  var activeDivs = $('.active')
  var colorSearch = "&colors=";
  var colorStr = ""
    //console.log(activeDivs)
    for (var i = 0; i < activeDivs.length; i++) {
        colorStr += (activeDivs[i].id) +"|"
     }
     activeColors = colorSearch + (colorStr.slice(0,-1))
    // console.log(activeColors)
     return activeColors
}

function getType() {
  var optType = $("#cardType").val();
  var typeSearch = "&type=" + optType;
  console.log(optType)
  if(optType == 0) {
    return
  } else {
  console.log(typeSearch)
  return typeSearch;
  }
}

function getRarity() {
  var optRarity = $("#rarity").val();
  var raritySearch = "&rarity=" + optRarity;
  if(optRarity == 0) {
    return
  } else {
  console.log(raritySearch)
  return raritySearch;
  }
 }



// function getEternal() {
//   var optEternal = $("#setsEternal").val();
//   var eternalSelect = "&sets=" + optEternal;
//   if(optEternal > 0) {
//     return eternalSelect;
//   }
// }
//
//
// function getModern() {
//   var optModern = $("#setsModern").val();
//   var modernSelect = "&sets=" + optModern;
//   if(optModern > 0) {
//     return modernSelect;
//   }
// }
//
// function getName() {
//   var addName = $("#nameSearch").val();
//   var nameSelect = "&name=" + optName;
//   if(optModern > 0) {
//     return nameSelect;
//   }
// }
//



//   function myFunction(item) {
//   sum += item;
//   demo.innerHTML = sum;
//     $('.active').attr('id')
//   )
//   if($('.active').length > 0) {
//    console.log('.attrib('id')')
// }







// $('#ButtonA, #ButtonB, #ButtonC').toggle(function() { // this refer to the just clicked button.
//     $('button.active').click(); // Remove active class from all other buttons.
//     $(this).addClass("active");
// }, function() {
//     $(this).removeClass("active");
// });

// function selectColors(){
//   if ($("#blue:glassBlack").val() != "black"
//   && $("#black:glassBlue").val() != "blue"
//   && $("#green:glassGreen").val() != "green"
//   && $("#red:glassRed").val() != "red"
//   && $("#white:glassWhite").val() != "white"){
//     return "";
//   } else {
//     let colorSearch = "&colors=";
//     if ($("#black:glassBlack").val() == "black") {colorSearch += "|black";}
//     if ($("#blue:glassBlue").val() == "blue") {colorSearch += "blue";}
//     if ($("#green:glassGreen").val() == "green") {colorSearch += "|green";}
//     if ($("#red:glassRed").val() == "red") {colorSearch += "|red";}
//     if ($("#white:glassWhite").val() == "white") {colorSearch += "|white";}
//     return colorSearch
//     console.log(colorSearch)
//   }
// }



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



$("#submit").click(function(event) {
  event.preventDefault()
  //console.log($("#addRarity").val())
  //var addColors = selectColors()
  //var addTheme = $("#colorTheme").val();
  var colorSelect = getActive();
  var typeSelect = getType();
  var raritySelect = getRarity();
  // var eternalSelect = getEternal();
  // var modernSelect = getModern();
  // var nameSelect = getName();
  // // $.getJSON('https://api.magicthegathering.io/v1/cards?' + );
  //     $query.done((data) => {
  //       if($query.status !== 200){
  //         return;
  //       }
  //       console.log(data);
  //       display(data);

  //console.log(addColors)
  //console.log(addTheme)
  console.log(colorSelect)
  console.log(typeSelect)
  console.log(raritySelect)
  // console.log(eternalSelect)
  // console.log(modernSelect)
  // console.log(nameSelect)
})
//
// function convert(text) {
//   for (var i = 0; i < array.length; i++) {
//     array[i]
//   }
//
// }

//   var $query = $.getJSON('https://api.magicthegathering.io/v1/cards?name=' + search + colorPick);
//   $query.done((data) => {
//     if($query.status !== 200){
//       return;
//     }
//     console.log(data);
//     display(data);
//   })
// })






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






// init active snippet
// initEvents : function() {
//   var obj = this;
//
//   obj.dd.on('click', function(event){
//     $('.active').not($(this)).removeClass('active');
//     $(this).toggleClass('active');
//     event.stopPropagation();
//   });
// }


// string update <script>
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
