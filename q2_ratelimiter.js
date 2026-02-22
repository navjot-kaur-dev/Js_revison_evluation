function createRateLimiter (limit,interval) {
    let count = 0;

    return function() {
        if (count < limit) {
            count++;

            setTimeout(() => {
                count--;
            }, interval);
            return "Action permitted";
        } else {
            return "Error : Rate limit exceeded. Please Wait.";
        }
    };
}



 // To Check

// const limiter = createRateLimiter(2,2000);

// console.log (limiter());
// console.log(limiter());
// console.log(limiter());

// setTimeout(()=> {
//     console.log("After wait : ", limiter());
// }, 2500);