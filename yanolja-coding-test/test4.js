// 가장 적은 루트의 여행길이를 반환한다.
// trip의 수를 구한다.
// 반복문을 돌면서 찾는다.

// const A = [7, 3, 7, 3, 1, 3, 4, 1];
// const A = [2, 1, 1, 3, 2, 1, 1, 3];
const A = [7, 5, 2, 7, 2, 7, 4, 7];

function solution(A) {
  
  // A의 고유한 개별 trip을 찾는다.
  const tripHash = {};
  for (let i = 0; i < A.length; i++) {
    tripHash[A[i]] = true;
  }

  // A의 고유한 개별 trip의 수
  const numOfTrips = Object.keys(tripHash).length;

  // 반복문을 돌면서 찾는다.
  let minNumOfTrips = null;
  
  // trip수를 늘린다.
  for (let i = numOfTrips; i <= A.length; i++) {
    // 4개짜리를 돌린다.
    for (let j = 0; j <= A.length - i; j++) {
      const tempHash = {};

      for (let k = j; k < j + i; k++) {
        tempHash[A[k]] = true;
      }

      console.log("tempHash", tempHash);
      if (numOfTrips === Object.keys(tempHash).length) {
        minNumOfTrips = i;
        break;
      }
    }
    if (minNumOfTrips !== null) {
      break;
    }
  }

  return minNumOfTrips;
}

const result = solution(A);
console.log("result", result);
