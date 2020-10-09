// 정답. 하지만 https://programmers.co.kr/learn/courses/30/lessons/43237/solution_groups?language=javascript
// 에 있는 내가 좋아요한 첫번째 해답이 더 빨라보인다.

// 총 가능한 예산 / 예산도시 수 = 한 도시당 배분 가능한 예산일 것이다.
// 한 도시당 배분 가능한 예산보다 작으면 문제가 없는데, 크면은 그 해당 녀석들을

// 다시 반복 작업을 한다.

// 와 대단한 로직이네.

// 아래는 정답을 맞춘 로직이고, 위는 내가 좋아하느 로직. 직접 짜지는 않았다.
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

console.log(solution([120, 110, 140, 150], 485));
