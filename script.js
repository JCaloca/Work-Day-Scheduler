$(document).ready(function () {
  // jQuery methods go here...
  // TODO: function to track time of each timeblock
  // TODO: create function to change color of timeblock with past present and future
  // TODO: save text information to local storage, and retrieve from local storage
});

/*Handles date display in header */
var currentDay = moment();
console.log("today", currentDay);

$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

//Save button for local storage
$(".saveBtn").click(function () {
  var nineAMText = document.getElementById("9am").value;
  localStorage.setItem("todo-9am", "nineAMText");
  console.log(nineAMText);

  var tenAMText = document.getElementById("10am").value;
  localStorage.setItem("todo-10am", "tenAMText");
  console.log(tenAMText);

  var elevenAMText = document.getElementById("11am").value;
  localStorage.setItem("todo-11am", "elevenAMText");
  console.log(elevenAMText);

  var twelvePMText = document.getElementById("12pm").value;
  localStorage.setItem("todo-12pm", "twelvePMText");
  console.log(twelvePMText);

  var onePMText = document.getElementById("1pm").value;
  localStorage.setItem("todo-1pm", "onePMText");
  console.log(onePMText);

  var twoPMText = document.getElementById("2pm").value;
  localStorage.setItem("todo-2pm", "twoPMText");
  console.log(twoPMText);

  var threePMText = document.getElementById("3pm").value;
  localStorage.setItem("todo-3pm", "threePMText");
  console.log(threePMText);

  var fourPMText = document.getElementById("4pm").value;
  localStorage.setItem("todo-4pm", "fourPMText");
  console.log(fourPMText);

  var fivePMText = document.getElementById("5pm").value;
  localStorage.setItem("todo-5pm", "fivePMText");
  console.log(fivePMText);
});
