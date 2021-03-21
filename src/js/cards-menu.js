import menuCardsTpl from '../temlates/cards-menu.hbs';
import menu from '../menu.json';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const body = document.querySelector('body')
  const chekcBoxTheme = document.querySelector('#theme-switch-toggle')


  
  chekcBoxTheme.addEventListener('change', onCheckBoxInput)


  function onCheckBoxInput (e) {
      const theme = e.target.checked
      if (theme === true) {
        body.classList.add(Theme.DARK)
      }
      if (theme === false) {
        body.classList.remove(Theme.DARK)
      }
      console.dir(theme);

            // localStorage.setItem(Theme, theme)


  }

  console.log(chekcBoxTheme);


const itemMenuCards = document.querySelector('.js-menu')
const cardsMenu = createCardsMenu(menu)

itemMenuCards.insertAdjacentHTML( 'afterbegin', cardsMenu)

function createCardsMenu(menu) {
    return menuCardsTpl(menu)
    
}

