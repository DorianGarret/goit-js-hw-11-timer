export class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.targetDate = targetDate;
        this.selector = selector;
    }

    start() {
        setInterval(() => {
            this.clockInterface(
                this.getTimeComponents(this.targetDate - Date.now()),
            );
        }, 1000);
    }

    clockInterface({ days, hours, mins, secs }) {
        let timerValue = document.querySelectorAll(`${this.selector} .value`);

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

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

        const hours = this.pad(
            Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        );

        const mins = this.pad(
            Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
        );

        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return { days, hours, mins, secs };
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }
}
