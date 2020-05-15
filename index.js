const btn = document.querySelector('.bar');
const menu = document.querySelector('.mainMenu');
const bodeh  = document.querySelector('body');
const linkz = document.querySelectorAll('.mainMenu a');
const mainContainerz = document.querySelector('.mainMenuContainer');
const hero = document.querySelector('.hero');

function buttonClick() {
    btn.addEventListener('click', () => {
        mainContainerz.style.opacity = "1";
        mainContainerz.style.pointerEvents = "all";
        menu.classList.add('dat');
    });
}

function farEach() {
    linkz.forEach(value => {
        value.addEventListener('click', () => {
            menu.classList.remove('dat');
            mainContainerz.style.opacity = "0";
            mainContainerz.style.pointerEvents = "none";
        });
    });
}

function jetLag() {
    window.addEventListener('click', (e) => {
        if(e.target === mainContainerz) {
            mainContainerz.style.opacity = "0";
            mainContainerz.style.pointerEvents = "none";
            menu.classList.remove('dat');
        }
    });
}

buttonClick();
farEach();
jetLag();
