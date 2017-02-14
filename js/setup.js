'use strict';

// Открытие и закрытие окна настройки персонажа
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var saveSetup = setup.querySelector('.setup-submit');

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

setupOpen.addEventListener('click', showSetupElement);
setupOpen.addEventListener('keydown', function (event) {
  if (isActivateElement(event)) {
    showSetupElement();
  }
});

setupClose.addEventListener('click', hideSetupElement);
setupClose.addEventListener('keydown', function (event) {
  if (isActivateElement(event)) {
    hideSetupElement();
  }
});

saveSetup.addEventListener('click', hideSetupElement);
saveSetup.addEventListener('keydown', function (event) {
  if (isActivateElement(event)) {
    hideSetupElement();
  }
});

window.colorizeElement(setup.querySelector('#wizard-coat'), [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
], 'fill');

window.colorizeElement(setup.querySelector('#wizard-eyes'), [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
], 'fill');

window.colorizeElement(setup.querySelector('.setup-fireball-wrap'), [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
], 'background');

// Перечень функций.
var isActivateElement = function (event) {
  return event.keyCode && event.keyCode === ENTER_KEY_CODE;
};

function setupKeyDownHandler(event) {
  if (event.keyCode === ESCAPE_KEY_CODE) {
    setup.classList.add('invisible');
  }
}

function showSetupElement() {
  setup.classList.remove('invisible');
  document.addEventListener('keydown', setupKeyDownHandler);
  setupOpen.setAttribute('aria-pressed', true);
  setupClose.setAttribute('aria-pressed', false);
}

function hideSetupElement() {
  event.preventDefault();
  setup.classList.add('invisible');
  document.removeEventListener('keydown', setupKeyDownHandler);
  setupOpen.setAttribute('aria-pressed', false);
  setupClose.setAttribute('aria-pressed', true);
}
