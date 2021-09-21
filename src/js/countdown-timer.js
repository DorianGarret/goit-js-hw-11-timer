export class CountdownTimer {
    constructor({ selector, targetDate, onTick }) {
        this.targetDate = targetDate;
        this.selector = selector;
        this.onTick = onTick;
        this.deltaTime;
        this.time;
    }

    start() {
        setInterval(() => {
            const currentTime = Date.now();
            this.deltaTime = this.targetDate - currentTime;
            this.time = this.getTimeComponents(this.deltaTime);
            this.onTick(this.time);
        }, 1000);
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
