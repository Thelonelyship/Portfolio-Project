document.addEventListener('DOMContentLoaded', function (){
    function toggleMenu() {
        const hamburger = document.querySelector(".hamburgermenu-links");
        const icon = document.querySelector(".hamburger-icon");
        hamburger.classList.toggle("open");
        icon.classList.toggle("open");
    }

    document.querySelector(".hamburger-icon").addEventListener("click", toggleMenu);

    document.addEventListener('scroll', ()=>{
        const navbar = document.querySelector('nav');
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scroll');} 
        else {
            navbar.classList.remove('nav-scroll');
        }
    });

    const info1 = document.querySelector('.appinfobutton');
    const info2 = document.querySelector('.appinfobutton2');
    const info3 = document.querySelector('.appinfobutton3');
    const info4 = document.querySelector('.appinfobutton4');
    const info5 = document.querySelector('.appinfobutton5');
    const appinfo = document.querySelector('.appinfo');
    const appinfo2 = document.querySelector('.appinfo2');
    const appinfo3 = document.querySelector('.appinfo3');
    const appinfo4 = document.querySelector('.appinfo4');
    const appinfo5 = document.querySelector('.appinfo5');
    const previewimage1 = document.querySelector('.apppreviewbutton');
    const previewimage2 = document.querySelector('.apppreviewbutton2');
    const previewimage3 = document.querySelector('.apppreviewbutton3');
    const previewimage4 = document.querySelector('.apppreviewbutton4');
    const previewimage5 = document.querySelector('.apppreviewbutton5');
    const preview1 = document.querySelector('.preview');
    const preview2 = document.querySelector('.preview2');
    const preview3 = document.querySelector('.preview3');
    const preview4 = document.querySelector('.preview4');
    const preview5 = document.querySelector('.preview5');

function reveal(){
        if (preview1.classList.contains('hide')) {
            preview1.classList.remove('hide');
            appinfo.classList.add('hide');
            previewimage1.style.backgroundColor = "white";
            info1.style.backgroundColor = "grey"; } 
        else {
            preview1.classList.add('hide');
            appinfo.classList.remove('hide');
            previewimage1.style.backgroundColor = "grey";
            info1.style.backgroundColor = "white";}
}

    previewimage1.addEventListener('click', reveal); 
    info1.addEventListener('click', reveal2);

function reveal3() {
        if (preview2.classList.contains('hide')) {
            preview2.classList.remove('hide');
            appinfo2.classList.add('hide');
            previewimage2.style.backgroundColor = "white";
            info2.style.backgroundColor = "grey";} 
        else {
            preview2.classList.add('hide');
            appinfo2.classList.remove('hide');
            previewimage2.style.backgroundColor = "grey"; 
            info2.style.backgroundColor = "white";}
}

    previewimage2.addEventListener('click', reveal3);
    info2.addEventListener('click', reveal4);

function reveal2(){
        if (appinfo.classList.contains('hide')) {
            appinfo.classList.remove('hide');
            preview1.classList.add('hide');
            info1.style.backgroundColor = "white";
            previewimage1.style.backgroundColor = "grey";} 
        else {
            appinfo.classList.add('hide');
            preview1.classList.remove('hide');
            info1.style.backgroundColor = "grey"; 
            previewimage1.style.backgroundColor = "white"; 
        }
}

function reveal4(){
        if (appinfo2.classList.contains('hide')) {
            appinfo2.classList.remove('hide');
            preview2.classList.add('hide');
            info2.style.backgroundColor = "white";
            previewimage2.style.backgroundColor = "grey";} 
        else {
            appinfo2.classList.add('hide');
            preview2.classList.remove('hide');
            info2.style.backgroundColor = "grey"; 
            previewimage2.style.backgroundColor = "white"; 
          }
}

function reveal5(){
        if (preview3.classList.contains('hide')) {
            preview3.classList.remove('hide');
            appinfo3.classList.add('hide');
            previewimage3.style.backgroundColor = "white";
            info3.style.backgroundColor = "grey";} 
        else {
            preview3.classList.add('hide');
            appinfo3.classList.remove('hide');
            previewimage3.style.backgroundColor = "grey"; 
            info3.style.backgroundColor = "white"; }
}

    previewimage3.addEventListener('click', reveal5);
    info3.addEventListener('click', reveal6);

function reveal6(){
        if (appinfo3.classList.contains('hide')) {
            appinfo3.classList.remove('hide');
            preview3.classList.add('hide');
            info3.style.backgroundColor = "white";
            previewimage3.style.backgroundColor = "grey";} 
        else {
            appinfo3.classList.add('hide');
            preview3.classList.remove('hide');
            info3.style.backgroundColor = "grey"; 
            previewimage3.style.backgroundColor = "white"; 
        }
}

function reveal7(){
        if (preview4.classList.contains('hide')) {
            preview4.classList.remove('hide');
            appinfo4.classList.add('hide');
            previewimage4.style.backgroundColor = "white";
            info4.style.backgroundColor = "grey";}
        else {
            preview4.classList.add('hide');
            appinfo4.classList.remove('hide');
            previewimage4.style.backgroundColor = "grey";
            info4.style.backgroundColor = "white";}
}

    previewimage4.addEventListener('click', reveal7);
    info4.addEventListener('click', reveal8);

function reveal8() {
        if (appinfo4.classList.contains('hide')) {
            appinfo4.classList.remove('hide');
            preview4.classList.add('hide');
            info4.style.backgroundColor = "white";
            previewimage4.style.backgroundColor = "grey";}
        else {
            appinfo4.classList.add('hide');
            preview4.classList.remove('hide');
            info4.style.backgroundColor = "grey";
            previewimage4.style.backgroundColor = "white";}
}

function reveal9() {
        if (preview5.classList.contains('hide')) {
            preview5.classList.remove('hide');
            appinfo5.classList.add('hide');
            previewimage5.style.backgroundColor = "white";
            info5.style.backgroundColor = "grey";}
        else {
            preview5.classList.add('hide');
            appinfo5.classList.remove('hide');
            previewimage5.style.backgroundColor = "grey";
            info5.style.backgroundColor = "white";}
}

    previewimage5.addEventListener('click', reveal9);
    info5.addEventListener('click', reveal10);

function reveal10() {
        if (appinfo5.classList.contains('hide')) {
            appinfo5.classList.remove('hide');
            preview5.classList.add('hide');
            info5.style.backgroundColor = "white";
            previewimage5.style.backgroundColor = "grey";}
        else {
            appinfo5.classList.add('hide');
            preview5.classList.remove('hide');
            info5.style.backgroundColor = "grey";
            previewimage5.style.backgroundColor = "white";}
}

});
