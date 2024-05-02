/*CHAMA MENU MOBILE*/
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-mobile');
const closeOverlay = document.getElementById('closeall-overlay');
btnMenu.addEventListener('click', () => {
    menu.classList.add('open-menu');

    menu.addEventListener('click', () => {
        menu.classList.remove('open-menu');
    })

    closeOverlay.addEventListener('click', () => {
        menu.classList.remove('open-menu');
    })

})




/* POLITICA DE COOKIE */
let modalCookie = document.getElementById('cookies-msg')

function Aceitacookie() {
    localStorage.lgpd = "sim"
    modalCookie.classList.remove('mostrar')
}

if (localStorage.lgpd == 'sim') {
    modalCookie.classList.remove('mostrar')
} else {
    modalCookie.classList.add('mostrar')
}

