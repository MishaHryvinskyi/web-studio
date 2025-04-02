import "../scss/style.scss";
import { menuOpen, menuClose } from "./mobile-menu";

const menuCloseBtn = document.querySelector('.header__button-close');
const menuOpenBtn = document.querySelector('.js-menu-open');

menuOpenBtn.addEventListener('click',menuOpen);
menuCloseBtn.addEventListener('click', menuClose);