const quizData = [
	{
		question: 'Which language runs in a web browser?',
		a: 'Java',
		b: 'C',
		c: 'Python',
		d: 'JavaScript',
		correct: 'd',
	},
	{
		question: 'What does CSS stand for?',
		a: 'Central Style Sheets',
		b: 'Cascading Style Sheets',
		c: 'Cascading Simple Sheets',
		d: 'Cars SUVs Sailboats',
		correct: 'b',
	},
	{
		question: 'What does HTML stand for?',
		a: 'Hypertext Markup Language',
		b: 'Hypertext Markdown Language',
		c: 'Hyperloop Machine Language',
		d: 'Helicopters Terminals Motorboats Lamborginis',
		correct: 'a',
	},
	{
		question: 'What year was JavaScript launched?',
		a: '1996',
		b: '1995',
		c: '1994',
		d: 'none of the above',
		correct: 'b',
	},

	{
		question:
			'Which programming language is known as the "mother of all languages"?',
		a: 'Python',
		b: 'JavaScript',
		c: 'C++',
		d: 'Assembly',
		correct: 'd',
	},
	{
		question: 'What is the result of the following expression: 5 + "5"?',
		a: '10',
		b: '55',
		c: 'Error',
		d: 'NaN',
		correct: 'b',
	},
	{
		question: 'Which of the following is NOT a JavaScript framework?',
		a: 'React',
		b: 'Angular',
		c: 'Vue',
		d: 'Java',
		correct: 'd',
	},
	{
		question:
			'What is the CSS property used to set the spacing between lines of text?',
		a: 'line-spacing',
		b: 'letter-spacing',
		c: 'text-spacing',
		d: 'line-height',
		correct: 'd',
	},
	{
		question: 'What is the purpose of the <canvas> element in HTML5?',
		a: 'To display images',
		b: 'To draw graphics',
		c: 'To play audio files',
		d: 'To style web pages',
		correct: 'b',
	},
	{
		question: 'What does the acronym AJAX stand for?',
		a: 'Asynchronous JavaScript And XML',
		b: 'Advanced JavaScript And XHTML',
		c: 'Asynchronous JSON And XML',
		d: 'Advanced JSON And XHTML',
		correct: 'a',
	},

	{
		question: 'What is the output of the following code? console.log(2 + "2");',
		a: '4',
		b: '22',
		c: 'NaN',
		d: 'TypeError',
		correct: 'b',
	},
	{
		question: 'What is the result of the following expression: 3 + 2 + "7"?',
		a: '57',
		b: '12',
		c: '37',
		d: '7',
		correct: 'c',
	},
	{
		question: 'Which of the following is not a valid JavaScript loop?',
		a: 'for',
		b: 'while',
		c: 'do...while',
		d: 'repeat...until',
		correct: 'd',
	},
	{
		question: 'What does the "this" keyword refer to in JavaScript?',
		a: 'The current function',
		b: 'The global object',
		c: 'The previous object',
		d: 'The current object',
		correct: 'd',
	},
	{
		question:
			'Which method is used to remove the first element from an array in JavaScript?',
		a: 'pop()',
		b: 'shift()',
		c: 'splice()',
		d: 'slice()',
		correct: 'b',
	},
	{
		question: 'What does the JavaScript function setInterval() do?',
		a: 'Executes a function repeatedly at specified intervals',
		b: 'Clears a timer set by setInterval()',
		c: 'Pauses the execution of a function for a specified time',
		d: 'Executes a function once after a specified delay',
		correct: 'a',
	},
];

// Rest of the code...

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitButton = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
	answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
	let answer;
	answerElements.forEach((answerElement) => {
		if (answerElement.checked) answer = answerElement.id;
	});
	return answer;
};

const loadQuiz = () => {
	deselectAnswers();
	const currentQuizData = quizData[currentQuiz];
	questionElement.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener('click', () => {
	const answer = getSelected();
	if (answer) {
		if (answer === quizData[currentQuiz].correct) score++;
		currentQuiz++;
		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="history.go(0)">Play Again</button>
      `;
		}
	}
});

const copyrightEl = document.getElementById('copyrightYear');
copyrightEl.innerText = 'Copyright ' + new Date().getFullYear();
