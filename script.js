document.getElementById('open-menu').addEventListener('click', function () {
    let menu = document.getElementById('menu-mobile');

    if (menu.classList.contains('hide')){
        menu.classList.remove('hide');
        menu.classList.add('show');
        document.getElementById('open-menu').setAttribute('src', './assets/images/icon-menu-close.svg');
    } else {
        menu.classList.remove('show');
        menu.classList.add('hide');
        document.getElementById('open-menu').setAttribute('src', './assets/images/icon-menu.svg');
    }
    
    
})


let prevScrollpos = window.scrollY;

window.onscroll = function() {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-bar").style.top = "0";
    console.log('check 1')
  } else {
    document.getElementById("nav-bar").style.top = "-88px";
    console.log('check 2')
  }
  prevScrollpos = currentScrollPos;
}