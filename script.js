const questions = [
  { question: "What is the past tense of 'run'?", options: ["ran", "runned", "running", "run"], answer: "ran" },
  { question: "What is the past participle of 'swim'?", options: ["swum", "swam", "swimming", "swim"], answer: "swum" },
  // Add more questions here...
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  const questionDisplay = document.getElementById("question-display");
  const optionsContainer = document.getElementById("options-container");

  const currentQuestion = questions[currentQuestionIndex];
  questionDisplay.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.style.display = "block";
    button.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  const feedback = document.getElementById("feedback");

  if (selectedOption === currentQuestion.answer) {
    score++;
    feedback.textContent = "Correct!";
  } else {
    feedback.textContent = "Incorrect. The correct answer is: " + currentQuestion.answer;
  }

  document.getElementById("next-btn").style.display = "block";
  document.getElementById("options-container").querySelectorAll("button").forEach(button => button.disabled = true);
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("options-container").querySelectorAll("button").forEach(button => button.disabled = false);
    document.getElementById("feedback").textContent = "";
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("result-container").style.display = "block";
  document.getElementById("score").textContent = score + "/" + questions.length;
}

function retakeTest() {
  currentQuestionIndex = 0;
  score = 0;
  displayQuestion();
  document.getElementById("quiz-container").style.display = "block";
  document.getElementById("result-container").style.display = "none";
}
