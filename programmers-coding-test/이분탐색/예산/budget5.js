function solution(budgets, M) {
  const sumBudgets = budgets.reduce((accumulator, currentValue) => accumulator + currentValue);

  // eslint-disable-next-line no-param-reassign
  // budgets = budgets.sort((a, b) => a - b);

  if (sumBudgets <= M) {
    return Math.max.apply(null, budgets);
  }

  let maxMean = Math.max.apply(null, budgets);
  let minMean = 0;
  let center = Math.floor((maxMean + minMean) / 2);
  // console.log('init max', maxMean);
  // console.log('init center', center);

  while (maxMean - 1 !== minMean) {
    // console.log('ypypyp', center);
    const result = [];

    // eslint-disable-next-line no-loop-func
    budgets.forEach((budget) => {
      if (budget > center) {
        result.push(center);
      } else {
        result.push(budget);
      }
    });

    const sumResult = result.reduce((accumulator, currentValue) => accumulator + currentValue);
    if (sumResult > M) {
      maxMean = center;
      center = Math.floor((minMean + center) / 2);
    } else {
      minMean = center;
      center = Math.floor((maxMean + center) / 2);
    }
  }
  return center;
}

// console.log(solution([120, 110, 140, 150], 485));
