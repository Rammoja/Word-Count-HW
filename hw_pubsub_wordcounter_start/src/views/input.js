const PubSub = require('../helpers/pub_sub.js');


const Input = function (){

};
Input.prototype.bindEvents = function () {
  const input = document.querySelector('#wordcounter-form');
  input.addEventListener('submit', (evt) => {
    const inputtedWord = evt.target.text.value;
    PubSub.publish('Input:word-inputed', inputtedWord)
    event.preventDefault();
  })
};

module.exports = Input;
