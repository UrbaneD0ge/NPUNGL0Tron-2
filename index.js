document.querySelectorAll('.btn').forEach(item => { item.addEventListener('click', chgColor)
});

colors = ['btn btn-block btn-warning', 'btn btn-block btn-success', 'btn btn-block btn-dark', 'btn btn-block btn-primary']

function chgColor () {
  let color = colors.shift();
  colors.push(color);
  this.className = color;
};

// use Temporal js or Moment.js to get current month, month.length, weekday of 1st day

const today = $("#currentDay");

function displayTime() {
  var rightNow = moment().format("LLLL");
  today.text(rightNow);
}

setInterval(displayTime, 1000);

const month = new moment().format("MMM");
console.log(month);

const wkdays = new moment.weekdays();
console.log(wkdays);

// NPU dates are essentially calendar columns, since they do not deviate from their weekdays. Must handle rescheduling, cancellation.

// Array of NPUs, starting from 1st day of month, assign to calendar grid.

// Save button states to local storage
function savePngl() {
  var progress = document.querySelectorAll('.btn').className;
  var pnglID = document.querySelectorAll('.btn').attr('id');
  localstorage.setItem(progress, pnglID);
}

$('.btn').on('click', savePngl);