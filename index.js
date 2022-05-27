document.querySelectorAll('.btn').forEach(item => { item.addEventListener('click', chgColor)
});

colors = ['btn btn-block btn-warning', 'btn btn-block btn-success', 'btn btn-block btn-primary']

function chgColor () {
  color = colors.shift();
  colors.push(color);
  document.querySelectorAll('btn').className = color.value;
  console.log(color)
};

// use Temporal js or Moment.js to get current month, month.length, weekday of 1st day

// NPU dates are essentially calendar columns, since they do not deviate from their weekdays. Must handle rescheduling, cancellation.

// Array of NPUs, starting from 1st day of month, push to calendar grid.