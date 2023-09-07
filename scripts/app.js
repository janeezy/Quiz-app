/// Define the array of frontend development questions and answers
const frontendQuestions = [
    {
        question: 'What does CSS stand for?',
        options: [
            'A) Cascading Style Sheet',
            'B) Creative Style Sheet',
            'C) Computer Style Sheet',
            'D) Colorful Style Sheet'
        ],
        correctAnswer: 'A) Cascading Style Sheet'
    },
    {
        question: 'Which HTML tag is used to link an external JavaScript file?',
        options: [
            'A) <script>',
            'B) <link>',
            'C) <js>',
            'D) <javascript>'
        ],
        correctAnswer: 'A) <script>'
    },
    {
        question: 'What is the purpose of the CSS `z-index` property?',
        options: [
            'A) To control the order of stacking elements',
            'B) To change the font size',
            'C) To add a background color',
            'D) To define border styles'
        ],
        correctAnswer: 'A) To control the order of stacking elements'
    },
    // Add more questions...
    // Make sure to add a total of 100 questions
];

// Define your QuizApp class
class QuizApp {
    constructor() {
        this.questionElement = document.getElementById('question');
        this.answerElements = document.querySelectorAll('.answer');
        this.submitButton = document.getElementById('submit');
        this.questions = frontendQuestions;
        this.questionIndex = 0;
        this.score = 0;
        this.timerInterval = null;

        this.shuffleQuestions();
        this.fetchQuizData();

        this.submitButton.addEventListener('click', () => this.checkAnswer());
    }

    shuffleQuestions() {
        // Shuffle the questions array to randomize the order
        this.questions = this.questions.sort(() => Math.random() - 0.5);
    }

    async fetchQuizData() {
        // Fetch the quiz data for the current question
        try {
            this.updateQuestion(this.questions[this.questionIndex]);
            this.startTimer();
        } catch (error) {
            console.error('Error fetching quiz data:', error);
        }
    }

    updateQuestion(questionData) {
        // Update the question and options
        this.questionElement.textContent = questionData.question;
        const options = questionData.options.slice(); // Create a copy to avoid modifying the original array
        options.sort(() => Math.random() - 0.5); // Shuffle options
        this.answerElements.forEach((element, index) => {
            element.nextElementSibling.textContent = options[index];
        });
        this.correctAnswer = questionData.correctAnswer;
    }

    checkAnswer() {
        // Check if the selected answer is correct
        const selectedAnswer = document.querySelector('.answer:checked');
        if (selectedAnswer && selectedAnswer.nextElementSibling.textContent === this.correctAnswer) {
            this.score++;
        }

        // Move to the next question
        this.questionIndex++;
        if (this.questionIndex < this.questions.length) {
            this.updateQuestion(this.questions[this.questionIndex]);
        } else {
            // Quiz completed
            clearInterval(this.timerInterval);
            alert(`Quiz completed! Your score: ${this.score}`);
        }
    }

    startTimer() {
        let timeLeft = 10;
        const timerElement = document.getElementById('timer');

        this.timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timerElement.textContent = `Time Left: ${timeLeft} s`;
                timeLeft--;
            } else {
                clearInterval(this.timerInterval);
                alert('Time is up! Moving to the next question.');
                this.questionIndex++;
                if (this.questionIndex < this.questions.length) {
                    this.updateQuestion(this.questions[this.questionIndex]);
                } else {
                    // Quiz completed
                    alert(`Quiz completed! Your score: ${this.score}`);
                }
            }
        }, 1000);
    }

    // ... Rest of your QuizApp methods
}

// Create an instance of QuizApp
const quizApp = new QuizApp();
