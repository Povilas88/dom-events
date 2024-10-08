export let time = 600;
export let minutes = '';
export let seconds = '';
export let timerId;

export function updateTimer() {
    minutes = String(Math.floor(time / 60)).padStart(2, '0');
    seconds = String(time % 60).padStart(2, '0');

    document.getElementById('minutesTens').textContent = minutes[0];
    document.getElementById('minutesOnes').textContent = minutes[1];
    document.getElementById('secondsTens').textContent = seconds[0];
    document.getElementById('secondsOnes').textContent = seconds[1];

    if (time > 0) {
        time--;
        timerId = setTimeout(updateTimer, 1000);
    }
}

export function startTimer() {
    if (!timerId) {
        if (localStorage.getItem('savedTime')) {
            time = parseInt(localStorage.getItem('savedTime'));
        }
        timerId = setTimeout(updateTimer, 1000);
    }
}

export function pauseTimer() {
    clearTimeout(timerId);
    timerId = null;
    localStorage.setItem('savedTime', time)
}

export function resetTimer() {
    time = 600;
    minutes = String(Math.floor(time / 60)).padStart(2, '0');
    seconds = String(time % 60).padStart(2, '0');

    document.getElementById('minutesTens').textContent = minutes[0];
    document.getElementById('minutesOnes').textContent = minutes[1];
    document.getElementById('secondsTens').textContent = seconds[0];
    document.getElementById('secondsOnes').textContent = seconds[1];

    localStorage.setItem('savedTime', time);
}

// const timerElement = document.getElementById('timer');
// let time = 600;

// const countdown = setInterval(() => {
//     const minutes = Math.floor(time / 60).toString().padStart(2, '0');
//     const seconds = (time % 60).toString().padStart(2, '0');
//     timerElement.textContent = `${minutes}:${seconds}`;

//     if (time <= 0) {
//         clearInterval(countdown);
//     } else {
//         time--;
//     }
// }, 1000);