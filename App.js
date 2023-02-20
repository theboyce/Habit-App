//UI variables

const habitInput = document.getElementById('habit');
const durationInput = document.getElementById('duration');
const submit = document.getElementById('btn');
const firstDiv = document.getElementById('first');
const firstPar = document.getElementById('myPar');
const preamble = document.getElementById('preamble');
const outputDiv = document.getElementById('downDiv');

const select = document.getElementById('intervalSelect');

let selected;
habit = habitInput.value;
duration = durationInput.value || 0;

//a function to get the index and value of the select options when changed
select.addEventListener('change', function (e) {
  selected = e.target.value;

  document.getElementById(
    'durationLabel'
  ).innerHTML = `Enter the number of ${selected} per day `;

  validateInput();
});

function validateInput() {
  //appending a text to the preamble paragraph while passing the habit, duration and interval objects

  preamble.innerHTML = `If you ${habit} ${duration} ${selected} per day...`;

  //calculation to display  in the output div
  threeMonths = duration * 30 * 3;
  sixMonths = duration * 30 * 6;
  year = duration * 365;

  //appending the calculated values to the output div
  threeMonthsValue = document.getElementById('threeMonths');
  threeMonthsValue.innerHTML = `${threeMonths} ${selected}`;

  sixMonthsValue = document.getElementById('sixMonths');
  sixMonthsValue.innerHTML = `${sixMonths} ${selected}`;

  yearValue = document.getElementById('year');
  yearValue.innerHTML = `${year} ${selected}`;

  if (duration) {
    outputDiv.style.display = 'block';
  } else {
    outputDiv.style.display = 'none';
  }
}

habitInput.addEventListener('change', function (e) {
  habit = e.target.value;
  validateInput();
});

durationInput.addEventListener('change', function (e) {
  duration = e.target.value;
  validateInput();
});
