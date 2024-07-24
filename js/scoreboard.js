import { header } from "./header.js";
import { minutes } from "./timer.js";
import { seconds } from "./timer.js";
import { pauseTimer } from "./timer.js";
import { startTimer } from "./timer.js";
import { resetTimer } from "./timer.js";

header();

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
                resetTimer();
                break;
            case 11:
                foul(2, 'add');;
                break;
            case 12:
                foul(2, 'minus');;
                break;
            case 13:
                team(1, 2);
                break;
            case 14:
                team(2, 2);
                break;
            case 15:
                team(3, 2);
                break;
            case 16:
                team(-1, 2);
                break;
            case 17:
                team(-2, 2);
                break;
            case 18:
                team(-3, 2);
                break;
            default:
                break;
        }
    });
});

let team1Score = parseInt(localStorage.getItem('score1')) || 0;
let team2Score = parseInt(localStorage.getItem('score2')) || 0;
const result1DOM = document.getElementById('team1').querySelector('.points > div');
const result2DOM = document.getElementById('team2').querySelector('.points > div');
const logDOM = document.getElementById('eventLog');

function team(coof = 0, team) {
    team === 1 ? team1Score += coof : team2Score += coof;
    team === 1 ? result1DOM.textContent = team1Score : result2DOM.textContent = team2Score;

    const miliSeconds = new Date().getMilliseconds();

    const array = {
        score: coof,
        team: team,
        time: `${miliSeconds}`,
        minutes: minutes,
        seconds: seconds
    };

    logDOM.insertAdjacentHTML('afterbegin', `<p data-time="${miliSeconds}">Team ${team} ${coof > 0 ? 'scored' : 'lost points'}: ${coof} ${minutes}:${seconds} <button class="del">Remove</button></p>`);

    let resultsArray = JSON.parse(localStorage.getItem('results')) || [];
    resultsArray.push(array);

    const removeBtns = document.querySelectorAll('.del');
    removeBtns.forEach(btn => {
        btn.onclick = (e) => {
            const parent = e.target.parentElement;
            const time = parent.getAttribute('data-time');
            parent.remove();

            const index = resultsArray.findIndex(result => result.time === time);
            resultsArray.splice(index, 1);

            team1Score = resultsArray.reduce((acc, curr) => curr.team === 1 ? acc + curr.score : acc, 0);
            team2Score = resultsArray.reduce((acc, curr) => curr.team === 2 ? acc + curr.score : acc, 0);

            result1DOM.textContent = team1Score;
            result2DOM.textContent = team2Score;

            localStorage.setItem('results', JSON.stringify(resultsArray));
            localStorage.setItem('score1', team1Score);
            localStorage.setItem('score2', team2Score);
        };
    });

    localStorage.setItem('results', JSON.stringify(resultsArray));
    localStorage.setItem('score1', team1Score);
    localStorage.setItem('score2', team2Score);
}

result1DOM.textContent = team1Score;
result2DOM.textContent = team2Score;

window.onload = () => {
    const resultsArray = JSON.parse(localStorage.getItem('results')) || [];
    resultsArray.forEach(result => {
        logDOM.insertAdjacentHTML('afterbegin', `<p data-time="${result.time}">Team ${result.team} ${result.score > 0 ? 'scored' : 'lost points'}: ${result.score} ${result.minutes}:${result.seconds} <button class="del">Remove</button></p>`);
    });

    const removeBtns = document.querySelectorAll('.del');
    removeBtns.forEach(btn => {
        btn.onclick = (e) => {
            const parent = e.target.parentElement;
            const time = parent.getAttribute('data-time');
            parent.remove();

            const index = resultsArray.findIndex(result => result.time === time);
            resultsArray.splice(index, 1);

            team1Score = resultsArray.reduce((acc, curr) => curr.team === 1 ? acc + curr.score : acc, 0);
            team2Score = resultsArray.reduce((acc, curr) => curr.team === 2 ? acc + curr.score : acc, 0);

            result1DOM.textContent = team1Score;
            result2DOM.textContent = team2Score;

            localStorage.setItem('results', JSON.stringify(resultsArray));
            localStorage.setItem('score1', team1Score);
            localStorage.setItem('score2', team2Score);
        };
    });
};

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