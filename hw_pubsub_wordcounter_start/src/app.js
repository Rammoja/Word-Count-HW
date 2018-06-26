const Input = require('./views/input');
const WordCounter = require('./models/word_counter');

const Result = require('./views/result');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const input = new Input();
  input.bindEvents();

  const wordCounter = new WordCounter();
  wordCounter.bindEvents();

  const result = new Result();
  result.bindEvents();
});
