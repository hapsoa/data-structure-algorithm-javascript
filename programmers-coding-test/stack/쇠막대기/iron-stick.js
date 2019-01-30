function solution(arrangement) {
    const array = [];
    let count = 0;

    for (let i = 0; i < arrangement.length - 1; i++) {
        // console.log(array);
        // 시작괄호가 같은 경우 쇠막대기가 있다. 저장해둔다.
        if (arrangement[i] === '(' && arrangement[i + 1] === '(') {
            array.push(0);
        }
        // 레이저
        else if (arrangement[i] === '(' && arrangement[i + 1] === ')') {
            for (let j = 0; j < array.length; j++) {
                array[j] = array[j] + 1;
            }
        }
        // 쇠막대기 끝남
        else if (arrangement[i] === ')' && arrangement[i + 1] === ')') {
            const popValue = array.pop();
            if (typeof popValue === 'number') {
                count += popValue + 1
            }
        }
    }
    return count;
}

console.log(solution('()(((()())(())()))(())'));