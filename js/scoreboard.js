import { header } from "./header.js";
import { updateTimer } from "./timer.js";
import { minutes } from "./timer.js";
import { seconds } from "./timer.js";
header();
updateTimer();

const buttonsDOM = document.querySelectorAll('button');
buttonsDOM.forEach((button, index) => {
    button.addEventListener('click', () => {
        switch (index) {
            case 0:
                team1(1);
                break;
            case 1:
                team1(2);
                break;
            case 2:
                team1(3);
                break;
            case 3:
                team1(-1);
                break;
            case 4:
                team1(-2);
                break;
            case 5:
                team1(-3);
                break;
            case 6:
                team2(1);
                break;
            case 7:
                team2(2);
                break;
            case 8:
                team2(3);
                break;
            case 9:
                team2(-1);
                break;
            case 10:
                team2(-2);
                break;
            case 11:
                team2(-3);
                break;
            default:
                break;
        }
    });
});

const result1DOM = document.getElementById('team1').querySelector('.points > div');
const result2DOM = document.getElementById('team2').querySelector('.points > div');
const logDOM = document.getElementById('eventLog');
let result = '';

let team1Score = 0;
let team2Score = 0;

function team1(coof = 0) {
    team1Score += coof;
    result1DOM.textContent = team1Score;
    result = coof > 0 ? `<p>Team 1 scored: +${coof} ${minutes}:${seconds} </p>`
        : `<p>Points taken from Team 1: ${coof} ${minutes}:${seconds} </p>`;
    logDOM.insertAdjacentHTML('afterbegin', result);
}

function team2(coof = 0) {
    team2Score += coof;
    result2DOM.textContent = team2Score;
    result = coof > 0 ? `<p>Team 2 scored: +${coof} ${minutes}:${seconds} </p>`
        : `<p>Points taken from Team 2: ${coof} ${minutes}:${seconds} </p>`;
    logDOM.insertAdjacentHTML('afterbegin', result);
}