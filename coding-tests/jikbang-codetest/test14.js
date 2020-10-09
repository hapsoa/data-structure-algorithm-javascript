function johnMary(str) {
  // Your code goes here

  // str안에 John 과 Mary가 있어야 한다.

  let sumOfJohn = 0;
  let lastIndexOfJohn = -1;

  while (str.indexOf(/John/gi, lastIndexOfJohn + 1) !== -1) {
    sumOfJohn++;
    lastIndexOfJohn = str.indexOf(/John/gi, lastIndexOfJohn + 1);
    console.log('lastIndexOfJohn', lastIndexOfJohn);
  }

  // return true;

  let sumOfMary = 0;
  let lastIndexOfMary = -1;

  while (str.indexOf(/Mary/gi, lastIndexOfMary + 1) !== -1) {
    sumOfMary++;
    lastIndexOfMary = str.indexOf(/Mary/gi, lastIndexOfMary + 1);
    console.log('lastIndexOfMary', lastIndexOfMary);
  }

  return sumOfJohn === sumOfMary;
}

console.log(johnMary('John&MaryMary'));
