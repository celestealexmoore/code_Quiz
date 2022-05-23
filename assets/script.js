import { questionPool } from "./quizQuestions.js";
let letterChoicesA,
  letterChoicesB,
  letterChoicesC,
  letterChoicesD,
  answersA,
  answersB,
  answersC,
  answersD,
  ul1,
  ul2,
  i,
  j,
  k;

function startQuiz() {
  const startButton = document.getElementById("startButton");
  const quiz = document.getElementById("quiz");
  const description = document.getElementById("description");

  startButton.onclick = function () {
    quiz.classList.toggle("hide");
    startButton.classList.add("hide");
    description.classList.add("hide");

    const counter = document.getElementById("counter");
    counter.innerHTML = 5 + ":" + 1;
    startTimer();

    function startTimer() {
      const presentTime = document.getElementById("counter");
      const timeArray = presentTime.innerHTML.split(/[:]+/);
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

ul1 = document.createElement("ul");
ul2 = document.createElement("ul");
ul1.setAttribute("class", "list-group ul");
ul2.setAttribute("class", "list-group ul");

for (i = 0; i < questionPool.length; i++) {
  const letters = Object.keys(questionPool[i]["answers"]);
  const choices = Object.values(questionPool[i]["answers"]);

  const quizBody = document.createElement("div");
  quizBody.setAttribute("id", "quizBody");
  quizBody.setAttribute("class", "col-12 break");

  const quizQuestions = document.createElement("div");
  quizQuestions.setAttribute("id", "quizQuestions");
  quizQuestions.setAttribute("class", "h4");
  quizQuestions.innerHTML = i + 1 + ". " + questionPool[i].question;

  const quizAnswers = document.createElement("div");
  quizAnswers.setAttribute("class", "row");

  //cards the letter answers and answers go in.
  const card1 = document.createElement("div");
  card1.setAttribute("class", "col-2 card1");
  const card2 = document.createElement("div");
  card2.setAttribute("class", "col-10 card2");

  //append children
  quiz.appendChild(quizBody);
  quizBody.appendChild(quizQuestions);
  quizBody.appendChild(quizAnswers);
  quizAnswers.appendChild(card1);
  quizAnswers.appendChild(card2);

  //answer loops
  for (j = 0; j < letters.length; j++) {
    letterChoicesA = document.createElement("button");
    letterChoicesA.setAttribute("type", "button");
    letterChoicesA.setAttribute(
      "class",
      "list-group-item list-group-item-action button"
    );
    letterChoicesA.innerHTML = letters[0];
    // letterChoicesA.click(function() {letterChoicesA.setAttribute("style", 'backgroundColor("gray")')})

    letterChoicesB = document.createElement("button");
    letterChoicesB.setAttribute("type", "button");
    letterChoicesB.setAttribute(
      "class",
      "list-group-item list-group-item-action button"
    );
    letterChoicesB.innerHTML = letters[1];

    letterChoicesC = document.createElement("button");
    letterChoicesC.setAttribute("type", "button");
    letterChoicesC.setAttribute(
      "class",
      "list-group-item list-group-item-action button"
    );
    letterChoicesC.innerHTML = letters[2];

    letterChoicesD = document.createElement("button");
    letterChoicesD.setAttribute("type", "button");
    letterChoicesD.setAttribute(
      "class",
      "list-group-item list-group-item-action button"
    );
    letterChoicesD.innerHTML = letters[3];
  }

  for (k = 0; k < 1; k++) {
    answersA = document.createElement("li");
    answersA.setAttribute("class", "list-group-item answers");
    answersA.innerHTML = choices[0];

    answersB = document.createElement("li");
    answersB.setAttribute("class", "list-group-item answers");
    answersB.innerHTML = choices[1];

    answersC = document.createElement("li");
    answersC.setAttribute("class", "list-group-item answers");
    answersC.innerHTML = choices[2];

    answersD = document.createElement("li");
    answersD.setAttribute("class", "list-group-item answers");
    answersD.innerHTML = choices[3];
  }

  //append children
  card1.appendChild(ul1);
  card1.appendChild(letterChoicesA);
  card1.appendChild(letterChoicesB);
  card1.appendChild(letterChoicesC);
  card1.appendChild(letterChoicesD);
  card2.appendChild(ul2);
  card2.appendChild(answersA);
  card2.appendChild(answersB);
  card2.appendChild(answersC);
  card2.appendChild(answersD);
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
