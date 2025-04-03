import "../scss/style.scss";
import { menuOpen, menuClose } from "./mobile-menu";
import { closeModal, openModal, onBackdropClick } from "./modal";

const menuCloseBtn = document.querySelector('.header__button-close');
const menuOpenBtn = document.querySelector('.js-menu-open');
const openModalBtn = document.querySelector('.js-hero-button');
const closeModalBtn = document.querySelector('.js-modal-close');
const backdrop = document.querySelector('.backdrop');

menuOpenBtn.addEventListener('click',menuOpen);
menuCloseBtn.addEventListener('click', menuClose);

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', onBackdropClick)