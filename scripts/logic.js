function generateReports(students) {
  return students.map(student => {
    const sum =student.scores.reduce((acc,score)=> acc+score,0);
    const average=Math.round(sum/student.scores.length);

    let grade;
    if (average >= 90) grade = "A";
    else if (average >= 80) grade = "B";
    else if (average >= 70) grade = "C";
    else if (average >= 60) grade = "D";
    else grade = "F";

  })
}