async function runSequential(tasks, delay) {
  const results = [];

  for (const task of tasks) {
    try {
      const result = await task();
      results.push(result);

      await new Promise((resolve) => setTimeout(resolve, delay));
    } catch (error) {
      console.error("Task failed, stopping runner.");

      return results;
    }
  }
  return results;
}

// To Check
// const task1 = () => Promise.resolve("Task 1 Done");
// const task2 = () => Promise.resolve("Task 2 Done");
// const tasks = [task1, task2];

// runSequential(tasks, 1000).then((results) => {
//   console.log("Results : ", results);
// });