const timers = {} ;

function mySetInterval(callback,delay) {
    const id = Date.now() + Math.random();

    function repeat() {
        timers[id] = setTimeout(() => {
            callback();
            repeat();
        }, delay);
    }

    repeat();
    return id;
}

function myClearInterval(id) {
    if (timers[id]) {
        clearTimeout(timers[id]);
        delete timers[id];
    }
}



// To Check

// let count = 0;
// const id = mySetInterval(()=> {
//     count++;
//     console.log(`Interval Tick : ${count}`);

//     if (count === 3) {
//         myClearInterval(id);
//         console.log("Interval Cleared")
//     }
// }, 1000);