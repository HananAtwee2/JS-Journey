function generateReports(students) {
  return students.map(student => {
      const average = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
    }