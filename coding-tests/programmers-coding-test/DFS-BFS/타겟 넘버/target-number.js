/* eslint-disable no-plusplus */
class TargetNumber {
  constructor(numbers, target) {
    this.numbers = numbers; // number[]
    this.target = target; // number
    this.numOfWays = 0;
  }

  // O(2^n)
  findWay(addedNum, index) {
    const addedNum1 = addedNum + this.numbers[index];
    const addedNum2 = addedNum - this.numbers[index];
    if (index !== this.numbers.length - 1) {
      this.findWay(addedNum1, index + 1);
      this.findWay(addedNum2, index + 1);
    } else {
      // console.log('hot1', addedNum1);
      // console.log('hot2', addedNum2);
      if (addedNum1 === this.target) {
        this.numOfWays++;
      }
      if (addedNum2 === this.target) {
        this.numOfWays++;
      }
    }
  }

  getNumOfWays() {
    this.numOfWays = 0;
    this.findWay(0, 0);
    return this.numOfWays;
  }
}

// const targetNumber = new TargetNumber([1, 1, 1, 1, 1], 3);
// console.log(targetNumber.getNumOfWays());

function solution(numbers, target) {
  const targetNumber = new TargetNumber(numbers, target);

  return targetNumber.getNumOfWays();
}

// console.log(solution([1, 1, 1, 1, 1], 3));
