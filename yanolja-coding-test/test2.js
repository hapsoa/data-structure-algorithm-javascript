// A = [-3, -3, 1, 1];
A = [2, 2, 3, 4, 3, 3, 2, 2, 1, 1, 2, 5];

function solution(A) {
  let P = 0;
  let Q = 0;

  let numOfHillValley = 0;

  let hillState = "start";
  let valleyState = "start";

  // 내려갔다 올라갔다
  // 올라갔다 내려갔다

  const N = A.length;
  // console.log("N", N);
  for (let i = 0; i < A.length; i++) {
    // hill start
    if (i > 0 && A[i - 1] < A[i]) {
      hillState = "start";
      valleyState = "none";
    }

    // valley start
    if (i > 0 && A[i - 1] > A[i]) {
      valleyState = "start";
      hillState = "none";
    }

    // hill end
    if (i < N - 1 && A[i + 1] < A[i]) {
      // console.warn("hill end", i);
      if (hillState === "start") {
        hillState = "end";
      }
    }

    // valley end
    if (i < N - 1 && A[i + 1] > A[i]) {
      // console.warn("valley end", i);
      if (valleyState === "start") {
        valleyState = "end";
      }
    }

    if (i === A.length - 1) {
      // console.log("last");
      hillState === "end";
      valleyState = "end";
    }

    console.log("index", i, "hillState", hillState, "valleyState", valleyState);

    if (hillState === "end" || valleyState === "end") {
      numOfHillValley += 1;
      console.log("numOfHillValley", numOfHillValley, "index", i);
    }
  }

  return numOfHillValley;
}

const result = solution(A);

console.log("result", result);
