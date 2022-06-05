var today = document.getElementById("#currentDay");

function displayTime() {
  var rightNow = moment().format("MMM Do, YYYY h:mm:ss a");
  today.text(rightNow);
}

setInterval(displayTime, 1000);

NPUorder = ['P', 'A', 'B', 'C', 'E', 'R', 'H', 'V', 'X', 'L', 'T', 'F', 'Y', 'K', 'I', 'G', 'Q', 'S', 'M', 'Z', 'D', 'J', 'O', 'W', 'N'];

console.log(NPUorder.toString());
console.log(NPUorder);