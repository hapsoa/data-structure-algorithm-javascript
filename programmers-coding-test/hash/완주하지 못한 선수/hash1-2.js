function solution(participant, completion) {
    //const hash = {};

    // for(let val of completion) {
    //   if(!hash[val]) hash[val] = 0;
    //   hash[val]++;
    // }

    const hash = completion.reduce((obj, name) => {
        obj[name] = obj[name] ? obj[name]+1 : 1;
        return obj;
    },{})

    console.log(hash); // { a: 1, b: 1, c: 2 }

    return participant.find(t=> {
        if(hash[t])
            hash[t] = hash[t]-1;
        else 
            return true;
    });
}

console.log(solution(['a', 'b', 'b', 'c', 'c'], ['a', 'b', 'c', 'c']));