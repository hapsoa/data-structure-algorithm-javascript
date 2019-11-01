// 인접 쌍들을 구한다.
// 인접 쌍들에 대한 각각의 distance들을 구한다.
// distance들 중 가장 작은 녀석을 반환한다.

A = [0, 3, 3, 7, 5, 3, 11, 1];

function solution(A) {
  const adjacentIndices = [];

  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      // i ~ j 안에 있는 실수를 구한다.
      const maxNumber = Math.max(A[i], A[j]);
      const minNumber = Math.min(A[i], A[j]);

      let isAdjacent = true;
      for (let k = minNumber + 1; k < maxNumber; k++) {
        if (A.indexOf(k) !== -1) {
          isAdjacent = false;
          break;
        }
      }

      if (isAdjacent) {
        adjacentIndices.push([i, j]);
      }
    }
  }

  // console.log("adjacentIndices", adjacentIndices);

  const distances = [];
  for (let i = 0; i < adjacentIndices.length; i++) {
    // console.log("!!");
    const adjacentIndice = adjacentIndices[i];

    const P = adjacentIndice[0];
    const Q = adjacentIndice[1];

    distances.push(Math.abs(A[P] - A[Q]));
  }

  // console.log("distances", distances);

  if (distances.length > 0) {
    const minDistance = Math.min(...distances);
    // console.log("minDistance", minDistance);
    if (minDistance < 100000000) {
      return minDistance;
    } else {
      return -1;
    }
  }
  return -2;
}

const result = solution(A);

console.log("result", result);
