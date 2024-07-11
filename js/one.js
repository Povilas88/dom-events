import { header } from "./header.js";
header();
const buttonsDOM = document.querySelectorAll('button');
const minus3DOM = buttonsDOM[0];
const minus2DOM = buttonsDOM[1];
const minus1DOM = buttonsDOM[2];
const plus1DOM = buttonsDOM[3];
const plus2DOM = buttonsDOM[4];
const plus3DOM = buttonsDOM[5];
const resultDOM = document.querySelector('.one > div');

let total = 0;

function minusOne() {
    total--;
    resultDOM.textContent = total;
}
function minusTwo() {
    total -= 2;
    resultDOM.textContent = total;
}
function minusThree() {
    total -= 3;
    resultDOM.textContent = total;
}

function plusOne() {
    total++;
    resultDOM.textContent = total;
}
function plusTwo() {
    total += 2;
    resultDOM.textContent = total;
}
function plusThree() {
    total += 3;
    resultDOM.textContent = total;
}

minus1DOM.addEventListener('click', minusOne);
minus2DOM.addEventListener('click', minusTwo);
minus3DOM.addEventListener('click', minusThree);

plus1DOM.addEventListener('click', plusOne);
plus2DOM.addEventListener('click', plusTwo);
plus3DOM.addEventListener('click', plusThree);