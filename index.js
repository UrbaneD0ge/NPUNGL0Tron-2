document.querySelectorAll('.btn').forEach(item => { item.addEventListener('click', chgColor)
});

colors = ['btn btn-block btn-warning', 'btn btn-block btn-success', 'btn btn-block btn-dark', 'btn btn-block btn-primary']

function chgColor () {
  let color = colors.shift();
  colors.push(color);
  this.className = color;
};

const today = $("#currentDay");

function displayTime() {
  var rightNow = moment().format("LLLL");
  today.text(rightNow);
}

setInterval(displayTime, 1000);

// use Temporal js or Moment.js to get current month, month.length, weekday of 1st day

const wkdays = new moment.weekdays();
console.log(wkdays);

const month = new moment().format("MMMM");
const year = new moment().format("YYYY");
console.log(month);
console.log(year)

function getThirdFriday(year, month){
  // Convert date to moment (month 0-11)
  var myMonth = moment({ year: year, month: month });

  // Get first Friday of the first week of the month
  var firstFriday = myMonth.weekday(4);
  var nWeeks = 2;
  // Check if first Friday is in the given month
  if( firstFriday.month() != month ){
      nWeeks++;
  }
  // Return 3rd Friday of the month formatted (custom format)
  return firstFriday.add(nWeeks, 'weeks').format("DD MMMM YYYY");
}

// NPU dates are essentially calendar columns, since they do not deviate from their weekdays. Must handle rescheduling, cancellation.

// Array of NPUs, starting from 1st day of month, assign to calendar grid.

// Save button states to local storage
function savePngl() {
  var progress = document.querySelectorAll('.btn').className;
  var pnglID = document.querySelectorAll('.btn').attr('id');
  localstorage.setItem(progress, pnglID);
}

$('.btn').on('click', savePngl);