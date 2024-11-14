
let studentCount = parseInt(prompt("Студенттер санын енгізіңіз: "));
let grades = [];
for (let i = 1; i <= studentCount; i++) {
    let grade = parseFloat(prompt(i + "-студенттің бағасын енгізіңіз: "));
    grades.push(grade);
}
let total = grades.reduce((sum, grade) => sum + grade, 0);
alert("Студенттердің бағаларының орташа мәні: " + (2));