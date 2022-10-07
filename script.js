// jQuery methods go here...
// TODO: function to track time of each timeblock
// TODO: create function to change color of timeblock with past present and future
// TODO: save text information to local storage, and retrieve from local storage
$(document).ready(function () {
  /*Handles date display in header */
  var currentDay = moment();
  console.log("today", currentDay);

  $("#currentDay").text(currentDay.format("MMM Do, YYYY"));
  // To handle color for textblocks according to time
  function displayColor() {
    var timeDay = moment().hour();

    console.log("timeDay = ", timeDay);
    $(".time-block").each(function () {
      var colorTime = parseInt($(this).attr("id"));
      console.log("colortime = ", colorTime);
      if (colorTime < timeDay) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (colorTime === timeDay) {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  //Save button for local storage

  $(".saveBtn").click(function () {
    var userText = $(this).siblings(".description").val();
    console.log("userText = ", userText);
    var userTime = $(this).parent().attr("id");
    console.log("userTime = ", userTime);
    localStorage.setItem(userTime, userText);
  });

  //Pull text info from local storage
  var retrieve = localStorage.getItem("9");
  console.log(retrieve);
  $("#9 .description").val(retrieve);

  retrieve = localStorage.getItem("10");
  console.log(retrieve);
  $("#10 .description").val(retrieve);

  retrieve = localStorage.getItem("11");
  console.log(retrieve);
  $("#11 .description").val(retrieve);

  retrieve = localStorage.getItem("12");
  console.log(retrieve);
  $("#12 .description").val(retrieve);

  retrieve = localStorage.getItem("13");
  console.log(retrieve);
  $("#13 .description").val(retrieve);

  retrieve = localStorage.getItem("14");
  console.log(retrieve);
  $("#14 .description").val(retrieve);

  retrieve = localStorage.getItem("15");
  console.log(retrieve);
  $("#15 .description").val(retrieve);

  retrieve = localStorage.getItem("16");
  console.log(retrieve);
  $("#16 .description").val(retrieve);

  retrieve = localStorage.getItem("17");
  console.log(retrieve);
  $("#17 .description").val(retrieve);

  displayColor();
  // document.getElementById("9am").value = retrieveNine;
  // console.log(retrieveNine);

  // var retrieveTen = localStorage.getItem("todo-10am");
  // document.getElementById("10am").value = retrieveTen;
});
