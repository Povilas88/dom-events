import { header } from "./header.js";
header();
const wordDOM = document.querySelector('.inputText');
const btnDOM = document.querySelector('.btn');
const resultsDOM = document.querySelector('.results');

btnDOM.addEventListener("click", countVowel)

function countVowel() {
    let wordVal = wordDOM.value.toLowerCase().trim();
    let vowelCount = 0;
    const plural = (wordVal.includes(' '))
    for (let i = 0; i < wordVal.length; i++) {
        const letter = wordVal[i];

        if (letter.match(/([a,e,o,u,i])/)) {
            vowelCount++;
        }
    }
    resultsDOM.textContent = `${plural ? 'Words' : 'Word'} ${plural ? 'have' : 'has'} ${vowelCount} vowel${plural ? 's' : ''}.`
}


