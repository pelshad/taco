

let navBtn = document.querySelector(".navIcon");
navBtn.addEventListener('click', () => {
    const menuBox = document.querySelector('.moNavBox');
    menuBox.classList.toggle('on');
})