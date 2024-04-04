// Sample questions array
let questions = [
  {
    question: "What is the past tense of 'eat'?",
    options: ["eated", "ate", "eat", "eating"],
    answer: "ate",
    explanation: "The correct answer is 'ate' which is the past tense of 'eat'."
  },
  {
    question: "What is the present continuous tense of 'run'?",
    options: ["runned", "running", "run", "ran"],
    answer: "running",
    explanation: "The correct answer is 'running' which is the present continuous tense of 'run'."
  },
  {
    question: "What is the past participle of 'go'?",
    options: ["goed", "going", "go", "gone"],
    answer: "gone",
    explanation: "The correct answer is 'gone' which is the past participle of 'go'."
  },
  {
    question: "What is the past tense of 'drink'?",
    options: ["drink", "drunk", "drank", "drunked"],
    answer: "drank",
    explanation: "The correct answer is 'drank' which is the past tense of 'drink'."
  },
  {
    question: "What is the plural form of 'child'?",
    options: ["childs", "childrens", "child", "children"],
    answer: "children",
    explanation: "The correct answer is 'children' which is the plural form of 'child'."
  },
];

// Function to shuffle array elements
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle questions array
shuffle(questions);


let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const feedbackContainer = document.getElementById('feedback-container');
const scoreContainer = document.getElementById('score-container');
const scoreDisplay = document.getElementById('score');
const retakeButton = document.getElementById('retake-btn');
const progressBar = document.getElementById('progressBar');

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.innerHTML = `
    <p>${currentQuestion.question}</p>
    ${currentQuestion.options.map((option, index) => `
      <button class="button" onclick="checkAnswer(${index})">${option}</button>
    `).join('')}
  `;
}

function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const selectedOption = currentQuestion.options[selectedIndex];

  if (selectedOption === currentQuestion.answer) {
    score++;
    feedbackContainer.innerHTML = `<p>Correct! ${currentQuestion.explanation}</p>`;
  } else {
    feedbackContainer.innerHTML = `<p>Incorrect! ${currentQuestion.explanation}</p>`;
  }

  // Show the feedback container
  feedbackContainer.style.display = 'block';

  // Show the "Next Question" button
  feedbackContainer.innerHTML += `<button id="next-btn" class="button" onclick="nextQuestion()">Next Question</button>`;

  updateProgressBar();
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
    feedbackContainer.style.display = 'none'; // Hide feedback for next question
  } else {
    showScore();
  }
}

function showScore() {
  questionContainer.style.display = 'none';
  scoreDisplay.textContent = score;
  scoreContainer.style.display = 'block';
}

function updateProgressBar() {
  const percentage = ((currentQuestionIndex + 1) / questions.length) * 100; // Add 1 to currentQuestionIndex for correct progress calculation
  progressBar.style.width = percentage + '%';
}

retakeButton.addEventListener('click', () => {
  currentQuestionIndex = 0;
  score = 0;
  displayQuestion();
  questionContainer.style.display = 'block';
  feedbackContainer.style.display = 'none';
  scoreContainer.style.display = 'none';
  progressBar.style.width = '0%'; // Reset progress bar width
});

// Initial display of the first question
displayQuestion();
