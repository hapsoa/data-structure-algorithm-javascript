/* eslint-disable no-plusplus */

// O(n log n)

// const budgets = [120, 110, 140, 150];
// const M = 485;

class Budget {
  constructor(budgets, totalGovernmentBudget) {
    this.budgets = budgets.sort((a, b) => b - a);
    this.totalGovernmentBudget = totalGovernmentBudget;
  }

  getUpperLimit() {
  }
}

// const budget = new Budget([120, 110, 140, 150], 485);
// console.log(budget.getUpperLimit());

function solution(budgets, M) {
  const budgetInstance = new Budget(budgets, M);

  return budgetInstance.getUpperLimit();
}

// console.log(solution([120, 120, 120, 120, 120, 110], 700));
// 600 710
