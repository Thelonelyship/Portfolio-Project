// ! Hamburger Menu

function toggleMenu(){
    const hamburger = document.querySelector(".hamburgermenu-links");
    const icon = document.querySelector(".hamburger-icon");
    hamburger.classList.toggle("open")
    icon.classList.toggle("open")
}


const info = document.querySelector('.appinfobutton');
const appinfo = document.querySelector('.appinfo');
const previewimage = document.querySelector('.apppreviewbutton');
const preview = document.querySelector('.preview');

function reveal() {    
  if (preview.classList.contains('hide')) {
    preview.classList.remove('hide');
    appinfo.classList.add('hide');
    previewimage.style.backgroundColor = "white";
    info.style.backgroundColor = "grey"; 
  } else {
    preview.classList.remove('hide');
    appinfo.classList.add('hide');
    previewimage.style.backgroundColor = "white"; 
    info.style.backgroundColor = "grey";
  }
}

previewimage.addEventListener('click', reveal); 

function reveal2() {
  if (appinfo.classList.contains('hide')) {
    appinfo.classList.remove('hide');
    preview.classList.add('hide');
    info.style.backgroundColor = "white";
    previewimage.style.backgroundColor = "grey";
  } else {
    appinfo.classList.remove('hide');
    preview.classList.add('hide');
    info.style.backgroundColor = "white"; 
    previewimage.style.backgroundColor = "grey"; 
  }
}

info.addEventListener('click', reveal2);


