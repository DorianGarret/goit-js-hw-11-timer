import { CountdownTimer } from './countdown-timer';

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Dec 31, 2021, 23:59:00'),
});

timer.start();
