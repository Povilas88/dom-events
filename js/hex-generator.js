import { header } from "./header.js";
header();

const bodyDOM = document.querySelector('body');
const hexDOM = document.querySelector('.hex');
const buttonDOM = document.querySelector('.generate');

const generateHexColor = () => {
    const randomColor = Math.random().toString(16).slice(2, 8);
    hexDOM.textContent = `#${randomColor}`;
    bodyDOM.style.backgroundColor = `#${randomColor}`;
};

buttonDOM.addEventListener('click', generateHexColor);
bodyDOM.addEventListener('mousewheel', generateHexColor);