function startQuiz() {
  let startButton = document.getElementById("startButton");
  let quiz = document.getElementById("quiz");
  let description = document.getElementById("description");

  startButton.onclick = function () {
    quiz.classList.toggle("hide");
    startButton.classList.add("hide");
    description.classList.add("hide");

    let counter = document.getElementById("counter");
    counter.innerHTML = 5 + ":" + 01;
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
