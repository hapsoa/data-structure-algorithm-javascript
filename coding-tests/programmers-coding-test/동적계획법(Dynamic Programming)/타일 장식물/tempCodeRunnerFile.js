/* eslint-disable no-lonely-if */
/* eslint-disable no-plusplus */
/* eslint-disable no-else-return */
class Fibonacci {
  constructor() {
    // this.memories = [this.fib(1), this.fib(2)];
    this.memories = new Array(80).fill(undefined);
    this.memories[0] = this.fib(1);
    this.memories[1] = this.fib(2);
  }

  getCircumference(N) {
    this.saveOperation(N - 1);
    if (N === 1) {
      return 4;
    } else if (N === 2) {
      return 6;
    } else {
      // const a = (this.fib(N) + 2 * this.fib(N - 1) + this.fib(N - 2)) * 2;
      const a = (3 * this.fib(N - 1) + 2 * this.fib(N - 2)) * 2;
      // console.log('memories', this.memories);
      return a;
    }
  }

  saveOperation(k) {
    for (let i = 1; i < k - 1; i++) {
      this.memories[i + 1] = this.fib(i + 1) + this.fib(i);
    }
  }

  fib(k) {
    if (k === 1) {
      return 1;
    }
    if (k === 2) {
      return 1;
    } else {
      // fibMemories에 이미 저장이 된 값을 반환한다.
      return this.memories[k - 1];
    }
  }
}

function solution(N) {
  const fibonacci = new Fibonacci();
  return fibonacci.getCircumference(N);
}

console.log(solution(6));

// const array = new Array(2).fill(undefined);
// array[0] = 1;
// array[1] = 2;
// console.log(array);
