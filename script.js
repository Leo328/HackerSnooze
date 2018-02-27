$(function() {
  var stories = [
    {
      name: "Google",
      url: "http://www.google.com"
    },
    {
      name: "Who the hell still uses this?",
      url: "http://www.askjeeves.com"
    },
    {
      name: "Facebook",
      url: "http://www.facebook.com"
    }
  ];

  //   <i class="far fa-star"></i>
  function createList() {
    $("#stories").empty();
    for (var i = 0; i < stories.length; i++) {
      $("#stories").append(
        "<li><i class='far fa-star'></i> " +
          stories[i].name +
          " <span class='text-secondary'>(" +
          stories[i].url +
          ")</span></li>"
      );
    }
  }
  $("#story-form").on("submit", function(e) {
    e.preventDefault();
    var inputName = $("#inputName").val();
    var inputUrl = $("#inputUrl").val();
    stories.push({
      name: inputName,
      url: inputUrl
    });
    debugger;
    console.log(stories);
    createList();
  });
  $("#stories").on("click", ".fa-star", function() {
    if ($(this).hasClass("far")) {
      $(this)
        .removeClass("far")
        .addClass("fas");
    } else {
      $(this)
        .removeClass("fas")
        .addClass("far");
    }
  });
  console.log(stories);

  createList();
});

// function createList() {
//     $('#stories').empty();
//     for (var i = 0; i < stories.length; i++) {
//       $("#stories").append("<li><i class='far fa-star'></i> " + stories[i].name + " <span class='text-secondary'>(" + stories[i].url + ")</span></li>");
//     }
//   }
//   $('#story-form').on('submit', function (e) {
//     e.preventDefault();
//     stories.push({
//       name: $('#inputName').val(),
//       url: $('#inputUrl').val()
//     });
//     console.log(stories);
//     createList();
//   });
//   $('#stories').on('click', '.fa-star', function () {
//     if ($(this).hasClass('far')) {
//       $(this).removeClass('far').addClass('fas');
//     }
//     else {
//       $(this).removeClass('fas').addClass('far');
//     }
//   })
//   console.log(stories);

//   createList();
// });
