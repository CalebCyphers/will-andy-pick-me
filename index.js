var questionInput = document.querySelector('.question-input');
var answer = document.querySelector('.answer');
var question = document.querySelector('.question');
var ball = document.querySelector('.ball-image');
var inputForm = document.querySelector('.input-form');
var submitButton = document.querySelector('.get-answer-button')

var fortunes = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];

inputForm.addEventListener('click', clickHandler)

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function showElement(element) {
  element.classList.remove("hidden")
}

function clickHandler(event) {
  if (event.target === submitButton) {
    question.innerText = `"${question.value}"`
    answer.innerText = fortunes[getRandomIndex(fortunes)]
    showElement(question)
    showElement(answer)
    ball.classList.add("hidden")
  }

}
