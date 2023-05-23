

const navBtn = document.querySelector(".navIcon");
const overray = document.querySelector('.overray');
const menuBox = document.querySelector('.moNavBox');
const menuli = document.querySelectorAll(".moNav");
navBtn.addEventListener('click', () => {
    menuBox.classList.toggle('on');
    overray.classList.toggle('on');
    menuli.classList.toggle('on');
})
overray.addEventListener('click', () => {
    menuBox.classList.toggle('on');
    overray.classList.toggle('on');
})
let topBtn = document.querySelector(".topBtn");

topBtn.addEventListener('click', () => {
    document.querySelector(".headerMenuBox").scrollIntoView({behavior:'smooth'});
})

let menu1pc = document.querySelector(".menu1pc");
let menu2pc = document.querySelector(".menu2pc");
let menu3pc = document.querySelector(".menu3pc");
let menu4pc = document.querySelector(".menu4pc");
let menu5pc = document.querySelector(".menu5pc");

let menu1mo = document.querySelector(".menu1mo");
let menu2mo = document.querySelector(".menu2mo");
let menu3mo = document.querySelector(".menu3mo");
let menu4mo = document.querySelector(".menu4mo");
let menu5mo = document.querySelector(".menu5mo");

menu1pc.addEventListener('click', () => {
    console.log("aa");
    document.querySelector("#section2").scrollIntoView({behavior:'smooth'});
})
menu2pc.addEventListener('click', () => {
    document.querySelector("#section4").scrollIntoView({behavior:'smooth'});
})
menu3pc.addEventListener('click', () => {
    document.querySelector("#section10").scrollIntoView({behavior:'smooth'});
})
menu4pc.addEventListener('click', () => {
    document.querySelector("#section12pc").scrollIntoView({behavior:'smooth'});
})
menu5pc.addEventListener('click', () => {
    document.querySelector("#section15").scrollIntoView({behavior:'smooth'});
})


menu1mo.addEventListener('click', () => {
    document.querySelector("#section2").scrollIntoView({behavior:'smooth'});
    menuBox.classList.toggle('on');
    overray.classList.toggle('on');
})
menu2mo.addEventListener('click', () => {
    document.querySelector("#section4").scrollIntoView({behavior:'smooth'});
    menuBox.classList.toggle('on');
    overray.classList.toggle('on');
})
menu3mo.addEventListener('click', () => {
    document.querySelector("#section10").scrollIntoView({behavior:'smooth'});
    menuBox.classList.toggle('on');
    overray.classList.toggle('on');
})
menu4mo.addEventListener('click', () => {
    document.querySelector("#section12mo").scrollIntoView({behavior:'smooth'});
    menuBox.classList.toggle('on');
    overray.classList.toggle('on');
})
menu5mo.addEventListener('click', () => {
    document.querySelector("#section15").scrollIntoView({behavior:'smooth'});
    menuBox.classList.toggle('on');
    overray.classList.toggle('on');
})

function getSelectedRadioValue(e) {
    var radios = document.getElementsByName(e); 
    
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        return radios[i].value;
      }
    }
    
    return null;
  }
  const regBtn = document.querySelector(".regBtn");
  regBtn.addEventListener('click', () =>{
    let result = getSelectedRadioValue("info");
    let result2 = getSelectedRadioValue("marketing");
    let name = document.querySelector('#name').value;
    let tel = document.querySelector('#tel').value;

    if(name === "" || name === undefined || name === null){
        alert("이름을 입력해주세요");
    } else if(tel === "" || tel === undefined || tel === null){
        alert("연락처를 입력해주세요");
    } else if(result !== "infoYes"){
        alert("개인정보 보호를 위한 동의를 해주세요");
    } else if(result2 !== "marketingYes"){
        alert("마케팅 활용을 위한 동의를 해주세요");
    } else {
        let formData = new FormData(document.getElementById('reqForm')); 
        let xhr = new XMLHttpRequest();
        xhr.open('POST', './mail/mail.php');
        xhr.send(formData);
        alert("메일이 전송되었습니다.");
        window.location.href = '/';
    }
  });


  const popUp = document.querySelector(".infoOverray");

  popUp.addEventListener('click', () => {
    popUp.classList.toggle('on');
  })
  const showPop = () => {
    const popUp = document.querySelector(".infoOverray");
    popUp.classList.toggle('on');
  }