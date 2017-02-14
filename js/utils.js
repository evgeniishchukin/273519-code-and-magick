'use strict';

window.utils = {
  getRandomElement: function (someArray) {
    return Math.floor(Math.random() * someArray.length);
  },

  getRandomElementExcept: function (someArray, value) {
    var newValue = null;
    do {
      newValue = window.utils.getRandomElement(someArray);
    } while (newValue === value);
    return newValue;
  }
};
