import './sass/main.scss';

const timer = {
    start() {
        const startTime = Date.now();

        startTime -
            setInterval(() => {
                const currentTime = Date.now();
                const deltaTime = currentTime - startTime;
                const time = getTimeComponents(deltaTime);
                clockInterface(time);
            }, 1000);
    },
};
timer.start(400000);

function pad(value) {
    return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

    const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );

    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
}

function clockInterface({ days, hours, mins, secs }) {
    document.querySelector('[data-value="days"]').textContent = days;
    document.querySelector('[data-value="hours"]').textContent = hours;
    document.querySelector('[data-value="mins"]').textContent = mins;
    document.querySelector('[data-value="secs"]').textContent = secs;
}
