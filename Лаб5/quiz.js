let score = 0;

function loadQuestions() {
  const selectedDifficulty = document.getElementById('difficulty').value;
  const selectedQuestions = questions.filter(question => question.level === selectedDifficulty);
  const randomQuestions = getRandomQuestions(selectedQuestions, 11);

  displayQuestions(randomQuestions);
}

function getRandomQuestions(questionsArray, numQuestions) {
  const shuffledQuestions = shuffleArray(questionsArray);
  return shuffledQuestions.slice(0, numQuestions);
}

function displayQuestions(questionsArray) {
  const questionsSection = document.getElementById('questions-section');
  questionsSection.innerHTML = '';

  for (const question of questionsArray) {
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container');

    const questionElement = document.createElement('p');
    questionElement.textContent = question.question;

    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('options-container');

    for (let i = 0; i < question.options.length; i++) {
      const option = question.options[i];

      const input = document.createElement('input');
      input.type = question.type;
      input.name = `question${questions.indexOf(question)}`;
      input.value = option;
      input.id = `q${questions.indexOf(question)}o${i}`;
      input.setAttribute('data-question-index', questions.indexOf(question));

      const label = document.createElement('label');
      label.setAttribute('for', `q${questions.indexOf(question)}o${i}`);
      label.textContent = option;

      optionsContainer.appendChild(input);
      optionsContainer.appendChild(label);
    }

    questionContainer.appendChild(questionElement);
    questionContainer.appendChild(optionsContainer);
    questionsSection.appendChild(questionContainer);
  }
}

function submitAnswers() {
  const userAnswers = getSelectedAnswers();
  calculateScore(userAnswers);
  displayScore();
}

function getSelectedAnswers() {
  const userAnswers = {};
  const selectedOptions = document.querySelectorAll('input[type="radio"]:checked, input[type="checkbox"]:checked, select');

  selectedOptions.forEach((option) => {
    const questionIndex = option.getAttribute("data-question-index");
    const answer = option.value;
    userAnswers[questionIndex] = answer;
  });

  return userAnswers;
}

function calculateScore(userAnswers) {
  for (const question of questions) {
    const questionIndex = questions.indexOf(question);
    const userAnswer = userAnswers[questionIndex];

    if (userAnswer === question.correctAnswer) {
      score += 1;
    }
  }
}

function displayScore() {
  alert(`Ваш результат: ${score}/${questions.length}`);
  score = 0;
}
