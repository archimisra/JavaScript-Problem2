/*Write a code which can give grades to students according to their scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F*/
let grade = Number(prompt("Enter your marks:"));

if (grade >= 80 && grade <= 100) {
  console.log("A");
} else if (grade >= 70) {
  console.log("B");
} else if (grade >= 60) {
  console.log("C");
} else if (grade >= 50) {
  console.log("D");
} else {
  console.log("F");
}