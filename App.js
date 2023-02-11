//UI variables

const habitInput = document.getElementById('habit');
const interval = document.getElementById('interval').value;
const duration = document.getElementById('duration').value;
const submit = document.getElementById('btn');
const firstDiv = document.getElementById('first');
const firstPar = document.getElementById('myPar');
const prePar = document.getElementById('preamble');



submit.addEventListener('click', function (e){
  e.preventDefault();
  hab = habit.value;
  console.log(hab);
//   console.log(duration);
//   console.log(interval);
  var preamble = document.createTextNode(`If you ${hab} per day...`);
  prePar.appendChild(preamble);

//   var textToAdd = document.createTextNode('hEYYYA');
//   firstPar.appendChild(textToAdd);
//   firstDiv.appendChild(firstPar);
});
