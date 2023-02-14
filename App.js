//UI variables

const habitInput = document.getElementById('habit');
const durationInput = document.getElementById('duration');
const submit = document.getElementById('btn');
const firstDiv = document.getElementById('first');
const firstPar = document.getElementById('myPar');
const preamble = document.getElementById('preamble');
const outputDiv = document.getElementById('downDiv');

//i set select to the inteval inout
var select = document.getElementById('intervalSelect');

//a function to get the index and value of the select options when changed
select.addEventListener('change', function () {
  var selected = this.options[this.selectedIndex].value;
  var interval = selected;
  var index = this.selectedIndex;

  //changing the label text of the duration input when the interval select option is changed
  switch (index) {
    case 0:
      document.getElementById('durationLabel').innerHTML =
        'Enter the number of times per day ';
      break;
    case 1:
      document.getElementById('durationLabel').innerHTML =
        'Enter the number of hours per day ';
      break;
    case 2:
      document.getElementById('durationLabel').innerHTML =
        'Enter the number of minutes per day ';
      break;
    case 3:
      document.getElementById('durationLabel').innerHTML =
        'Enter the number of times per day ';
      break;
  }

  //an onclick event listener on the BUTTON to render changes to the output div
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    habit = habitInput.value;
    duration = durationInput.value;
    outputDiv.style.display = 'block';
    // console.log(duration);

    //appending a text to the preamble paragraph while passing the habit, duration and interval objects
    preamble.innerHTML = `If you ${habit} ${duration} ${interval} per day...`;

    //calculation to display  in the output div
    threeMonths = (duration * 30) * 3;
    sixMonths = (duration * 30) * 6;
    year = (duration * 365);
    // console.log(threeMonths);
    // console.log(sixMonths);
    // console.log(year);

    //appending the calculated values to the output div
    threeMonthsValue = document.getElementById('threeMonths');
    threeMonthsValue.innerHTML = `${threeMonths} ${interval}`;

    sixMonthsValue = document.getElementById('sixMonths');
    sixMonthsValue.innerHTML = `${sixMonths} ${interval}`;

    yearValue = document.getElementById('year');
    yearValue.innerHTML = `${year} ${interval}`;
  });
});
