(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const style = "";
const headerNav = document.querySelector(".header__nav");
function menuOpen() {
  headerNav.classList.add("open");
  document.body.style.overflow = "hidden";
}
function menuClose() {
  headerNav.classList.remove("open");
  document.body.style.overflow = "";
}
const backdrop$1 = document.querySelector(".backdrop");
function openModal() {
  backdrop$1.classList.remove("is-hidden");
}
function closeModal() {
  backdrop$1.classList.add("is-hidden");
}
function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}
const menuCloseBtn = document.querySelector(".header__button-close");
const menuOpenBtn = document.querySelector(".js-menu-open");
const openModalBtn = document.querySelector(".js-hero-button");
const closeModalBtn = document.querySelector(".js-modal-close");
const backdrop = document.querySelector(".backdrop");
menuOpenBtn.addEventListener("click", menuOpen);
menuCloseBtn.addEventListener("click", menuClose);
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", onBackdropClick);
