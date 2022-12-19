var readlineSync = require('readline-sync');

var username = readlineSync.question("May I know your name");
console.log("Welcome" + " " + username + " " + "It will be a fun game.");
console.log("Do you know me?");
console.log("Rules to play: There are few questions about me \n and check how much do you know me \n you need to type your answer");


var score = 0;
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  console.log("you entered" + " " + userAnswer);
  if (userAnswer.toLowerCase() == answer.toLowerCase()) {
    console.log("right");
    score = score + 1;
  }
  else {
    console.log("wrong");
  }

}

var quizzQuestion = [{
  question: "1.What is my name?  \n",
  answer: "tanya"
},
{
  question: "2.Where do I live(state name)?   \n",
  answer: "uttar pradesh"
},

{
  question: "3.Where do I study(city name)? \n",
  answer: "mathura"
},

{
  question: "4.What is my college name?  \n",
  answer: "gla university"
},

{
  question: "5.What is the course in which I am studying? \n",
  answer: "bca"
},

{
  question: "6.What is my favourite food? \n",
  answer: "chiense"
}


];

for (i = 0; i < quizzQuestion.length; i++) {
  var c = quizzQuestion[i];
  play(c.question, c.answer)

}
console.log("your final score:" + score);
console.log("thanks for playing_ _ _ _ _");