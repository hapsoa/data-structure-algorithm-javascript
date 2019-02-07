/* eslint-disable no-plusplus */

// 속도문제... 왜냐하면 O(log n)정렬 + O(n제곱)계산 으로 계산이 되나보다..
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

    let maximumValue = this.budgets[0];
    let lastMaximumIndex = 0;
    let tempMoney = reducingGoalBudget;
    //
    while (tempMoney > 0) {
      for (let i = lastMaximumIndex + 1; i < this.budgets.length; i++) {
        if (this.budgets[i] >= maximumValue) {
          lastMaximumIndex = i;
        } else {
          break;
        }
      }
      // console.log('lastMaimumIndex', lastMaximumIndex);
      // console.log('tempMoney', tempMoney);
      // console.log('maximumValue', maximumValue);
      // [120, 120, 120, 120, 120, 110]
      if (this.budgets[lastMaximumIndex + 1] !== undefined) {
        const difference = maximumValue - this.budgets[lastMaximumIndex + 1];
        const temp = difference * (lastMaximumIndex + 1);
        if (temp < tempMoney) {
          // contitnue. 정산한다. 그리고 반복
          tempMoney -= temp;
          maximumValue -= difference;
          for (let i = 0; i <= lastMaximumIndex; i++) {
            this.budgets[i] = maximumValue;
          }
        } else {
          // 계산
          // console.log('hahaot');
          maximumValue -= Math.ceil(tempMoney / (lastMaximumIndex + 1));
          break;
        }
      } else {
        maximumValue -= Math.ceil(tempMoney / (lastMaximumIndex + 1));
        break;
      }
    }

    return maximumValue;
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
