const backdrop = document.querySelector('.backdrop');

function openModal() {
    window.addEventListener("keydown", onEscapeClick);
    backdrop.classList.remove('is-hidden')
};

function closeModal() {
    window.removeEventListener("keydown", onEscapeClick);
    backdrop.classList.add('is-hidden')
};

function onBackdropClick(e) {
    if(e.target === e.currentTarget) {
        closeModal();
    }
};

function onEscapeClick(event) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = event.code === ESC_KEY_CODE;
    
    if(isEscKey) {
        closeModal();
    }
};

export {
    openModal,
    closeModal,
    onBackdropClick,
    onEscapeClick
};