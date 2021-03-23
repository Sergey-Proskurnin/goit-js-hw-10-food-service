import menuCardsTpl from '../temlates/cards-menu.hbs';
import menu from '../menu.json';

const Key = 'keyTheme';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const refs = {
  body: document.querySelector('body'),
  itemMenuCards: document.querySelector('.js-menu'),
  chekcBox: document.querySelector('#theme-switch-toggle'),
};

refs.body.classList.add(Theme.LIGHT);

refs.chekcBox.addEventListener('change', onCheckBoxСhange);
keepsChekcBoxСhange();

const cardsMenu = createCardsMenu(menu);
refs.itemMenuCards.insertAdjacentHTML('afterbegin', cardsMenu);

function createCardsMenu(menu) {
  return menuCardsTpl(menu);
}

function onCheckBoxСhange(e) {
  const theme = e.target.checked;
  changeTheme(theme);
  localStorage.setItem(Key, theme);
}

function keepsChekcBoxСhange() {
  const savedТheme = JSON.parse(localStorage.getItem(Key));
  refs.chekcBox.checked = savedТheme;
  changeTheme(savedТheme);
}

function changeTheme(themes) {
  themes
    ? refs.body.classList.replace(Theme.LIGHT, Theme.DARK)
    : refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
}
