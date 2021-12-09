const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const burgerClose = document.querySelector('.burger-close');

burger.addEventListener('click', () => {
    nav.classList.add('active');
});

burgerClose.addEventListener('click', () => {
    nav.classList.remove('active');
})