// var re = /quick\s(brown).+?(jumps)/gi;
// var result = re.exec("The Quick Brown Fox Jumps Over The Lazy Dog");
// console.log("result", result.index);

// const pattern = /[0-9][0-9]+/;
// // const result = pattern.exec("*34");
// const result = pattern.exec("+1*23");
// console.log("result", result);

const operatorPattern = /[/*+-]+/;
const result = operatorPattern.exec("123-+");
console.log("result", result);
