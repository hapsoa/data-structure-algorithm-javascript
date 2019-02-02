function solution(a, b) {
  const dayOfWeekNumber = new Date(2016, a-1, b).getDay();
  
  if (dayOfWeekNumber === 0) {
    return 'SUN';
  } else if (dayOfWeekNumber === 1) {
    return 'MON';
  } else if (dayOfWeekNumber === 2) {
    return 'TUE';
  } else if (dayOfWeekNumber === 3) {
    return 'WED';
  } else if (dayOfWeekNumber === 4) {
    return 'THU';
  } else if (dayOfWeekNumber === 5) {
    return 'FRI';
  } else if (dayOfWeekNumber === 6) {
    return 'SAT';
  }
}

console.log(solution(2, 29));

// console.log(new Date(2016, 0, 1).getDay());
