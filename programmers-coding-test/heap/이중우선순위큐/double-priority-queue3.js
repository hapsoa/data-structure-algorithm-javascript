/* eslint-disable radix */
/* eslint-disable no-console */
class DoublePriorityQueue {
  constructor() {
    this.queue = []; // number[]
  }

  insert(value) {
    const lastIndex = this.queue.length - 1;
    this.findMiddle(value, 0, lastIndex);
  }

  findMiddle(value, firstIndex, lastIndex) {
    const middleIndex = Math.floor(firstIndex + (lastIndex - firstIndex) / 2);
    if (value < this.queue[middleIndex]) {
      if (middleIndex - firstIndex > 1) {
        this.findMiddle(value, firstIndex, middleIndex);
      } else {
        this.queue.splice(middleIndex, 0, value);
      }
    } else if (value > this.queue[middleIndex]) {
      if (middleIndex - firstIndex > 1) {
        this.findMiddle(value, middleIndex + 1, lastIndex);
      } else {
        console.log('kakaka');
        if (value <= this.queue[middleIndex + 1]) {
          this.queue.splice(middleIndex + 1, 0, value);
        } else {
          this.findMiddle(value, middleIndex + 2, lastIndex);
        }
      }
    } else {
      // value === this.queue[middleIndex]
      this.queue.splice(middleIndex, 0, value);
    }
  }

  popMinValue() {
    return this.queue.shift();
  }

  popMaxValue() {
    return this.queue.pop();
  }

  show() {
    console.log(this.queue);
  }
}


// const doublePriorityQueue = new DoublePriorityQueue();
// doublePriorityQueue.insert(-16);
// doublePriorityQueue.insert(1);
// doublePriorityQueue.insert(2);
// doublePriorityQueue.show();

// console.log('pop min', doublePriorityQueue.popMinValue());
// doublePriorityQueue.show();

// console.log('pop max', doublePriorityQueue.popMaxValue());
// doublePriorityQueue.show();

// const operations1 = ["I 16","D 1"]
function solution(operations) {
  const doublePriorityQueue = new DoublePriorityQueue();

  operations.forEach((operation) => {
    const instruction = operation.split(' ')[0];
    const value = operation.split(' ')[1];
    if (instruction === 'I') {
      doublePriorityQueue.insert(parseInt(value));
    } else if (instruction === 'D') {
      if (value === '1') {
        doublePriorityQueue.popMaxValue();
      } else { // value === -1
        doublePriorityQueue.popMinValue();
      }
    }
  });

  const answer = [];

  if (doublePriorityQueue.queue[doublePriorityQueue.queue.length - 1] !== undefined) {
    answer.push(doublePriorityQueue.queue[doublePriorityQueue.queue.length - 1]);
  } else {
    answer.push(0);
  }

  if (doublePriorityQueue.queue[0] !== undefined) {
    answer.push(doublePriorityQueue.queue[0]);
  } else {
    answer.push(0);
  }

  // answer.push(doublePriorityQueue.queue[0]);
  // answer.push(doublePriorityQueue.queue[doublePriorityQueue.queue.length - 1]);
  console.log('queue', doublePriorityQueue.queue);
  return answer;
}

// console.log('awnser', solution(['I -16', 'I 1', 'I 2']));
