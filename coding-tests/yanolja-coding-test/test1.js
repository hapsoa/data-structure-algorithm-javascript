A = [1, 0, 1, 1, 0, 0];

function solution(A) {
  let numOfHead = 0;
  let numOfTail = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      numOfHead++;
    } else {
      numOfTail++;
    }
  }

  return numOfHead < numOfTail ? numOfHead : numOfTail;
}

const result = solution(A);

console.log("result", result);
