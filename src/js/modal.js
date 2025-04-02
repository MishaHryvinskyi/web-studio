const backdrop = document.querySelector('.backdrop');

function openModal() {
    backdrop.classList.remove('is-hidden')
}

function closeModal() {
    backdrop.classList.add('is-hidden')
}

function onBackdropClick(e) {
    if(e.target === e.currentTarget) {
        closeModal();
    }
}

export {
    openModal,
    closeModal,
    onBackdropClick
}