(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    constclosMenu = document.querySelector('.nav__clos')

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', (=>{
        menu.classList.remove('nav__link--show');
    }));

})();