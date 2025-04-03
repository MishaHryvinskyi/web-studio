const headerNav = document.querySelector('.header__nav');

function menuOpen() {
    headerNav.classList.add('open');
    document.body.style.overflow = 'hidden';
}
  
function menuClose(){
    headerNav.classList.remove('open');
    document.body.style.overflow = '';
}

export { 
    menuClose, 
    menuOpen
}