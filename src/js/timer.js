import { CountdownTimer } from './countdown-timer';

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Dec 31, 2021, 23:59:00'),
    onTick: updateClockInterface,
});

function updateClockInterface({ days, hours, mins, secs }) {
    let timerValue = document.querySelectorAll('#timer-1 .value');

    timerValue.forEach(event => {
        switch (event.dataset.value) {
            case 'days':
                event.textContent = days;
                break;
            case 'hours':
                event.textContent = hours;
                break;
            case 'mins':
                event.textContent = mins;
                break;
            case 'secs':
                event.textContent = secs;
                break;
        }
    });
}

timer.start();
