/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
/* eslint-disable quotes */
/* eslint-disable no-plusplus */

class Student {
  constructor(memberNum, status) {
    this.memberNum = memberNum;
    this.status = status; // normal, lost, reserve
  }
}

class Students {
  constructor(n, lost, reserve) {
    this.n = n;
    this.lostStudents = lost;
    this.reserveStudents = reserve;

    this.students = [];

    for (let i = 0; i < n; i++) {
      this.students.push(new Student(i + 1, "normal"));
    }
    this.lostStudents.forEach(lostStudent => {
      this.students[lostStudent - 1].status = "lost";
    });
    const deletingReserves = [];
    this.reserveStudents.forEach(reserveStudent => {
      if (this.students[reserveStudent - 1].status === "normal") {
        this.students[reserveStudent - 1].status = "reserve";
      } else if (this.students[reserveStudent - 1].status === "lost") {
        this.students[reserveStudent - 1].status = "normal";
        deletingReserves.push(reserveStudent);
      } else {
        throw new Error("constructor의 reserveStudents에서 오류남");
      }
    });
    this.reserveStudents = this.reserveStudents.filter(reserveStudent => {
      return deletingReserves.indexOf(reserveStudent) === -1;
    });
  }

  getAvailableStudents() {
    for (let i = 0; i < this.reserveStudents.length; i++) {
      this.giveGymClothes(this.reserveStudents[i]);
    }

    let lostNum = 0;
    this.students.forEach((student) => {
      if (student.status === 'lost') {
        lostNum++;
      }
    });
    // return 체육시간 가능한 학생 수;
    return this.n - lostNum;
  }

  giveGymClothes(reserveStudent) {
    // reserve의 왼쪽이 존재하지 않을때, 오른쪽이 존재하지 않을 때, 둘 다 존재할 때
    if (
      this.students[reserveStudent - 2] !== undefined
      && this.students[reserveStudent] !== undefined
    ) {
      // reserve의 왼쪽 오른쪽이 lost인지 확인하고,
      if (this.students[reserveStudent - 2].status === 'lost'
        && this.students[reserveStudent].status !== 'lost') {
        this.students[reserveStudent - 2].status = 'normal';
        this.students[reserveStudent - 1] = 'normal';
      } else if (this.students[reserveStudent - 2].status !== 'lost'
        && this.students[reserveStudent].status === 'lost') {
        this.students[reserveStudent].status = 'normal';
        this.students[reserveStudent - 1] = 'normal';
      } else if (this.students[reserveStudent - 2].status === 'lost'
      && this.students[reserveStudent].status === 'lost') {
        this.students[reserveStudent - 2].status = 'normal';
      }
    } else if (this.students[reserveStudent - 2] === undefined) {
      if (this.students[reserveStudent].status === "lost") {
        this.students[reserveStudent].status = "normal";
        this.students[reserveStudent - 1].status = "normal";
      }
    } else if (this.students[reserveStudent] === undefined) {
      if (this.students[reserveStudent - 2].status === "lost") {
        this.students[reserveStudent - 2].status = "normal";
        this.students[reserveStudent - 1].status = "normal";
      }
    }
  }
}

function solution(n, lost, reserve) {
  const students = new Students(n, lost, reserve);
  return students.getAvailableStudents();
}

// console.log(solution(5, [2, 4], [1, 3, 5]));
// console.log(solution(11, [2, 3, 4], [1, 4, 6, 10]));
