const trivia = document.getElementById('trivia');
const videoButton = document.getElementById('videoButton');
const seagalPic = document.getElementById('seagalPic');
const seagalVideo = document.getElementById('seagalVideo');
const tableButton = document.getElementById('tableButton');
const movieTable = document.getElementById('movieTable');
const titleInput = document.getElementById('titleInput');
const yearInput = document.getElementById('yearInput');
const hitMe = document.getElementById('hitMe');

function clickCounter() {
  if (typeof Storage !== 'undefined') {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById('result').innerHTML =
      'You have clicked the button ' + localStorage.clickcount + ' time(s).';
  } else {
    document.getElementById('result').innerHTML = 'Sorry, your browser does not support web storage...';
  }
}

triviaFunc = () => {
  alert('Please enter the letter for the corresponding value');
  const value1 = prompt(
    "What was Steven Seagal's first movie? a: Above the Law, b: Under Siege, c; The Glimmer Man"
  );

  if (value1 === 'a') {
    alert('You got it right');
  } else {
    alert('Incorrect, Please try again.');
  }

  const value2 = prompt('How old is Seagal? a: 57, b: 72, c: 65');

  if (value2 === 'c') {
    alert('you got it right');
  } else {
    alert('You got it wrong');
  }
};

trivia.addEventListener('click', function() {
  triviaFunc();
});

videoButton.addEventListener('click', function() {
  seagalPic.classList.toggle('displayClass');
  seagalVideo.classList.toggle('displayClass');
});

tableButton.addEventListener('click', function() {
  const row = movieTable.insertRow(1);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.innerHTML = titleInput.value;
  cell2.innerHTML = yearInput.value;
});
