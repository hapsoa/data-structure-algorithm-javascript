/**
 * keypad에서 s의 입력 시간을 반환한다.
 * @param {string} s 번호 입력값
 * @param {string} keypad 키패드 9개 순서
 */
function entryTime(s, keypad) {
  // keypad 각 숫자들이 인접한 숫자들과 인접하지 않은 숫자를 파악한다.
  // keypad가 배열이라면, 인접한 배열의 index가 누구인지 파악할 수 있다.

  const keypadHash = {
    [keypad[0]]: 0,
    [keypad[1]]: 1,
    [keypad[2]]: 2,
    [keypad[3]]: 3,
    [keypad[4]]: 4,
    [keypad[5]]: 5,
    [keypad[6]]: 6,
    [keypad[7]]: 7,
    [keypad[8]]: 8
  };

  let timeResult = 0;

  // 각 입력번호마다 시간을 구한다.
  for (let i = 1; i < s.length; i++) {
    const currentInput = s[i];
    const pastInput = s[i - 1];
    if (keypadHash[currentInput] === 0) {
      if (
        keypadHash[pastInput] === 1 ||
        keypadHash[pastInput] === 3 ||
        keypadHash[pastInput] === 4
      ) {
        timeResult += 1;
      } else {
        timeResult += 2;
      }
    }

    if (keypadHash[currentInput] === 1) {
      if (
        keypadHash[pastInput] === 0 ||
        keypadHash[pastInput] === 2 ||
        keypadHash[pastInput] === 3 ||
        keypadHash[pastInput] === 4 ||
        keypadHash[pastInput] === 5
      ) {
        timeResult += 1;
      } else {
        timeResult += 2;
      }
    }

    if (keypadHash[currentInput] === 2) {
      if (
        keypadHash[pastInput] === 1 ||
        keypadHash[pastInput] === 4 ||
        keypadHash[pastInput] === 5
      ) {
        timeResult += 1;
      } else {
        timeResult += 2;
      }
    }

    if (keypadHash[currentInput] === 3) {
      if (
        keypadHash[pastInput] === 0 ||
        keypadHash[pastInput] === 1 ||
        keypadHash[pastInput] === 4 ||
        keypadHash[pastInput] === 6 ||
        keypadHash[pastInput] === 7
      ) {
        timeResult += 1;
      } else {
        timeResult += 2;
      }
    }

    if (keypadHash[currentInput] === 4) {
      timeResult += 1;
    }

    if (keypadHash[currentInput] === 5) {
      if (
        keypadHash[pastInput] === 1 ||
        keypadHash[pastInput] === 2 ||
        keypadHash[pastInput] === 4 ||
        keypadHash[pastInput] === 7 ||
        keypadHash[pastInput] === 8
      ) {
        timeResult += 1;
      } else {
        timeResult += 2;
      }
    }

    if (keypadHash[currentInput] === 6) {
      if (
        keypadHash[pastInput] === 3 ||
        keypadHash[pastInput] === 4 ||
        keypadHash[pastInput] === 7
      ) {
        timeResult += 1;
      } else {
        timeResult += 2;
      }
    }

    if (keypadHash[currentInput] === 7) {
      if (
        keypadHash[pastInput] === 3 ||
        keypadHash[pastInput] === 4 ||
        keypadHash[pastInput] === 5 ||
        keypadHash[pastInput] === 6 ||
        keypadHash[pastInput] === 8
      ) {
        timeResult += 1;
      } else {
        timeResult += 2;
      }
    }

    if (keypadHash[currentInput] === 8) {
      if (
        keypadHash[pastInput] === 4 ||
        keypadHash[pastInput] === 5 ||
        keypadHash[pastInput] === 7
      ) {
        timeResult += 1;
      } else {
        timeResult += 2;
      }
    }
  }

  return timeResult;
}

const result = entryTime("423692", "923857614");
console.log("result", result);
