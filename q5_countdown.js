function createCountdown(seconds, onTick, onComplete) {
    let remainingTime = seconds;
    let timerId = null;
    let isActive = false;

    function start() {
        if (isActive) return;
        isActive = true;

        timerId = setInterval(() => {
            remainingTime--;
            onTick(remainingTime);

            if (remainingTime <= 0) {
                clearInterval(timerId);
                isActive = false;
                onComplete();
            }
        }, 1000);
    }

    return {
        pause() {
            clearInterval(timerId);
            isActive = false;
        },
        resume() {
            start();
        },
        start
    };
}

// To Check 
const timer = createCountdown(
    5, 
    (time) => console.log(`Time left ${time}`),
    () => console.log("Boom ! Countdown finished.")
);

timer.start();

setTimeout(()=> {
    console.log("---Pausing---");
    timer.pause();
    setTimeout(() => {
        console.log("---Resuming---");
        timer.resume();

    }, 2000);
},2000);