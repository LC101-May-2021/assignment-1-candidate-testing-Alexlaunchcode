const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " " ;
let questions = ["Who was the first American women in space? ", "True or False: 5 kilometers == 5000 meters? ", "(5 + 3)/2 * 10 =? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswers = []

//console.log("Who was the first American woman in space? ")

//candidateAnswer = input.question()


function askForName() {
  // TODO 1.1b: Ask for candidate's name //


candidateName = input.question("What is your name? ");

//console.log(candidateName);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i <5; i++){

candidateAnswers[i] = input.question(`${questions [i]} `)

  }

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
//if (candidateAnswer === correctAnswer) {
//  console.log("That is correct");
//}   else {
 //     console.log("False, the answer is Sally Ride");
   // }
  let grade =0;
for (let i = 0; i <5; i++){
  if (candidateAnswers[i] === correctAnswers[i]) {
    grade +=1
  }
  console.log(`${i+1}.Candidate's answer = ${candidateAnswers[i]}, The correct answer is ${correctAnswers[i]}\n`)
}


console.log(`overall grade: ${grade * 20}%, ${grade}/5 Responses correct.`) 
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  //console.log(candidateName)
  console.log(`Hello ${candidateName}, This test is case sensitive.`) //Since this portion is part 3 I am just making it a feature for now that cases matter.
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};