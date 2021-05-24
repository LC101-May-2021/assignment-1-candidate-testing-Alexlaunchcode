const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer ;
let questions = ["Who was the first American women in space", "True or false: 5 kilometers == 5000 meters", "(5 + 3)/2 * 10 = ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2", "What is the minimum crew size for the ISS"];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = ["a"," b", "c", "d", 'e']

//console.log("Who was the first American woman in space? ")

//candidateAnswer = input.question()


function askForName() {
  // TODO 1.1b: Ask for candidate's name //


candidateName = input.question("What is your name? ");

//console.log(candidateName);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
candidateAnswers[0] = input.question(`${questions [0]}? `)
candidateAnswers[1] = input.question(`${questions [1]}? `)
candidateAnswers[2] = input.question(`${questions [2]}? `)
candidateAnswers[3] = input.question(`${questions [3]}? `)
candidateAnswers[4] = input.question(`${questions [4]}? `)




//console.log(candidateAnswers)
//console.log(candidateAnswers[0][1])

//console.log(correctAnswer, candidateAnswer)

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
//if (candidateAnswer === correctAnswer) {
//  console.log("That is correct");
//}   else {
 //     console.log("False, the answer is Sally Ride");
   // }

console.log(`1.Candidate's answer = ${candidateAnswers[0]}, The correct answer is ${correctAnswers[0]}\n2.Candidate's answer = ${candidateAnswers[1]}, The correct answer is ${correctAnswers[1]}\n3.Candidate's answer = ${candidateAnswers[2]}, The correct answer is ${correctAnswers[2]}\n4.Candidate's answer = ${candidateAnswers[3]}, The correct answer is ${correctAnswers[3]}\n5.Candidate's answer = ${candidateAnswers[4]}, The correct answer is ${correctAnswers[4]}\n  `)

  let grade =0;
  let grade2 =0;
  if (candidateAnswers[0] === correctAnswers[0]) {
    grade +=1
  }
  if (candidateAnswers[1] === correctAnswers[1]) {
    grade +=1
  }
  if (candidateAnswers[2] === correctAnswers[2]) {
    grade +=1
  }
  if (candidateAnswers[3] === correctAnswers[3]) {
    grade +=1
  }
  if (candidateAnswers[4] === correctAnswers[4]) {
    grade +=1
  }
grade2 = 20 * grade
console.log(`overall grade: ${grade2}%, ${grade}/5 Responses correct.`) 
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  //console.log(candidateName)
  console.log(`Hello, ${candidateName}.`)
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