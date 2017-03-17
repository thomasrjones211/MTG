$("document").ready(function() {
  $("button").click(function() {
    //getCard()
  })
});


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
  if(activeDivs == 0) {
    return "something"
  } else {
  //console.log(activeDivs)
    for (var i = 0; i < activeDivs.length; i++) {
        colorStr += (activeDivs[i].id) +"|"
     }
     activeColors = colorSearch + (colorStr.slice(0,-1))
    // console.log(activeColors)
     return activeColors
   }
}

function getType() {
  var optType = $("#cardType").val();
  var typeSearch = "&type=" + optType;
  console.log(optType)
  if($("#cardType").val() === "") {
    return ""
  } else {
  console.log(typeSearch)
  return typeSearch;
  }
}

function getRarity() {
  var optRarity = $("#rarity").val();
  var raritySearch = "&rarity=" + optRarity;
  if ($("#rarity").val() === "") {
    return ""
  } else {
    console.log(raritySearch)
    return raritySearch;
    }
  }
  // if(optRarity == 0) {
  //   return
  // } else {
  // console.log(raritySearch)
  // return raritySearch;
  // }
//}

function getEternal() {
  var optEternal = $("#setsEternal").val();
  var eternalSearch = "&setName=" + optEternal;
  if($("#setsEternal").val() === "") {
    return ""
  } else {
  console.log(eternalSearch)
  return eternalSearch;
  }
}

function getModern() {
  var optModern = $("#setsModern").val();
  var modernSearch = "&setName=" + optModern;
  if($("#setsModern").val() === "") {
    return ""
  } else {
  console.log(modernSearch)
  return modernSearch;
  }
}

function getName() {
  var addName = $("#nameSearch").val();
  var textSearch = "&name=" + addName;
  if($("#nameSearch").val() === "") {
    return ""
  } else {
  console.log(textSearch)
  return textSearch;
  }
}


$("#submit").click(function(event) {
  event.preventDefault()

  $(".pic-container").empty();
  // $(".pic-container").html("")
  //console.log($("#addRarity").val())
  //var addColors = selectColors()
  //var addTheme = $("#colorTheme").val();
  var colorSelect = getActive();
  var typeSelect = getType();
  var raritySelect = getRarity();
  var eternalSelect = getEternal();
  var modernSelect = getModern();
  var nameSelect = getName();

  var baseUrl = "https://api.magicthegathering.io/v1/cards?"
  var getUrl = baseUrl + colorSelect + typeSelect + raritySelect + eternalSelect + modernSelect + nameSelect;
  console.log(getUrl)
  $.get(getUrl).then(function(data) {
    console.log(data)
    var cards = data.cards; //array of cards
    for (var i = 0; i < cards.length; i++) {
      updatePage(cards[i]);
    }
  })

  //console.log(addColors)
  //console.log(addTheme)
  console.log(colorSelect)
  console.log(typeSelect)
  console.log(raritySelect)
  console.log(eternalSelect)
  console.log(modernSelect)
  console.log(nameSelect)
})



// function getCard() {
//   var url = "https://api.magicthegathering.io/v1/cards?"
//   url + colorSelect + typeSelect + raritySelect + eternalSelect + modernSelect + nameSelect);
//   $.get(url).then(function(data) {
//     console.log(data)
//     var cards = data.cards; //array of cards
//     for (var i = 0; i < cards.length; i++) {
//       updatePage(cards[i]);
//     }
//   })
  // .catch(function(error) {
  //   console.log(error)
  // }
// };

function updatePage(card) {
  //$("body").append(card.name)
    $(".pic-container").append('<img src="'+ card.imageUrl + '">')
};





//
// function updatePage(card) {
//   //$("body").append(card.name)
//   $(".pic-container").append('<img src="'+ card.imageUrl + '">')
// };
//               //
//               // function showMessage(title, poster) {
//               //   $("body").append("Cool movie, yo")
//               // }
//               //
//               //   $.get("http://www.omdbapi.com/?t=rambo",
//               //   function(data) {
//               // 	console.log(data);
//               // })
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
