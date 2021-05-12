import menu from './menu.json';
import markUpMenu from '../templates/menu-card.hbs';
import './themes'

const menuList = document.querySelector('.js-menu')


const creatMarkUpCards = creatMarkUpCard(menu)

function creatMarkUpCard(menu) {
    return menu.map(markUpMenu).join(' ')
}

menuList.insertAdjacentHTML('beforeend', creatMarkUpCards)