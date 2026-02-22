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