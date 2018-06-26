const PubSub = require('../helpers/pub_sub.js');

const Result = function () {

};

Result.prototype.bindEvents = function () {
  PubSub.subcribe('WordCounter:result', (evt) => {
    const result = evt.detail;
    this.updateView(result);
  })
};

Result.prototype.updateView = function (result) {
  const resultElement = document.querySelector('#result');
    resultElement.textContent = "You Typed" +result;

};

module.exports = Result;
