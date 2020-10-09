// function removeArrayElement(array, value) {
//   const clonedArray = JSON.parse(JSON.stringify(array));
//   var index = clonedArray.indexOf(value);
//   if (index !== -1) {
//     clonedArray.splice(index, 1);
//   }
//   return clonedArray;
// }

// const testArray = [1, 2, 3];

// const result = removeArrayElement(testArray, 2);
// console.log("result", result, testArray);

function removeArrayElements(array, trashHash) {
  const clonedArray = JSON.parse(JSON.stringify(array));

  const trashKeys = Object.keys(trashHash);

  for (let i = 0; i < trashKeys.length; i++) {
    const trashKey = parseInt(trashKeys[i]);

    const index = clonedArray.indexOf(trashKey);
    if (index !== -1) {
      clonedArray.splice(index, 1);
    }
  }

  return clonedArray;
}

const result = removeArrayElements([1, 2, 3], {
  1: true,
  2: true,
  3: true,
  4: true
});
console.log(result);
