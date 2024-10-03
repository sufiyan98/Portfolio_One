


function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.body.classList.add('loaded');
    }, 2000);
  });



