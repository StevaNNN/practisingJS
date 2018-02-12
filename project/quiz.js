/*
  name : Simple quiz game
  author : Stevan Stojanovic
*/

// ===== creating global variables for storing correct answers and medals for revarding player ===== //
var correctAnswer = 0;
var typeOfMedal = "not-set-yet";
var totalCorrectAnswers;
var goldCrown = false;
var silverCrown = false;
var bronzeCrown = false;
var noMedal = false;

// ===== creating series of questsion an conditional statmets ===== //
var question1 = prompt("How much is 3 + 4");
if (parseInt(question1) === 7) {
  correctAnswer += 1;
} else if (isNaN(question1)) {
   alert("Thats not a number");
}

var question2 = prompt("How much is 5 + 5");
if (parseInt(question2) === 10) {
  correctAnswer += 1;
} else if (isNaN(question2)) {
   alert("Thats not a number");
}

var question3 = prompt("How much is 10 - 4");
if (parseInt(question3) === 6) {
  correctAnswer += 1;
} else if (isNaN(question3)) {
   alert("Thats not a number");
}

var question4 = prompt("How much is 1 + 6");
if (parseInt(question4) === 7) {
  correctAnswer += 1;
} else if (isNaN(question4)) {
   alert("Thats not a number");
}

var question5 = prompt("How much is 2 + 5");
if (parseInt(question5) === 7) {
  correctAnswer += 1;
} else if (isNaN(question5)) {
   alert("Thats not a number");
}

// ===== creating var for storing correct answers ===== //
var totalCorrectAnswers = correctAnswer;

// ===== Printing on page ===== //
document.write("<h2>Your final score of correct answered question is " + totalCorrectAnswers);

// ===== creating conditionals for avarding player according to corect answer he/she provide
if (totalCorrectAnswers === 5) {
  goldCrown = true;
  
} else if (totalCorrectAnswers === 4) {
  silverCrown = true;
  
} else if (totalCorrectAnswers === 3) {
  bronzeCrown = true;
  
} else {
  noMedal = true;
}

// ===== creating conditional statments for avarding player ===== //
if ( goldCrown ){
  typeOfMedal = document.write("<h2>Congratz you have answered all 5 questions correctly and earned a GOLDEN crown!!");
}

if ( silverCrown ){
  typeOfMedal = document.write("<h2>Congratz you have answered 4 question corectly and earned a SILVER medal!!");
}

if ( bronzeCrown ){
  typeOfMedal = document.write("<h2>Congratz you have answered 3 question corectly and earned a BRONZE medal!!");
}

if ( noMedal ) {
  typeOfMedal = document.write("<h2>Congratz you answered correcttly only on " + correctAnswer + " question, but you dont deserve a medal!!");
}