function generateReports(students) {
  return students.map(student => {
    const sum =student.scores.reduce((acc,score)=> acc+score,0);
  })
}