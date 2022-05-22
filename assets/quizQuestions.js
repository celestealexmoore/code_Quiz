const questions = document.getElementById("quizQuestions");
const answerChoices = document.getElementById("answerChoices");
const quizBody = document.getElementById("quizBody");


const questionPool = [
  {
    question: "Why do JavaScript and Java have similar names?",
    answers: {
      A: "JavaScript is a stripped-down version of Java",
      B: "JavaScript's syntax is loosely based on Java's",
      C: "They both originated on the island of Java",
      D: "None of the above",
    },
    correctAnswer: "B",
  },
  {
    question:
      "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    answers: {
      A: "The User's machine running a Web browser",
      B: "The Web server",
      C: " A central machine deep within Netscape's corporate offices",
      D: "None of the above",
    },
    correctAnswer: "A",
  },
  {
    question: "__________ JavaScript is also called server-side JavaScript.",
    answers: {
      A: "Microsoft",
      B: "Navigator",
      C: "LiveWire",
      D: "Native",
    },
    correctAnswer: "C",
  },
  {
    question: "______ JavaScript is also called client-side JavaScript.",
    answers: {
      A: "Microsoft",
      B: "Navigator",
      C: "LiveWire",
      D: "Native",
    },
    correctAnswer: "B",
  },
  {
    question: "What are variables used for in JavaScript Programs?",
    answers: {
      A: "Storing numbers, dates, or other values",
      B: "Varying randomly",
      C: "Causing high-school algebra flashbacks",
      D: "None of the above",
    },
    correctAnswer: "A",
  },
  {
    question:
      "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
    answers: {
      A: "Client-side",
      B: "Server-side",
      C: "Local",
      D: "Native",
    },
    correctAnswer: "A",
  },
  {
    question: "What should appear at the very end of your JavaScript?",
    answers: {
      A: "The </script>",
      B: "The <script>",
      C: "The END statement",
      D: "None of the above",
    },
    correctAnswer: "A",
  },
  {
    question:
      'What is the correct syntax for referring to an external script called "abc.js"?',
    answers: {
      A: '<script href="abc.js">',
      B: '<script name="abc.js">',
      C: '<script src="abc.js">',
      D: "None of the above",
    },
    correctAnswer: "C",
  },
  {
    question: "Which types of image maps can be used with JavaScript?",
    answers: {
      A: "Server-side image maps",
      B: "Client-side image maps",
      C: "Server-side image maps and Client-side image maps",
      D: "None of the above",
    },
    correctAnswer: "B",
  },
  {
    question:
      "Which of the following attribute can hold the JavaScript version?",
    answers: {
      A: "LANGUAGE",
      B: "SCRIPT",
      C: "VERSION",
      D: "None of the above",
    },
    correctAnswer: "A",
  },
  {
    question: "How does JavaScript store dates in a date object?",
    answers: {
      A: "The number of milliseconds since January 1st, 1970",
      B: "The number of days since January 1st, 1900",
      C: "The number of seconds since Netscape's public stock offering.",
      D: "None of the above",
    },
    correctAnswer: "A",
  },
  {
    question:
      "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
    answers: {
      A: "<SCRIPT>",
      B: "<BODY>",
      C: "<HEAD>",
      D: "<TITLE>",
    },
    correctAnswer: "A",
  },
  {
    question: "Which of the following is not a valid JavaScript variable name?",
    answers: {
      A: "2names",
      B: "_first_and_last_names",
      C: "FirstAndLast",
      D: "None of the above",
    },
    correctAnswer: "A",
  },
  {
    question:
      "Which of the following are capabilities of functions in JavaScript?",
    answers: {
      A: "Return a value",
      B: "Accept parameters and Return a value",
      C: "Accept parameters",
      D: "None of the above",
    },
    correctAnswer: "C",
  },
  {
    question:
      "Which of the following can't be done with client-side JavaScript?",
    answers: {
      A: "Validating a form",
      B: "Sending a form's contents by email",
      C: "Storing the form's contents to a database file on the server",
      D: "None of the above",
    },
    correctAnswer: "C",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: {
      A: "<js>",
      B: "<scripting>",
      C: "<script>",
      D: "<javascript>",
    },
    correctAnswer: "C",
  },
  {
    question:
      "Which of the following ways can be used to indicate the LANGUAGE attribute?",
    answers: {
      A: '<LANGUAGE="JavaScriptVersion">',
      B: '<SCRIPT LANGUAGE="JavaScriptVersion">',
      C: '<SCRIPT LANGUAGE="JavaScriptVersion">    JavaScript statements…</SCRIPT>',
      D: '<SCRIPT LANGUAGE="JavaScriptVersion"!>    JavaScript statements…</SCRIPT>',
    },
    correctAnswer: "C",
  },
  {
    question: 'What is the correct JavaScript syntax to write "Hello World"?',
    answers: {
      A: 'System.out.println("Hello World")',
      B: 'println ("Hello World")',
      C: 'document.write("Hello World")',
      D: 'response.write("Hello World")',
    },
    correctAnswer: "C",
  },
  {
    question: "Which of the following is not considered a JavaScript operator?",
    answers: {
      A: "new",
      B: "this",
      C: "delete",
      D: "typeof",
    },
    correctAnswer: "B",
  },
  {
    question: "Which is the correct way to write a JavaScript array?",
    answers: {
      A: 'var txt = new Array(1:"tim",2:"kim",3:"jim")',
      B: 'var txt = new Array:1=("tim")2=("kim")3=("jim")',
      C: 'var txt = new Array("tim","kim","jim")',
      D: 'var txt = new Array="tim","kim","jim"',
    },
    correctAnswer: "C",
  },
];

for (i = 0; i < questionPool.length; i++) {
    let div = document.createElement('div');
    div.setAttribute('id', 'quizQuestions');
    div.setAttribute('class', 'text-center');
    let h4 = document.createElement('h4');
    h4.innerHTML = questionPool[i].question;

    //append children
    quizBody.appendChild(div);
    div.appendChild(h4);

//   for (let key in questionPool[i]['answers']) {
//     console.log("to", key, "the answer is", questionPool[i]['answers'])
//     answerChoices.innerHTML = questionPool[i]['answers']['A'];
//   }

let div2 = document.createElement('div');
    div2.setAttribute('id', 'quizAnswers');
    div.setAttribute('class', 'text-center');
    
    let ul = document.createElement('ul');
    ul.setAttribute('class', 'list-group, col');
    let li = document.createElement('li');
    li.setAttribute('class', 'list-group-item, col');
    let span = document.createElement('span');
    span.setAttribute('id', 'answerChoices');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');

    p1.textContent = Object.keys(questionPool[i]['answers']).join('');
    p2.textContent = Object.values(questionPool[i]['answers']).join('');

    let poolOfAnswers = questionPool[i]['answers'];
    console.log(poolOfAnswers)

    //append children
    quizBody.appendChild(div2);
    div2.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(p1);
    li.appendChild(p2);
}

// for (j = 0; j < questionPool.length; i++)

// console.log(key, questionPool[i].answers);

{/* <div id="quizAnswers" class="text-center">
<ul class="list-group">
  <!-- <li class="list-group-item active" aria-current="true">An active item</li> -->
  <li class="list-group-item">
    <span id="answerChoices"></span>
  </li>
</ul>
</div> */}