import { questionPool } from "./quizQuestions.js";

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

const quizBody = document.getElementById("quizBody");

for (let i = 0; i < questionPool.length; i++) {
    let div = document.createElement("div");
    div.setAttribute("id", "quizQuestions");
    div.setAttribute("class", "text-center");
    let h4 = document.createElement("h4");
    h4.innerHTML = questionPool[i].question;
  
    //append children
    quizBody.appendChild(div);
    div.appendChild(h4);
  
    // multiple choice div
    let div2 = document.createElement("div");
    div2.setAttribute("id", "quizAnswers");
    div.setAttribute("class", "text-center");
  
    let ul = document.createElement("ul");
    ul.setAttribute("class", "list-group");
    let li = document.createElement("li");
    li.setAttribute("class", "list-group-item list-group-item-action");
    let span = document.createElement("span");
    span.setAttribute("id", "answerChoices");
    //span AND li are currently useless. Need to choose one. Span could be for letter answers.
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
  
    p1.textContent = Object.keys(questionPool[i]["answers"]).join("");
    p2.textContent = Object.values(questionPool[i]["answers"]).join("");
  
    //append children
    quizBody.appendChild(div2);
    div2.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(p1);
    li.appendChild(p2);
  }
  
  /*
    <!-- <li class="list-group-item active" aria-current="true">An active item</li> -->
  
    Tomorrow I need to:
    1. Add another for-in loop that will iterate over the answers Object.keys and Values
    2. Create a div for each answer-identifier, stack them into columns, center the Object.keys vertically and horizontally in each row.
    3. Create a div for each answer, stack them into columns, center the Object.keys vertically and horizontally in each row adjacent to the letters.
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
