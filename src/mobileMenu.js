const menuBtn = document.querySelector('.mobile-menu-btn')
const menuCloseBtn = document.querySelector('.mobile-menu-close-btn')
const menu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', ()=> {
    menu.style.display = "block";
})

menuCloseBtn.addEventListener('click', ()=> {
    menu.style.display = "none";
})