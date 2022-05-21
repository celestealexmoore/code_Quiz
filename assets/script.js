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
          presentTime.innerHTML = "00"
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

let questions = [
  "Why so JavaScript and Java have similar name?",
  "When a user views a page containing a JavaScript program, which machine actually executes the script?",
  "______ JavaScript is also called client-side JavaScript.",
  " __________ JavaScript is also called server-side JavaScript.",
  "What are variables used for in JavaScript Programs?",
  "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
  "What should appear at the very end of your JavaScript?",
  "Which of the following can't be done with client-side JavaScript?",
  "Which of the following are capabilities of functions in JavaScript?",
  "Which of the following is not a valid JavaScript variable name?",
  "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
  "How does JavaScript store dates in a date object?",
  "Which of the following attribute can hold the JavaScript version?",
  'What is the correct JavaScript syntax to write "Hello World"?',
  "Which of the following way can be used to indicate the LANGUAGE attribute?",
  "Inside which HTML element do we put the JavaScript?",
  'What is the correct syntax for referring to an external script called "c.js"?',
  "Which types of image maps can be used with JavaScript?",
  "Which is the correct way to write a JavaScript array?",
  "Which of the following is not considered a JavaScript operator?",
];
