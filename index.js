var readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log("Quiz Rules: ")
console.log(chalk.blue("1.All questions are compulsary"))
console.log(chalk.blue("2.Each question carries 4 marks"))
console.log(chalk.blue("3.Wrog question will takeaway 1 mark\n"))



console.log("HOW MUCH YOU KNOW ABOUT OLYMPIC 2021?")
var userName = readlineSync.question("May i know your name? \n")


console.log("Hello " + chalk.green(userName+"!") + "  Welcome..." );
console.log("Test your knowledge of Tokyo Olympic 2021")
console.log("----------------------------------------------\n")


initialScore = 0;

let quiz = [{
  question : " 1. Which medal india won at the tokyo olympics 2020 in Mens-Hockey",
  a : "[a] Gold",
  b : "[b] Bronze",
  c : "[c] Silver",
  correctAnswer : "b"
},
 {
  question : "2. Who is the current captain of the India Hockey team (Men)?",
  a : "[a] Manpreet singh",
  b : "[b] K D Singh",
  c : "[c] PR Sreejesh",
  correctAnswer : "a"
},
{
  question : "3. Who won the gold medal in the men’s javelin throw event at the 2020 Tokyo Olympics?",
  a : "[a] Jakub Vadlejch",
  b : "[b] Marcos Alonso",
  c : "[c] Neeraj Chopra",
  correctAnswer : "c"
},
{
   question : "4. Who will be the flag bearer of India in closing cermany of Tokyo olympics 2020?",
  a : "[a] vinesh Phogat",
  b : "[b] Bhajrang Punia ",
  c : "[c] Neeraj Chopra",
  correctAnswer : "b"
},
{
   question : "5. Aditi Ashok is related to which Game?",
  a : "[a] Tennis",
  b : "[b] Fencing ",
  c : "[c] Golf",
  correctAnswer : "c"
}
]



function playQuiz() {
for (var i=0; i<quiz.length; i++) {
  var questions = quiz[i].question;
  var optionOne = quiz[i].a;
  var optionTwo = quiz[i].b;
  var optionThree = quiz[i].c;

  console.log(chalk.red(questions))
  console.log(optionOne)
  console.log(optionTwo)
  console.log(optionThree)
  var answer = readlineSync.question("whats your answer? (a/b):  ")
  if (answer === quiz[i].correctAnswer) {
    console.log(chalk.green("You are Right!"))
    initialScore = initialScore + 4;
    console.log("Your Score is: " + chalk.blue(initialScore)+"\n")
  }
  else {
    console.log(chalk.red("Oops! Wrong Answer"))
    initialScore = initialScore - 1;
    console.log("CurrentScore is: " + chalk.blue(initialScore)+"\n")
  }
}
console.log("-----------------------------------------\n")
console.log(chalk.yellow("Congragulations! You Scored :", initialScore))
console.log("Thanks for playing!, CheckOut the High scores below. If you want to be there ping me, I'll update.\n")

console.log(chalk.yellow("Venkatesh : 20"))
console.log(chalk.yellow("Renuka : 15"))
}





playQuiz();