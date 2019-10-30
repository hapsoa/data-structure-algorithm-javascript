function calcAvgHeight(data) {
  // Calculate average height from received data. If no data, return null.
  let sum = 0;
  const keys = Object.keys(data);
  for (let i = 0; i < keys.length; i++) {
    sum += data[keys[i]].height;
  }

  let average = null;
  if (keys.length !== 0) {
    average = sum / keys.length;
  }

  return average;
}

var avgHeight = calcAvgHeight({
  Matt: { height: 174, weight: 69 },
  Jason: { height: 190, weight: 103 },
});
console.log(avgHeight);
