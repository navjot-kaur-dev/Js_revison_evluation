async function runSequential(tasks,delay) {
    const results = [];

    for (const task of tasks) {
        try {
            const result = await task();
            results.push(result);

            await new Promise(resolve => setTimeout(resolve, delay));
        } catch (error) {
            console.error("Task failed, stopping runner.");

            return results;
        }
    }
    return results;
}