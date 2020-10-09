/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */

// 정답
// O(n log n)

// const budgets = [120, 110, 140, 150];
// const M = 485;

class Budget {
  constructor(budgets, totalGovernmentBudget) {
    // this.budgets = budgets.sort((a, b) => a - b);
    this.budgets = budgets;
    this.totalGovernmentBudget = totalGovernmentBudget;
    // console.log(this.min, this.max, 'minMax');
    this.upperLimit = null;
  }

  getUpperLimit() {
    let totalRequestedBudgets = 0;
    this.budgets.forEach((budget) => {
      totalRequestedBudgets += budget;
    });
    const reducingGoalBudget = totalRequestedBudgets - this.totalGovernmentBudget;
    if (reducingGoalBudget > 0) {
      this.findUpperLimit(0, Math.max.apply(null, this.budgets));
    } else {
      this.upperLimit = Math.max.apply(null, this.budgets);
    }
    return this.upperLimit;
  }

  findUpperLimit(min, max) {
    if (max - min <= 1) {
      this.upperLimit = min;
      return;
    }

    const middle = Math.floor((min + max) / 2);

    let tempSum = 0;
    this.budgets.forEach((budget) => {
      if (budget > middle) {
        tempSum += middle;
      } else {
        tempSum += budget;
      }
    });

    if (tempSum < this.totalGovernmentBudget) {
      this.findUpperLimit(middle, max);
    } else if (tempSum > this.totalGovernmentBudget) {
      this.findUpperLimit(min, middle);
    } else {
      this.upperLimit = middle;
    }
  }
}

// const budget = new Budget([120, 110, 140, 150], 485);
// console.log(budget.getUpperLimit());

function solution(budgets, M) {
  const budgetInstance = new Budget(budgets, M);

  return budgetInstance.getUpperLimit();
}

// console.log(solution([120, 110, 140, 150], 485));
// 600 710
