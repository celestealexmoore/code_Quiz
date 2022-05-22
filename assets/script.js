import { questionPool } from "./quizQuestions.js";
let letterChoices;
let answers;
let ul1;
let ul2;

function startQuiz() {
  let startButton = document.getElementById("startButton");
  let quiz = document.getElementById("quiz");
  let description = document.getElementById("description");

  startButton.onclick = function () {
    quiz.classList.toggle("hide");
    startButton.classList.add("hide");
    description.classList.add("hide");

    let counter = document.getElementById("counter");
    counter.innerHTML = 5 + ":" + 1;
    startTimer();

    function startTimer() {
      let presentTime = document.getElementById("counter");
      let timeArray = presentTime.innerHTML.split(/[:]+/);
      let m = timeArray[0];
      let s = checkSecond(timeArray[1] - 1);
      if (s == 59) {
        m = m - 1;
      }
      if (m < 0) {
        presentTime.innerHTML = "00";
        return;
      }

      document.getElementById("counter").innerHTML = m + ":" + s;
      setTimeout(startTimer, 1000);

      function checkSecond(sec) {
        if (sec < 10 && sec >= 0) {
          sec = "0" + sec;
        } // add zero in front of numbers < 10
        if (sec < 0) {
          sec = "59";
        }
        return sec;
      }
    }
  };
}
startQuiz();

// create divs for questions and answers, append to the body
const quiz = document.getElementById("quiz");

for (let i = 0; i < questionPool.length; i++) {
  let letters = Object.keys(questionPool[i]["answers"]).join("");
  let choices = Object.values(questionPool[i]["answers"]).join("");

  const quizBody = document.createElement("div");
  quizBody.setAttribute("id", "quizBody");
  quizBody.setAttribute("class", "col-12");

  let quizQuestions = document.createElement("div");
  quizQuestions.setAttribute("id", "quizQuestions");
  quizQuestions.setAttribute("class", "h4");
  quizQuestions.innerHTML = questionPool[i].question;

  let quizAnswers = document.createElement("div");
  quizAnswers.setAttribute("class", "row");

  //cards the letter answers and answers go in.
  let card1 = document.createElement("div");
  card1.setAttribute("class", "col-2");
  let card2 = document.createElement("div");
  card2.setAttribute("class", "col-10");

  //append children
  quiz.appendChild(quizBody);
  quizBody.appendChild(quizQuestions);
  quizBody.appendChild(quizAnswers);
  quizAnswers.appendChild(card1);
  quizAnswers.appendChild(card2);

  //answer loops
  for (let j = 0; j < letters.length; j++) {
    ul1 = document.createElement("ul");
    ul1.setAttribute("class", "list-group");
    letterChoices = document.createElement("li");
    letterChoices.setAttribute(
      "class",
      "list-group-item list-group-item-action"
    );
    letterChoices.innerHTML = letters;
    console.log(letterChoices.innerHTML);
  }

  for (let k = 0; k < choices.length; k++) {
    ul2 = document.createElement("ul");
    ul2.setAttribute("class", "list-group");
    answers = document.createElement("li");
    answers.setAttribute("class", "list-group-item");
    answers.innerHTML = choices;
  }

  //append children
  card1.appendChild(ul1);
  card1.appendChild(letterChoices);
  card2.appendChild(ul2);
  card2.appendChild(answers);
}

/*
    <!-- <li class="list-group-item active" aria-current="true">An active item</li> -->
  
    Tomorrow I need to:
    4. on click, provide feedback for answers.
    5. Figure out how to show one question div at a time.
    6. provide feedback for each question (flash, "Sorry, that's the wrong answer") and switch to next question.
    7. View highscores onClick
    8. figure out how to calculate and store a score, and present on the screen.
    9. figure out how to allow highscores to persist even if the page reloads.
    10. timer should -10 for each wrong answer.
  
  */

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
