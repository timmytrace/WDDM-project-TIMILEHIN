
// adding some styles to the body
// adding color to the text
document.querySelector("body").style.color = "white";
// adding color to the background
document.querySelector("body").style.background = "#6D972E";
// changing the font size
document.querySelector("body").style.fontSize = "200%";
// adding an h2 element
document.getElementById("main").innerHTML = "MY LIFE!!!";

$(document).ready(function () {
  console.log("HELLO");
  // FETCHING DATA FROM JSON FILE

  $.getJSON("data.json", function (data) {
    var items = [];
    $.each(data, function (key, val) {
      console.log("THE KEY: " + key + "   THE VALUE: " + val);

      items.push("<li>" + key + " : " + val + "</li>");
    });

    $("<ul/>", {
      class: "my-new-list",
      html: items.join(""),
    }).appendTo("body");
  });
});
