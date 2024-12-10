document.addEventListener('DOMContentLoaded', function () {

  function toggleMenu() {
      const hamburger = document.querySelector(".hamburgermenu-links");
      const icon = document.querySelector(".hamburger-icon");
      hamburger.classList.toggle("open");
      icon.classList.toggle("open");
  }

  document.querySelector(".hamburger-icon").addEventListener("click", toggleMenu);

  const info1 = document.querySelector('.appinfobutton');
  const info2 = document.querySelector('.appinfobutton2');
  const appinfo = document.querySelector('.appinfo');
  const appinfo2 = document.querySelector('.appinfo2');
  const previewimage1 = document.querySelector('.apppreviewbutton');
  const previewimage2 = document.querySelector('.apppreviewbutton2');
  const preview1 = document.querySelector('.preview');
  const preview2 = document.querySelector('.preview2');

  function reveal() {
      if (preview1.classList.contains('hide')) {
          preview1.classList.remove('hide');
          appinfo.classList.add('hide');
          previewimage1.style.backgroundColor = "white";
          info1.style.backgroundColor = "grey"; 
      } else {
          preview1.classList.add('hide');
          appinfo.classList.remove('hide');
          previewimage1.style.backgroundColor = "grey";
          info1.style.backgroundColor = "white";
      }
  }

  previewimage1.addEventListener('click', reveal); 
  info1.addEventListener('click', reveal2);

  function reveal3() {
      if (preview2.classList.contains('hide')) {
          preview2.classList.remove('hide');
          appinfo2.classList.add('hide');
          previewimage2.style.backgroundColor = "white";
          info2.style.backgroundColor = "grey";
      } else {
          preview2.classList.add('hide');
          appinfo2.classList.remove('hide');
          previewimage2.style.backgroundColor = "grey"; 
          info2.style.backgroundColor = "white"; 
      }
  }

  previewimage2.addEventListener('click', reveal3);
  info2.addEventListener('click', reveal4);

  function reveal2() {
      if (appinfo.classList.contains('hide')) {
          appinfo.classList.remove('hide');
          preview1.classList.add('hide');
          info1.style.backgroundColor = "white";
          previewimage1.style.backgroundColor = "grey";
      } else {
          appinfo.classList.add('hide');
          preview1.classList.remove('hide');
          info1.style.backgroundColor = "grey"; 
          previewimage1.style.backgroundColor = "white"; 
      }
  }

  function reveal4() {
      if (appinfo2.classList.contains('hide')) {
          appinfo2.classList.remove('hide');
          preview2.classList.add('hide');
          info2.style.backgroundColor = "white";
          previewimage2.style.backgroundColor = "grey";
      } else {
          appinfo2.classList.add('hide');
          preview2.classList.remove('hide');
          info2.style.backgroundColor = "grey"; 
          previewimage2.style.backgroundColor = "white"; 
      }
  }

});
