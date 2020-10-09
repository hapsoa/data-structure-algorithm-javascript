// 고유의 원소들을 찾는다.

// 고유의 원소마다 계산을 구한다.
// 해당 값을 더하고, +1-1 에 해당하는 elements를 제외한다.
// 다시 후보들이 있는데, 모든 후보들에 대해서 반복한다.

// 그중 최대값을 반환한다.

/**
 * 최대 point를 반환한다.
 * @param {number[]} elements : [3, 4, 2]
 */
function maxPoints(elements) {
  const elementsHash = {};

  for (let i = 0; i < elements.length; i++) {
    elementsHash[elements[i]] = elements[i];
  }

  // 고유의 원소들을 찾는다.
  const uniqueElements = Object.values(elementsHash);

  // 고유의 원소마다 계산을 구한다.
  // 해당 element를 제외하고 합에 해당값을 더하고, +1-1 에 해당하는 elements를 제외한다.
  // 다시 후보들이 있는데, 모든 후보들에 대해서 반복한다.
  const sums = [];
  for (let i = 0; i < uniqueElements.length; i++) {
    const uniqueElement = uniqueElements[i];
    const trashHash = {};
    let newSum = 0;
    if (!trashHash.hasOwnProperty(uniqueElement)) {
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (element === uniqueElement) {
          newSum += element;
        }
      }
    }
    trashHash[uniqueElement] = true;
    trashHash[uniqueElement + 1] = true;
    trashHash[uniqueElement - 1] = true;

    const sum = makeSum({
      elements,
      summingElement: uniqueElement,
      leftUniqueElements: removeArrayElement(uniqueElements, uniqueElement),
      trashHash,
      sum: newSum
    });
    console.log("sum", sum);
    sums.push(sum);
  }

  return Math.max(...sums);
}

/**
 * 원본 elements와 trashHash가 필요하다.
 * @param {number[]} o.elements 전체 elements
 * @param {number} o.summingElement 현재 더할 element
 * @param {number[]} o.leftUniqueElements 계산하고 남은 elements
 * @param {{[number]: true}} o.trashHash 버려진 elements들
 * @param {number} o.sum 현재 합
 * @return {number} 합 후보들의 최대값
 */
function makeSum(o) {
  if (o.leftUniqueElements.length > 1) {
    const sums = [];
    for (let i = 0; i < o.leftUniqueElements.length; i++) {
      const leftUniqueElement = o.leftUniqueElements[i];

      let newSum = o.sum;
      const trashHash = JSON.parse(JSON.stringify(o.trashHash));
      if (!trashHash.hasOwnProperty(leftUniqueElement)) {
        for (let i = 0; i < o.elements.length; i++) {
          const element = o.elements[i];
          if (element === leftUniqueElement) {
            newSum += element;
          }
        }
      }

      trashHash[leftUniqueElement] = true;
      trashHash[leftUniqueElement + 1] = true;
      trashHash[leftUniqueElement - 1] = true;

      // leftUniqueElments에서 쓰레기통에 있는 element를 뺀다.
      const leftUniqueElements = removeArrayElements(
        o.leftUniqueElements,
        trashHash
      );

      const sum = makeSum({
        elements: o.elements,
        summingElement: leftUniqueElement,
        leftUniqueElements,
        trashHash,
        sum: newSum
      });
      sums.push(sum);
    }

    return Math.max(...sums);
  } else {
    // 남은게 하나 남았을 때는 더한다.
    let sum = o.sum;
    if (o.leftUniqueElements.length === 1) {
      for (let i = 0; i < o.elements.length; i++) {
        const element = o.elements[i];
        if (element === o.leftUniqueElements[0]) {
          sum += element;
        }
      }
    }

    return sum;
  }
}

/**
 * array에서 value를 뺀 새로운 array를 반환한다.
 * @param {number[]} array
 * @param {number} value
 */
function removeArrayElement(array, value) {
  const clonedArray = JSON.parse(JSON.stringify(array));

  const index = clonedArray.indexOf(value);
  if (index !== -1) {
    clonedArray.splice(index, 1);
  }
  return clonedArray;
}

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

// maxPoints([3, 4, 2]);
maxPoints([1, 2, 1, 3, 2, 3]);
