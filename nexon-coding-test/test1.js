// const prefixes = ["++A*BCD"]; // => ABC*+D+ 123*+4+     A + B * C + D.
const prefixes = ["*34", "+1*23", "+12", "++1*234"];
// 문제 예제 "+1**23/14"
// A + B * C - D => +A-*BCD => ABC*D-+

function prefixToPostfix(prefixes) {
  const results = [];
  for (let i = 0; i < prefixes.length; i++) {
    const prefix = prefixes[i];
    const result = prefixToPostfixForOne(prefix);
    results.push(result);
  }

  return results;
}

function prefixToPostfixForOne(prefix) {
  // 숫자 2개 붙어있는 것을 찾는다.
  const pattern = /[0-9][0-9]+/;
  const patternResult = pattern.exec(prefix);
  const standardFirstIndex = patternResult.index;

  // 기준 숫자들과 첫 연산자를 포함해서 뒷부분을 시작 구성한다.. ex) 34* or 23*4
  let postfix = patternResult[0];
  postfix =
    postfix.slice(0, 2) + prefix[standardFirstIndex - 1] + postfix.slice(2);

  let hasKeptNumber = false;
  // 시작점 기준으로 연산자만 뒤로 넘긴다.
  for (let i = standardFirstIndex - 2; i >= 0; i--) {
    const character = prefix[i];
    const anyNumber = parseInt(character);
    if (isNaN(anyNumber)) {
      // 연산자면
      if (hasKeptNumber) {
        // 숫자가 있으면 23의 첫 연산자 바로 그다음에다 배치한다.
        const operatorPattern = /[/*+-]+/;
        const operatorPatternResult = operatorPattern.exec(postfix);
        // console.log("operatorPatternResult", operatorPatternResult);
        firstOperatorIndex = operatorPatternResult.index;

        postfix =
          postfix.slice(0, firstOperatorIndex + 1) +
          character +
          postfix.slice(firstOperatorIndex + 1);

        hasKeptNumber = false;
      } else {
        // 나머지는 제일 끝에다 배치한다.
        postfix += character;
      }
    } else {
      // 숫자면
      postfix = character + postfix;
      hasKeptNumber = true;
    }
  }

  // 23의 바로 앞 operator를 23의 바로 뒤로 넘긴다.
  // 또 그다음 왼쪽에 있는 연산자를 찾는다.
  // 알파벳이 있으면 23연산자 바로 그다음에다 배치한다.
  // 나머지는 제일 끝에다 배치한다.

  return postfix;
}

const result = prefixToPostfix(prefixes);
console.log("result", result);
