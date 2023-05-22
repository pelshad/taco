

let navBtn = document.querySelector(".navIcon");
navBtn.addEventListener('click', () => {
    const menuBox = document.querySelector('.moNavBox');
    menuBox.classList.toggle('on');
})

let topBtn = document.querySelector(".topBtn");

topBtn.addEventListener('click', () => {
    document.querySelector(".headerMenuBox").scrollIntoView({behavior:'smooth'});
})

let menu1 = document.querySelector(".menu1");
let menu2 = document.querySelector(".menu2");
let menu3 = document.querySelector(".menu3");
let menu4pc = document.querySelector(".menu4pc");
let menu4mo = document.querySelector(".menu4mo");
let menu5 = document.querySelector(".menu5");

menu1.addEventListener('click', () => {
    document.querySelector("#section2").scrollIntoView({behavior:'smooth'});
})
menu2.addEventListener('click', () => {
    document.querySelector("#section4").scrollIntoView({behavior:'smooth'});
})
menu3.addEventListener('click', () => {
    document.querySelector("#section10").scrollIntoView({behavior:'smooth'});
})
menu4pc.addEventListener('click', () => {
    document.querySelector("#section12pc").scrollIntoView({behavior:'smooth'});
})
menu4mo.addEventListener('click', () => {
    document.querySelector("#section12mo").scrollIntoView({behavior:'smooth'});
})
menu5.addEventListener('click', () => {
    document.querySelector("#section15").scrollIntoView({behavior:'smooth'});
})

