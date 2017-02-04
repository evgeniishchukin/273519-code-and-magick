'use strict';

// Открытие и закрытие окна настройки персонажа
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var saveSetup = setup.querySelector('.setup-submit');

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

setupOpen.addEventListener('click', function () {
  showSetupElement();
});

setupOpen.addEventListener('keydown', function (event) {
  if (isActivateElement(event)) {
    showSetupElement();
  }
});

setupClose.addEventListener('click', function () {
  hideSetupElement();
});

setupClose.addEventListener('keydown', function (event) {
  if (isActivateElement(event)) {
    hideSetupElement();
  }
});

saveSetup.addEventListener('click', function () {
  event.preventDefault();
  hideSetupElement();
});

saveSetup.addEventListener('keydown', function (event) {
  if (isActivateElement(event)) {
    event.preventDefault();
    hideSetupElement();
  }
});

// Настройка цвета мантии персонажа
// При нажатии на кофту мага, меняется ее цвет.
// Цвет идет в порядке значений массива.
var wizardCoat = document.querySelector('#wizard-coat');
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var wizardCoatColor = 0;

wizardCoat.addEventListener('click', function () {
  wizardCoatColor++;
  if (wizardCoatColor >= wizardCoatColors.length) {
    wizardCoatColor = 0;
  }
  wizardCoat.style.fill = wizardCoatColors[wizardCoatColor];
});

// Настройка глаз персонажа.
// При нажатии на глаза мага, меняется их цвет.
// Цвет идет в порядке значений массива.
var wizardEyes = document.querySelector('#wizard-eyes');
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var wizardEyesColor = 0;

wizardEyes.addEventListener('click', function () {
  wizardEyesColor++;
  if (wizardEyesColor >= wizardEyesColors.length) {
    wizardEyesColor = 0;
  }
  wizardEyes.style.fill = wizardEyesColors[wizardEyesColor];
});

// Настройка фаерболов персонажа.
// При нажатии на фаербол, меняется его цвет.
// Цвет идет в рандомном порядке значений массива, т.к. это магия.
var fireball = document.querySelector('.setup-fireball-wrap');
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

fireball.addEventListener('click', function () {
  var fireballColor = Math.floor(Math.random() * fireballColors.length);

  fireball.style.backgroundColor = fireballColors[fireballColor];
});

// Перечень функций.
var isActivateElement = function (event) {
  return event.keyCode && event.keyCode === ENTER_KEY_CODE;
};

var setupKeyDownHandler = function (event) {
  if (event.keyCode === ESCAPE_KEY_CODE) {
    setup.classList.add('invisible');
  }
};

var showSetupElement = function () {
  setup.classList.remove('invisible');
  document.addEventListener('keydown', setupKeyDownHandler);
  setupOpen.setAttribute('aria-pressed', true);
  setupClose.setAttribute('aria-pressed', false);
};

var hideSetupElement = function () {
  setup.classList.add('invisible');
  document.removeEventListener('keydown', setupKeyDownHandler);
  setupOpen.setAttribute('aria-pressed', false);
  setupClose.setAttribute('aria-pressed', true);
};
