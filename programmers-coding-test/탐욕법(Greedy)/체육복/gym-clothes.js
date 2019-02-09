/* eslint-disable no-plusplus */
class Students {
  constructor(n, lost, reserve) {
    this.n = n;
    this.lostStudents = lost;
    this.reserveStudents = reserve;

    this.students = [];
    for (let i = 0; i < n; i++) {
      this.students.push(new Student(i+1, normal));
    }
    lostStudents.forEach((lostStudent) => {
      this.students[lostStudent-1] 
    });
  }

  getAvailableStudents() {
    const removingReserve = []; // reserveStudents 중에서 삭제할 녀석들
    for (let i = 1; i <= this.reserveStudents.length; i++) {
      this.giveGymClothes(this.reserveStudents[i]);
    }
    this.reserveStudents.
    // return 체육시간 가능한 학생 수;
    return this.n - this.lostStudents.length;
  }

  giveGymClothes(reserveStudent, removingReserve) {

  }
}

class Student {
  constructor (memberNum, status) {
    this.memberNum = memberNum;
    this.status = status; // normal, lost, reserve
  }
}

function solution(n, lost, reserve) {
  var answer = 0;
  return answer;
}