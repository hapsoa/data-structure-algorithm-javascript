/* eslint-disable no-plusplus */
// const answers = [1, 2, 3, 4, 5];

class Student {
  constructor(answerPattern) {
    this.answerPattern = answerPattern;
    this.numOfCorrectAnswer = 0;
  }

  checkAnswer(answer, index) {
    if (answer === this.answerPattern[index % this.answerPattern.length]) {
      this.numOfCorrectAnswer++;
    }
  }
}

// console.log(firstStudent.numOfCorrectAnswer);
// console.log(secondStudent.numOfCorrectAnswer);
// console.log(thirdStudent.numOfCorrectAnswer);

function solution(answers) {
  const firstMemberStyle = [1, 2, 3, 4, 5];
  const secondMemberStyle = [2, 1, 2, 3, 2, 4, 2, 5];
  const thirdMemberStyle = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const firstStudent = new Student(firstMemberStyle);
  const secondStudent = new Student(secondMemberStyle);
  const thirdStudent = new Student(thirdMemberStyle);

  for (let i = 0; i < answers.length; i++) {
    firstStudent.checkAnswer(answers[i], i);
    secondStudent.checkAnswer(answers[i], i);
    thirdStudent.checkAnswer(answers[i], i);
  }

  const bestStudent = [];
  // 최대값을 찾아 낸 다음에, 그 최대값에 해당하는 녀석을 넣는다.
  const maxCorrectAnswers = Math.max(
    firstStudent.numOfCorrectAnswer,
    secondStudent.numOfCorrectAnswer,
    thirdStudent.numOfCorrectAnswer,
  );
  if (firstStudent.numOfCorrectAnswer === maxCorrectAnswers) {
    bestStudent.push(1);
  }
  if (secondStudent.numOfCorrectAnswer === maxCorrectAnswers) {
    bestStudent.push(2);
  }
  if (thirdStudent.numOfCorrectAnswer === maxCorrectAnswers) {
    bestStudent.push(3);
  }

  return bestStudent;
}

// console.log(solution([1, 2, 3, 4, 5]));
// console.log(solution([1, 3, 2, 4, 2]));
