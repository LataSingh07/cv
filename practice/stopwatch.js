let displaytimer = document.getElementById('display');
let startbtn = document.getElementById('start');
let stopbtn = document.getElementById('stop');
let resetbtn = document.getElementById('reset');

let timerid = null;
let msec = 00;
let sec = 00;
let min = 00;

startbtn.addEventListener('click', function () {
    if (timerid != null) {
        clearInterval(timerid);
    }
    timerid = setInterval(starttimer, 10);
})
stopbtn.addEventListener('click', function () {
    clearInterval(timerid);
})
resetbtn.addEventListener('click', function () {
    clearInterval(timerid);
    msec = 0;
    sec = 0;
    min = 0;
    displaytimer.innerHTML = "00:00:00";
})

function starttimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
        }
    }

    let msecstring;
    if (msec < 10) {
        msecstring = `0${msec}`;
    } else {
        msecstring = msec;
    }
    let secstring;
    if (sec < 10) {
        secstring = `0${sec}`;
    } else {
        secstring = sec;
    }
    let minstring;
    if (min < 10) {
        minstring = `0${min}`;
    } else {
        minstring = min;
    }
    displaytimer.innerHTML = `${minstring}:${secstring}:${msecstring}`;
}
