var currentDay = moment();
console.log("today", currentDay);

$("#currentDay").text(currentDay.format("MMM Do, YYYY"));
