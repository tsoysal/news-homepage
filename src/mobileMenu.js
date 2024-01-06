const menuBtn = document.querySelector('.mobile-menu-btn')
const menuCloseBtn = document.querySelector('.mobile-menu-close-btn')
const menu = document.querySelector('.mobile-menu');
const coverImg = document.querySelector('.big-img');

menuBtn.addEventListener('click', ()=> {
    menu.style.display = "block";
    document.body.style.overflowY = "hidden";
})

menuCloseBtn.addEventListener('click', ()=> {
    menu.style.display = "none";
    document.body.style.overflowY = "scroll";
})

function updateImgSrc() {
    const mobileimgSrc = './assets/images/image-web-3-mobile.jpg';
    const desktopimgSrc = './assets/images/image-web-3-desktop.jpg';
    let windowWidth = window.innerWidth;

    if(windowWidth < 1180){
        coverImg.src = mobileimgSrc;
    }else {
        coverImg.src = desktopimgSrc;
    }
}

updateImgSrc();

window.addEventListener('resize', updateImgSrc);