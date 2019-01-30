function solution(participant, completion) {
    let answer = '';

    participant.sort();
    completion.sort();

    // const participantHash = Object.assign({}, participant);
    // const completionHash = Object.assign({}, completion);

    // console.log(participantHash);
    // console.log(completionHash);

    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            answer = participant[i];
            break;
        }
    }
    
    return answer;
}

console.log(solution(['a', 'b', 'b', 'c', 'c'], ['a', 'b', 'c', 'c']));