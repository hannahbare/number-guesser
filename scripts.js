var userInputMin = document.querySelector('#userinput__low');
var userInputMax = document.querySelector('#userinput__high');
var guessBtn = document.getElementById('guess__btn');
var clearBtn = document.getElementById('clear__btn');
var resetBtn = document.getElementById('reset__btn');
var randomNum = Math.floor(Math.random()* 100)+1;
console.log(randomNum);

guessBtn.addEventListener('click', showValue);
userInputMin.addEventListener('keyup', enableBtns);
clearBtn.addEventListener('click', clearInputField);
resetBtn.addEventListener('click', resetGame);

function showValue(e){
  e.preventDefault();
  var value = getValue();
  compareVals(value);
  var guessDisplay = document.getElementById('guess--display');
  guessDisplay.innerHTML = value;
}

function getValue(){
  var stringValue = userInputMin.value;
  var parsedValue = parseInt(stringValue);
  return parsedValue;
}

function compareVals(value){
  var compareResults = document.getElementById('compare--results');
  var result; 
  if (value > 100){
    result = "ERROR: That's out of range. <br/>Pick a number between 1 and 100."
  } else if (value < 1){
    result = "ERROR:: That's out of range. <br/>Pick a number between 1 and 100."
  } else if (Number.isNaN(value)){
    result = "ERROR: That isn't a number. <br/>Pick a number between 1 and 100."
  } else if (value < randomNum){
    result = "That's too low!"
  } else if (value > randomNum){
    result = "That's too high!"
  } else if (value === randomNum){
    result = "BOOM";
  } compareResults.innerHTML = result;
}

function enableBtns(value){
  if( value != ''){
    guessBtn.disabled = false;
    clearBtn.disabled = false;
    resetBtn.disabled = false;
  }
}

function clearInputField(){
  userInput.value = ' ';
}

function resetGame(){
  window.location.reload(true);
}





