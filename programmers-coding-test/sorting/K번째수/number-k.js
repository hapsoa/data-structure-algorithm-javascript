const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

class LimitedSorting {
  constructor(array) {
    this.array = array;
  }

  findSortedNumber(command) {
    const limitedArray = [];
    for (let i = command[0] - 1; i < command[1]; i++) {
      limitedArray.push(this.array[i]);
    }

    limitedArray.sort((a, b) => a - b);

    // console.log(limitedArray);
    // console.log(limitedArray[command[2] - 1]);
    return limitedArray[command[2] - 1];
  }
}

// const limitedSorting = new LimitedSorting(array);
// limitedSorting.findSortedNumber([2, 5, 3]);

function solution(array, commands) {

  const limitedSorting = new LimitedSorting(array);
  const answer = [];

  commands.forEach((command) => {
    answer.push(limitedSorting.findSortedNumber(command));
  });

  return answer;
}

// console.log(solution(array, commands));
