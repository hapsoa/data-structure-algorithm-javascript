// const character = "a";

// const result = parseInt(character);
// console.log("result", result);

// if (isNaN(result)) {
//   console.log("yap");
// }

//

// const a = "(A(B)(C))";

// const b = a.replace("(B)", `(B(D))`);

// console.log(b);

// const c = "";
// c.replace();

//

let a = "abc";

// console.log("a[1]", a[1]);
// a[1] = "fg";

const slicedIndex = 1;
const insertingString = "fg";
const result = a.slice(0, slicedIndex) + insertingString + a.slice(slicedIndex);

console.log("result", result);
