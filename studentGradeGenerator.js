let marks =100;
let myRemarks = "well done";
let result;

if (marks < 0 || marks > 100) {
    result = 'Out of Range Entry.';
} else if (marks > 79) {
    result = 'Excellent! You scored an A.';
} else if (marks >= 60 && marks <= 79) {
    result = 'Good! You scored a B.';
} else if (marks >= 49 && marks <= 59) {
    result = 'You scored a C.';
} else if (marks >= 40 && marks <= 49) {
    result = 'You scored a D.';
} else if (marks < 40) {
    result = 'You scored an E.';
} else {
    result = 'Invalid input!';
}

console.log(result);
console.log(typeof  myRemarks);  // Output: "number"
