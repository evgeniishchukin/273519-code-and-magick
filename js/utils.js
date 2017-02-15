'use strict';

window.utils = (function () {
  function getRandomElement(someArray) {
    return Math.floor(Math.random() * someArray.length);
  }

  return {
    getRandomElementExcept: function (someArray, value) {
      var newValue = null;
      do {
        newValue = getRandomElement(someArray);
      } while (newValue === value);
      return newValue;
    }
  };
})();
