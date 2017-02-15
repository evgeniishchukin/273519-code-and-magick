'use strict';
window.colorize = (function () {
  var keyEnter = 13;

  var setCurrentColor = function (element, colors, property) {

    var currentColor = element.style[property];

    currentColor = window.utils.getRandomElementExcept(colors, currentColor);
    element.style[property] = colors[currentColor];
  };

  return {
    colorizeElement: function (element, colors, property) {

      element.addEventListener('click', function (event) {
        if (event.type === 'click') {
          setCurrentColor(element, colors, property);
        }
      });

      element.addEventListener('keydown', function (event) {
        if (event.keyCode === keyEnter) {
          setCurrentColor(element, colors, property);
        }
      });
    }
  };
})();

//
// window.colorizeElement = function (element, colors, property) {
//   var currentColor = element.style[property];
//   element.addEventListener('click', setNewColorHandle);
//   element.addEventListener('keydown', setNewColorHandle);
//   function setNewColorHandle(event) {
//     var keyEnter = 13;
//     if (event.type === 'click' || event.keyCode === keyEnter) {
//       currentColor = window.utils.getRandomElementExcept(colors, currentColor);
//       element.style[property] = colors[currentColor];
//     }
//   }
// };
