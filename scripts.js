//THINGS I WANT TO MAKE BETTER
//1. less global variables
//2. understand how to do second level of phase 3.
//3. use a switch statment instead of if/else statements



var userInputMin = document.querySelector('#userinput__low');
var userInputMax = document.querySelector('#userinput__high');
var userGuess = document.querySelector('#userinput__guess');
var setRangeBtn = document.querySelector('#range__btn');
var guessBtn = document.querySelector('#guess__btn');
var clearBtn = document.querySelector('#clear__btn');
var resetBtn = document.querySelector('#reset__btn');
var minNum = 0;
var maxNum = 100;
var randomNum;

guessBtn.addEventListener('click', showValue);
setRangeBtn.addEventListener('click', genNumber);
userGuess.addEventListener('keyup', enableBtns);
clearBtn.addEventListener('click', clearInputField);
resetBtn.addEventListener('click', resetGame);

function genNumber(){
  minNumber();
  maxNumber();
  randomNumber();
}

function minNumber(){
  minNum = parseInt(userInputMin.value);
}

function maxNumber(){
  maxNum = parseInt(userInputMax.value);
}

function randomNumber(){
  randomNum = Math.floor(Math.random() * (maxNum - minNum) + minNum) + 1;
  console.log('Watta cheata: ' + randomNum);
}

function showValue(event){
  event.preventDefault();
  var guessVal = getValue();
  compareVals(guessVal);
  var displayNum = document.getElementById('guess--display');
  displayNum.innerHTML = guessVal;
}

function getValue(){
  var userNum = userGuess.value; 
  var guessedNum = parseInt(userNum);
  return guessedNum;
}


function compareVals(guessVal){
  var compareResults = document.getElementById('compare--results');
  var result; 
  compareResults.innerText = result;
  switch(guessVal){ 
    case guessVal > maxNum:
      result = "That's too high! Pick a number between " + minNum + " and " + maxNum;
      break;
    case guessVal < minNum:
      result = "That's too low! Pick a number between " + minNum + " and " + maxNum;
      break;
    case Number.isNaN(guessVal):
      result = "ERROR: That isn't a number. Pick a number between " + minNum + " and " + maxNum;
      break;
    case guessVal < randomNum:
      result = "That's too low!";
      break;
    case guessVal > randomNum:
      result = "That's too high!";
      break;
    case guessVal === randomNum:
      result = "BOOM";
      levelUp();
      break;
    }
}

// function compareVals(guessVal){
//   var compareResults = document.getElementById('compare--results');
//   var result; 
//   if (guessVal > maxNum){
//     result = "That's too high! Pick a number between " + minNum + " and " + maxNum;
//   } else if (guessVal < minNum){
//     result = "That's too low! Pick a number between " + minNum + " and " + maxNum;
//   } else if (Number.isNaN(guessVal)){
//     result = "ERROR: That isn't a number. Pick a number between " + minNum + " and " + maxNum;
//   } else if (guessVal < randomNum){
//     result = "That's too low!"
//   } else if (guessVal > randomNum){
//     result = "That's too high!"
//   } else if (guessVal === randomNum){
//     result = "BOOM";
//     levelUp();
//   } compareResults.innerText = result;
// }

function levelUp(){
  var levelUpInfo = document.querySelector('.hide');
  var tenLower = document.querySelector('.ten-lower');
  var tenHigher = document.querySelector('.ten-higher');
  minNum = minNum - 10;
  maxNum = maxNum + 10;
  randomNumber();
  levelUpInfo.classList.remove('hide');
  levelUpInfo.innerText = ('Nice work! Your range is now ' + minNum + ' through ' + maxNum);
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
