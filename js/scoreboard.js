import { header } from "./header.js";
import { updateTimer } from "./timer.js";
import { minutes } from "./timer.js";
import { seconds } from "./timer.js";
import { pauseTimer } from "./timer.js";
import { startTimer } from "./timer.js";

header();
updateTimer();

const buttonsDOM = document.querySelectorAll('button');
buttonsDOM.forEach((button, index) => {
    button.addEventListener('click', () => {
        switch (index) {
            case 0:
                foul(1, 'add');
                break;
            case 1:
                foul(1, 'minus');
                break;
            case 2:
                team(1, 1);
                break;
            case 3:
                team(2, 1);
                break;
            case 4:
                team(3, 1);
                break;
            case 5:
                team(-1, 1);
                break;
            case 6:
                team(-2, 1);
                break;
            case 7:
                team(-3, 1);
                break;
            case 8:
                startTimer();
                break;
            case 9:
                pauseTimer();
                break;
            case 10:
                foul(2, 'add');;
                break;
            case 11:
                foul(2, 'minus');;
                break;
            case 12:
                team(1, 2);
                break;
            case 13:
                team(2, 2);
                break;
            case 14:
                team(3, 2);
                break;
            case 15:
                team(-1, 2);
                break;
            case 16:
                team(-2, 2);
                break;
            case 17:
                team(-3, 2);
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

function team(coof = 0, team) {
    team === 1 ? team1Score += coof : team2Score += coof;
    team === 1 ? result1DOM.textContent = team1Score : result2DOM.textContent = team2Score;
    result = coof > 0 ? `<p>Team ${team} scored: +${coof} ${minutes}:${seconds} </p>`
        : `<p>Points taken from Team ${team}: ${coof} ${minutes}:${seconds} </p>`;

    const eventElement = document.createElement('div');
    eventElement.innerHTML = result;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        if (team === 1) {
            team1Score -= coof;
            result1DOM.textContent = team1Score;
        } else {
            team2Score -= coof;
            result2DOM.textContent = team2Score;
        }
        eventElement.remove();
    });

    eventElement.appendChild(removeButton);
    logDOM.insertAdjacentElement('afterbegin', eventElement);
}

const bars1DOM = document.querySelectorAll('.bar1');
const bars2DOM = document.querySelectorAll('.bar2');

let foul1Count = 0;
let foul2Count = 0;

function foul(team, action) {
    const barsDOM = team === 1 ? bars1DOM : bars2DOM;
    let foulCount = team === 1 ? foul1Count : foul2Count;

    if (action === 'add') {
        if (foulCount < barsDOM.length - 1) {
            barsDOM[foulCount].style.backgroundColor = 'orange';
            team === 1 ? foul1Count++ : foul2Count++;
        } else {
            for (let i = 0; i < barsDOM.length; i++) {
                barsDOM[i].style.backgroundColor = 'red';
            }
        }
    } else if (action === 'minus') {
        if (foulCount > 0) {
            for (let i = 0; i < barsDOM.length; i++) {
                barsDOM[i].style.backgroundColor = 'orange';
            }
            team === 1 ? foul1Count-- : foul2Count--;
        }
        if (foulCount < barsDOM.length) {
            for (let i = foulCount; i < barsDOM.length; i++) {
                barsDOM[i].style.backgroundColor = 'transparent';
            }
        }
    }
}