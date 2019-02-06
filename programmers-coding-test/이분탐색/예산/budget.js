/* eslint-disable no-plusplus */
// const budgets = [120, 110, 140, 150];
// const M = 485;

class Budget {
  constructor(budgets, totalGovernmentBudget) {
    this.budgets = budgets.sort((a, b) => b - a);
    this.totalGovernmentBudget = totalGovernmentBudget;
  }

  getUpperLimit() {
    let totalRequestedBudgets = 0;
    this.budgets.forEach((budget) => {
      totalRequestedBudgets += budget;
    });
    const reducingGoalBudget = totalRequestedBudgets - this.totalGovernmentBudget;

    let maximum = this.budgets[0];
    let lastMaximumIndex = 0;
    let reducingBudget = 0;
    //
    while (reducingBudget < reducingGoalBudget) {
      // console.log('hi', reducingBudget, reducingGoalBudget);
      for (let i = lastMaximumIndex + 1; i < this.budgets.length; i++) {
        if (this.budgets[i] >= maximum) {
          lastMaximumIndex = i;
          break;
        }
      }
      // console.log('lastMaxmimumIndex', lastMaximumIndex);

      for (let i = 0; i <= lastMaximumIndex; i++) {
        this.budgets[i]--;
        reducingBudget++;
        // console.log('?');
      }

      // console.log('reducing budget', reducingBudget);
      // eslint-disable-next-line prefer-destructuring
      maximum = this.budgets[0];
    }

    return maximum;
  }
}

// const budget = new Budget([120, 110, 140, 150], 485);
// console.log(budget.getUpperLimit());

function solution(budgets, M) {
  const budgetInstance = new Budget(budgets, M);

  return budgetInstance.getUpperLimit();
}

// console.log(solution([120, 110, 140, 150], 485));
