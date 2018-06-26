const PubSub = require('../helpers/pub_sub.js');

const WordCounter = function (){

}

WordCounter.prototype.bindEvents = function () {
  PubSub.subcribe('Input:word-inputed', (evt) => {
    const inputtedWord = evt.detail;
    const result = this.wordCount(inputtedWord);
    PubSub.publish('WordCounter:result', result);
  })
};
WordCounter.prototype.wordCount = function (word) {
  const wordArray =  word.split(" ");
  return wordArray.length;
};

module.exports = WordCounter;
