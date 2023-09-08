"use strict";
// Add event listeners for scrolling up and down
document.getElementById('scrollUpButton').addEventListener('click', () => quizApp.scrollUp());
document.getElementById('scrollDownButton').addEventListener('click', () => quizApp.scrollDown());

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
    // Additional questions
    {
        question: 'What does HTML stand for?',
        options: [
            'A) Hyper Text Markup Language',
            'B) Hyperlink and Text Markup Language',
            'C) High-level Text Markup Language',
            'D) Hyper Transfer Markup Language'
        ],
        correctAnswer: 'A) Hyper Text Markup Language'
    },
    {
        question: 'What is the purpose of the HTML <head> element?',
        options: [
            'A) To define the main content of the webpage',
            'B) To provide metadata about the document',
            'C) To create a hyperlink',
            'D) To display images'
        ],
        correctAnswer: 'B) To provide metadata about the document'
    },
    {
        question: 'Which CSS property is used to change the text color of an element?',
        options: [
            'A) font-color',
            'B) text-style',
            'C) color',
            'D) text-color'
        ],
        correctAnswer: 'C) color'
    },
    {
        question: 'What does the "box-sizing" property in CSS control?',
        options: [
            'A) The size of the HTML box',
            'B) The padding and border of an element',
            'C) The size of an image',
            'D) The margin of an element'
        ],
        correctAnswer: 'B) The padding and border of an element'
    },
    {
        question: 'What is the purpose of the JavaScript "for" loop?',
        options: [
            'A) To create conditional statements',
            'B) To iterate over a sequence of values',
            'C) To define functions',
            'D) To add styling to HTML elements'
        ],
        correctAnswer: 'B) To iterate over a sequence of values'
    },
    {
        question: 'Which of the following is NOT a valid data type in JavaScript?',
        options: [
            'A) string',
            'B) boolean',
            'C) array',
            'D) number'
        ],
        correctAnswer: 'C) array'
    },
    {
        question: 'What is the purpose of the "addEventListener" method in JavaScript?',
        options: [
            'A) To create a new variable',
            'B) To add event handlers to HTML elements',
            'C) To display a message in the console',
            'D) To change the background color of a webpage'
        ],
        correctAnswer: 'B) To add event handlers to HTML elements'
    },
    {
        question: 'Which CSS property is used to control the layout of elements in a grid?',
        options: [
            'A) flex',
            'B) grid',
            'C) layout',
            'D) box'
        ],
        correctAnswer: 'B) grid'
    }
    // Add more questions as needed
];

    // Make sure to add a total of 100 questions


// Define your QuizApp class
class QuizApp {
    constructor() {
        this.questionElement = document.getElementById('question');
        this.answerElements = document.querySelectorAll('.answer');
        this.submitButton = document.getElementById('submit');
        this.nextButton = document.getElementById('next'); // Add a reference to the "Next" button
        this.questions = frontendQuestions;
        this.questionIndex = 0;
        this.score = 0;
        this.questionTimer = 2700; // 45 minutes in seconds (45 * 60)
        this.overallTimer = 7200; // 2 hours in seconds (2 * 3600)
        this.timerInterval = null;

        this.shuffleQuestions();
        this.fetchQuizData();

        this.submitButton.addEventListener('click', () => this.checkAnswer());
        this.nextButton.addEventListener('click', () => this.moveToNextQuestion()); // Add event listener for the "Next" button
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
        options.sort(() => Math.random() - 10); // Shuffle options
        this.answerElements.forEach((element, index) => {
            element.nextElementSibling.textContent = options[index];
        });
        this.correctAnswer = questionData.correctAnswer;

    }

    checkAnswer() {
        // Check if the selected answer is correct
        const selectedAnswer = document.querySelector('.answer:checked');
        if (selectedAnswer) {
            if (selectedAnswer.nextElementSibling.textContent === this.correctAnswer) {
                this.score++;
            }
        }

        // Move to the next question
        this.moveToNextQuestion();
    }

    startTimer() {
        const timerElement = document.getElementById('timer');

        this.timerInterval = setInterval(() => {
            if (this.overallTimer <= 0) {
                clearInterval(this.timerInterval);
                this.showResult();
            } else if (this.questionTimer <= 0) {
                clearInterval(this.timerInterval);
                this.moveToNextQuestion();
            } else {
                timerElement.textContent = `Time Left: ${this.formatTime(this.questionTimer)} (Overall: ${this.formatTime(this.overallTimer)})`;
                this.questionTimer--;
                this.overallTimer--;
            }
        }, 1000);
    }

    formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${hours}:${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    moveToNextQuestion() {
        clearInterval(this.timerInterval);
        this.questionIndex++;

        if (this.questionIndex < this.questions.length) {
            this.updateQuestion(this.questions[this.questionIndex]);
            this.questionTimer = 2700; // Reset the question timer to 45 minutes
            this.startTimer();
        } else {
            this.showResult();
        }
    }

    showResult() {
        const resultElement = document.getElementById('result');
        resultElement.textContent = `Quiz completed! Your score: ${this.score}`;
        // Optionally, you can also display the number of questions passed and failed.
    }
     // Add a method to handle scrolling up
    scrollUp() {
        window.scrollBy(0, -100); // Scroll up by 100 pixels (adjust as needed)
    }
     // Add a method to handle scrolling down
    scrollDown() {
        window.scrollBy(0, 100); // Scroll down by 100 pixels (adjust as needed)
    }

}

// Create an instance of QuizApp
const quizApp = new QuizApp();