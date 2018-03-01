$(function() {
  function setLayout() {
    if (!isLoggedIn()) {
      $("#submitLink").hide();

      // show loginId/register form
    } else {
      $("#submitLink").show();
      // hide login/reg
    }
  }
  function isLoggedIn() {
    var token = localStorage.token;
    return typeof token === "string" && token.length ? true : false;
  }
  function createList() {
    $.ajax({
      url: "https://hack-or-snooze.herokuapp.com/stories?skip=0&limit=10",
      dataType: "json",
      success: function(response) {
        console.log(response.data);
        var stories = response.data;
        $("#stories").empty();
        for (var i = 0; i < stories.length; i++) {
          $("#stories").append(
            "<li><i class='far fa-star'></i> " +
              stories[i].title +
              " <span class='text-secondary'>(" +
              stories[i].url +
              ")</span></li>"
          );
        }
      },
      type: "GET"
    });
  }
  //Step1
  var $username = $("#LoginButtonDiv-submit").on("click", function() {
    $.ajax("#Username");
  });
  $("#LoginButtonDiv").on("click", function() {
    $("#signup-button").fadeToggle();
    var $name = $("#Name").val();
    var $userName = $("#Username").val();
    var $password = $("#Password").val();
    $.ajax({
      method: "POST",
      dataType: "json",
      url: "https://hack-or-snooze.herokuapp.com/users",
      headers: {
        Accept: "application/json"
      },
      data: {
        data: {
          username: $userName,
          name: $name,
          password: $password
        }
      }
    }).then(function(response) {
      console.log(response);
    });
  });
  $("#Login").on("click", function() {
    var $userName = $("#Username").val();
    var $password = $("#Password").val();
    $.ajax({
      method: "POST",
      url: "https://hack-or-snooze.herokuapp.com/auth",
      data: {
        data: {
          username: $userName,
          password: $password
        }
      }
    }).then(function(auth) {
      localStorage.token = auth.data.token;
      localStorage.username = $userName;
      setLayout();
    });
  });
  $("#story-form").on("submit", function(e) {
    e.preventDefault();
    var inputName = $("#inputName").val();
    var inputUrl = $("#inputUrl").val();
    // stories.push({
    //   name: inputName,
    //   url: inputUrl
    // });
    // console.log(stories);
    $.ajax({
      method: "POST",
      url: "https://hack-or-snooze.herokuapp.com/stories?skip=0&limit=10",
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        data: {
          username: localStorage.username,
          title: inputName,
          author: localstorage.username,
          url: inputUrl
        }
      }.then(function() {
        createList();
      })
    });
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
  setLayout();
  createList();
});
