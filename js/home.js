import { header } from "./header.js";
header();
const h1DOM = document.querySelector('h1');
const buttonDOM = document.querySelector('button');

function updateText() {
    h1DOM.textContent = 'Laba diena!';
}

buttonDOM.addEventListener('click', updateText);