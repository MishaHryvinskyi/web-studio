const headerNav = document.querySelector('.header__nav');
const anchorLinks = document.querySelectorAll('.header__nav-link');

function menuOpen() {
    headerNav.classList.add('open');
    document.body.style.overflow = 'hidden';
}
  
function menuClose(){
    headerNav.classList.remove('open');
    document.body.style.overflow = '';
}

anchorLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (headerNav.classList.contains('open')) {
            menuClose();
        }
    });
});

export { 
    menuClose, 
    menuOpen
}