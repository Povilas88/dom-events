import { header } from "./header.js";
header();

const countDOM = document.querySelector('.count');
const inputDOM = document.querySelector('input');

inputDOM.addEventListener('keyup', () => {
    countDOM.innerHTML = inputDOM.value.length;
});