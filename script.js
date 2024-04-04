// Sample questions array
const questions = [
  {
    question: "What is the past tense of 'eat'?",
    options: ["eated", "ate", "eat", "eating"],
    answer: "ate",
    explanation: "The correct answer is 'ate' which is the past tense of 'eat'."
  },
  // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const feedbackContainer = document.getElementById('feedback-container');
const scoreContainer = document.getElementById('score-container');
const scoreDisplay = document.getElementById('score');
const retakeButton = document.getElementById('retake-btn');

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

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionContainer.style.display = 'none';
  feedbackContainer.style.display = 'none';
  scoreDisplay.textContent = score;
  scoreContainer.style.display = 'block';
}

retakeButton.addEventListener('click', () => {
  currentQuestionIndex = 0;
  score = 0;
  displayQuestion();
  questionContainer.style.display = 'block';
  feedbackContainer.style.display = 'block';
  scoreContainer.style.display = 'none';
});

// Initial display of the first question
displayQuestion();
