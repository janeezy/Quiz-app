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

	{
		question:
			'What is the purpose of the "use strict" directive in JavaScript?',
		a: 'To enable strict mode for the JavaScript code',
		b: 'To disable strict mode for the JavaScript code',
		c: 'To import external JavaScript libraries',
		d: 'To define strict rules for naming variables',
		correct: 'a',
	},
	{
		question: 'What is the result of the following expression: typeof null;',
		a: '"null"',
		b: '"undefined"',
		c: '"object"',
		d: '"string"',
		correct: 'c',
	},
	{
		question:
			'What is the difference between "undefined" and "null" in JavaScript?',
		a: '"undefined" represents a variable that has been declared but has not been assigned a value, while "null" represents a variable with no value assigned to it.',
		b: '"undefined" represents a variable with no value assigned to it, while "null" represents a variable that has been declared but has not been assigned a value.',
		c: '"undefined" and "null" are interchangeable and can be used interchangeably in JavaScript.',
		d: '"undefined" and "null" have the same meaning in JavaScript.',
		correct: 'a',
	},
	{
		question: 'What does the "bind()" method do in JavaScript?',
		a: 'It creates a new array with the results of calling a provided function on every element in the original array.',
		b: 'It merges two or more arrays into a single array.',
		c: 'It creates a new function that, when called, has its "this" keyword set to the provided value.',
		d: 'It sorts the elements of an array in place and returns the sorted array.',
		correct: 'c',
	},
	{
		question:
			'What is the purpose of the "document.getElementById()" method in JavaScript?',
		a: 'To add a new HTML element to the document.',
		b: 'To remove an HTML element from the document.',
		c: 'To retrieve an HTML element from the document based on its ID.',
		d: 'To change the CSS styling of an HTML element.',
		correct: 'c',
	},
	{
		question: 'What does the "event.preventDefault()" method do?',
		a: 'It stops the propagation of an event to parent elements.',
		b: 'It prevents the default behavior of an event, such as submitting a form or following a link.',
		c: 'It removes an event listener from an HTML element.',
		d: 'It triggers a specific event on an HTML element.',
		correct: 'b',
	},
	{
		question: 'What is the result of the following expression: [] == ![];',
		a: 'true',
		b: 'false',
		c: 'undefined',
		d: 'NaN',
		correct: 'a',
	},
	{
		question:
			'What is the purpose of the "JSON.stringify()" method in JavaScript?',
		a: 'To parse a JSON string and convert it into a JavaScript object.',
		b: 'To convert a JavaScript object into a JSON string.',
		c: 'To check if a value is NaN (Not-a-Number).',
		d: 'To encode special characters in a URL.',
		correct: 'b',
	},
	{
		question: 'What is the difference between "==" and "===" in JavaScript?',
		a: '"==" performs a loose comparison, allowing type coercion, while "===" performs a strict comparison, requiring both the value and the type to be equal.',
		b: '"==" performs a strict comparison, requiring both the value and the type to be equal, while "===" performs a loose comparison, allowing type coercion.',
		c: '"==" and "===" are interchangeable and can be used interchangeably in JavaScript.',
		d: '"==" and "===" have the same meaning in JavaScript.',
		correct: 'a',
	},
	{
		question: 'What is the purpose of the "localStorage" object in JavaScript?',
		a: 'To store temporary data that is only accessible within the current session.',
		b: 'To store data that persists even after the browser window is closed and reopened.',
		c: 'To store data in a cookie for cross-site scripting protection.',
		d: 'To store encrypted data for secure communication between the client and server.',
		correct: 'b',
	},

	{
		question:
			'What is the output of the following code? console.log(1 + "1" - 1);',
		a: '1',
		b: '10',
		c: '11',
		d: 'NaN',
		correct: 'c',
	},
	{
		question:
			'What is the result of the following expression: [1, 2] + [3, 4];',
		a: '"1,23,4"',
		b: '"1,2,3,4"',
		c: '"1,23"',
		d: 'NaN',
		correct: 'a',
	},
	{
		question: 'What is the purpose of the "map()" method in JavaScript?',
		a: 'To iterate over the elements of an array and perform a transformation or computation on each element.',
		b: 'To add new elements to the end of an array.',
		c: 'To remove elements from an array based on a specified condition.',
		d: 'To sort the elements of an array in place.',
		correct: 'a',
	},
	{
		question: 'Which built-in method is used to sort an array in JavaScript?',
		a: 'sort()',
		b: 'slice()',
		c: 'push()',
		d: 'concat()',
		correct: 'a',
	},
	{
		question: 'What is the result of the following expression: 2 ** 3;',
		a: '8',
		b: '6',
		c: '5',
		d: '9',
		correct: 'a',
	},
	{
		question: 'What does the "NaN" value represent in JavaScript?',
		a: 'NaN stands for "Not-a-Number" and is a value returned when a mathematical operation has an undefined or unrepresentable result.',
		b: 'NaN stands for "Null-and-None" and represents a null value in JavaScript.',
		c: 'NaN stands for "Negative-and-Negative" and represents a negative value in JavaScript.',
		d: 'NaN stands for "No-Action-Needed" and is used to indicate that no action should be taken for a particular condition.',
		correct: 'a',
	},
	{
		question: 'What is the purpose of the "forEach()" method in JavaScript?',
		a: 'To execute a provided function once for each element in an array.',
		b: 'To check if an array contains a specific element.',
		c: 'To convert an array into a string representation.',
		d: 'To concatenate two or more arrays into a single array.',
		correct: 'a',
	},
	{
		question:
			'What is the result of the following expression: Boolean("false");',
		a: 'true',
		b: 'false',
		c: 'NaN',
		d: 'TypeError',
		correct: 'a',
	},
	{
		question:
			'What is the purpose of the "Object.keys()" method in JavaScript?',
		a: 'To retrieve all the property names of an object as an array.',
		b: 'To convert an object into a JSON string.',
		c: 'To check if a value is an instance of a specific object.',
		d: 'To create a new object with the specified prototype object and properties.',
		correct: 'a',
	},
	{
		question: 'What does the "fetch()" function do in JavaScript?',
		a: 'It sends a network request to a specified URL and returns a promise that resolves to the response.',
		b: "It retrieves the current date and time from the user's device.",
		c: 'It removes an element from the DOM.',
		d: 'It adds an event listener to an HTML element.',
		correct: 'a',
	},

	{
		question: 'Which of the following is not a JavaScript data type?',
		a: 'String',
		b: 'Boolean',
		c: 'Number',
		d: 'Array',
		correct: 'd',
	},
	{
		question: 'What is the result of the following expression: "2" + 2?',
		a: '4',
		b: '22',
		c: 'NaN',
		d: 'Error',
		correct: 'b',
	},
	{
		question: 'What is the correct way to write a JavaScript comment?',
		a: '// This is a comment',
		b: '# This is a comment',
		c: '<!-- This is a comment -->',
		d: '/* This is a comment */',
		correct: 'a',
	},
	{
		question:
			'Which JavaScript method is used to remove the last element from an array?',
		a: 'pop()',
		b: 'push()',
		c: 'shift()',
		d: 'unshift()',
		correct: 'a',
	},
	{
		question: 'What does the JavaScript function isNaN() do?',
		a: 'Checks if a value is not a number',
		b: 'Converts a value to a number',
		c: 'Checks if a value is null or undefined',
		d: 'Checks if a value is a number',
		correct: 'd',
	},
	{
		question: 'What does the JavaScript keyword "const" do?',
		a: 'Declares a constant variable',
		b: 'Declares a function',
		c: 'Declares a loop',
		d: 'Declares an object',
		correct: 'a',
	},
];


// Add more questions here...

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
