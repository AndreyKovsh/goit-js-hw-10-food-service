import ElementTpl from './templates/element.hbs';
import menuItems from './menu.json';

const menu = document.querySelector('.js-menu');
const elementMarkup = buildElement(menuItems);

function buildElement(menuItems) {
    return menuItems.map(ElementTpl).join('');
};
menu.insertAdjacentHTML('beforeend', elementMarkup);



// Темы для body

const body = document.querySelector('body');
const swichTheme = document.querySelector('.theme-switch__toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

swichTheme.addEventListener('change', themeChanges);
swichTheme.addEventListener('change', setLocalStorage);
document.addEventListener('DOMContentLoaded', getThemeFromLocalStorage);

function themeChanges(e) {

  if (swichTheme.checked) {
    setDarkTheme()
  } else {
    setLightTheme()
  }
};

function setLocalStorage(e) {
  if (swichTheme.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
};

function getThemeFromLocalStorage() {
  const themeInLocalStrg = localStorage.getItem('theme');
  if (themeInLocalStrg === Theme.DARK) {
    body.classList.add(Theme.DARK);
    swichTheme.checked = true;
  }
};

function setDarkTheme() {
  body.classList.add(Theme.DARK);
  body.classList.remove(Theme.LIGHT);
};

function setLightTheme() {
  body.classList.add(Theme.LIGHT);
  body.classList.remove(Theme.DARK);
};
