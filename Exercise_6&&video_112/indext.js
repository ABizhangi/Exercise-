// bmi = weight (kg) / (height (m) ** 2 )

// < 18.5 underweight 
// 18.5 between 24.9 normal 
// > 25 overweight 
let weight, height;
let bmi;
//initialization the variables
weight = 90;
height = 1.8;
bmi = 0;

bmi = weight / height ** 2;

console.log(`body bmi is :  ${bmi} `);

// nested conditional operator

// condition1 ? value1
//     : condition2 ? value2
//     : condition3 ? value3
//     : value3 ;
let result;
result =
  bmi < 18.5
    ? "underweight"
    : bmi > 18.5 && bmi < 24.9
    ? "normal"
    : bmi > 25
    ? "you are overweight "
    : "hag on and try again ";

console.log(result);
