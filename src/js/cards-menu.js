import menuCardsTpl from '../temlates/cards-menu.hbs';
import menu from '../menu.json';

const itemMenuCards = document.querySelector('.js-menu')
const cardsMenu = createCardsMenu(menu)

itemMenuCards.insertAdjacentHTML( 'afterbegin', cardsMenu)

function createCardsMenu(menu) {
    return menuCardsTpl(menu)
    
}

