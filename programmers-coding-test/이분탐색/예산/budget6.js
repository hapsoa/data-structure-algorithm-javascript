function solution(budgets, M) {
  var answer = 0;
  var average = M / budgets.length;
  var availableBud = M;
  var remainCities = [];
  var maxBudget;
  for (let i = 0; i < budgets.length; i++) {
      if (budgets[i] <= average) {
          availableBud -= budgets[i];
      }
      else {
          remainCities.push(budgets[i]);
      }
  }
  if (remainCities.length === 0) {
      maxBudget = Math.max.apply(null, budgets);
      answer = maxBudget;
      return answer;
  }
  else {
      maxBudget = Math.floor(availableBud / remainCities.length);
      var isContinue = false;
      for (let i = 0; i < remainCities.length; i++) {
          if (maxBudget >= remainCities[i]) {
              isContinue = true;
              break;
          }
      }
      if (isContinue) {
          return solution(remainCities, availableBud);
      }
      else {
          answer = maxBudget;
          return answer;
      }
  }
}