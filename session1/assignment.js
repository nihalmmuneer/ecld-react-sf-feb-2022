//ASSIGNMENT 1
//Print your name, age, Marital Status by storing them in different variables
let fullName = "nihal";
let age = 23;
let martialStatus = "single";

console.log('Name:',fullName);
console.log('Age:',age);
console.log('Martial Status:',martialStatus);

//ASSIGNMENT 2
// Define 3 variables to store your gender, height (in inches ), non-veg (food preference)
// Print all the three variable types (one per line in the given order)

let gender = "male";
let height = 65;
let non_veg = "biriyani";

console.log('\n')
console.log('Type of Gender:',typeof(gender));
console.log('Type of Height:',typeof(height));
console.log('Type of Non-Veg:',typeof(non_veg));

//ASSIGNMENT 3
// Given the year of birth of a person, calculate his / her age(You can store the current year in a variable)

let yearOfBirth = 1998;
let currentYear = 2022;
let currentAge = currentYear - yearOfBirth;
console.log('\n');
console.log('Current Age:',currentAge);

//ASSIGNMENT 4
//Given the 3 subjects marks of a particular student calculate the total marks obtained

let sub1 = 90;
let sub2 = 95;
let sub3 = 98;
let total = sub1 + sub2 + sub3;

console.log('\n');
console.log('Total marks scored:',total);


//ASSIGNMENT 5
//Given the sides of a rectangle print the perimeter and area

let length = 25;
let breadth = 15;
let perimeter = 2 *(length + breadth);
let area = length * breadth;

console.log('\n');
console.log("Perimeter of a rectangle:",perimeter);
console.log("Area of a rectangle:",area);


//ASSIGNMENT 6
// Given a number of total months find the number of months remaining after converting the total months to years

let totalMonths = 40;
let remainingMonths = totalMonths % 12;

console.log('\n');
console.log('Remaining Months:',remainingMonths);


//ASSIGNMENT 7
// Given the Principal Amount, Interest Percentage and Time calculate the simple interest amount

let principalAmount = 4000;
let interestPercentage = 15;
let time = 3;
let simpleInterest = (principalAmount * time * interestPercentage ) / 100;

console.log('\n');
console.log('Simple Interest:',simpleInterest);

//ASSIGNMENT 8
//Given the marks of 6 students in a class calculate their average marks

let mark1 = 80;
let mark2 = 85;
let mark3 = 88;
let mark4 = 90;
let mark5 = 94;
let mark6 = 97;
let totalMarks = mark1 + mark2 + mark3 + mark4 + mark5 + mark6;
let average = totalMarks/6;

console.log('\n');
console.log("Average Mark:",average);


//ASSIGNMENT 9
//Given 3 product prices and their quantity calculate the total amount of items in the cart

let product1 = 80;
let quantityOfProduct1 = 5;
let product2 = 85;
let quantityOfProduct2 = 4;
let product3 = 70;
let quantityOfProduct3 = 3;

let totalItems = (product1 * quantityOfProduct1) + (product2 * quantityOfProduct2) + (product3 * quantityOfProduct3);

console.log('\n');
console.log("Total Amount Of Items:",totalItems);

//ASSIGNMENT 10
//Given the item prices and quantity along with tax, discount and tip calculator the total bill amount

let product1Price = 80;
let quantityForProduct1 = 5;
let discountForProduct1 = 10;
let taxForProduct1 = 15;

let product2Price = 85;
let quantityForProduct2 = 4;
let discountForProduct2 = 15;
let taxForProduct2 = 10;

let tipPercentage = 5;

let totalForProduct1 =(product1Price *quantityForProduct1) * [(100 - discountForProduct1) / 100] * [(100 + taxForProduct1) / 100];
let totalForProduct2 =(product2Price *quantityForProduct2) * [(100 - discountForProduct2) / 100] * [(100 + taxForProduct2) / 100];

let grossTotal = totalForProduct1 + totalForProduct2;
let netTotal = grossTotal * [(100 - tipPercentage) / 100];

console.log('\n');
console.log("Gross Total:",grossTotal);
console.log("Net Total:",netTotal);
