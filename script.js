const body = document.querySelector('body');
const icon = document.querySelector('#icon');
const text = document.querySelector('.container');

function toggle() {
    if (icon.innerHTML === "dark_mode") {
        body.classList.add('dark');
        text.classList.toggle('cont-dark');
        icon.innerHTML = 'light_mode';
    } else {
        body.classList.remove('dark');
        text.classList.replace('cont-dark', 'container');
        icon.innerHTML = 'dark_mode';
    }
};