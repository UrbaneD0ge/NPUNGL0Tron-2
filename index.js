document.querySelectorAll('.btn').forEach(item => { item.addEventListener('click', chgColor)
});

colors = ['btn btn-block btn-warning', 'btn btn-block btn-success', 'btn btn-block btn-primary']

function chgColor () {
  color = colors.shift();
  colors.push(color);
  document.querySelectorAll('btn').className = color.value;
  console.log(color)
};

// use Temporal js or Moment.js to get current month, month.length

// Array of NPUs, starting from 1st day of month, push to calendar grid.