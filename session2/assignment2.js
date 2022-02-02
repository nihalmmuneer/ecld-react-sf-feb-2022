
// Assignment 1
// If the given year is a leap year print "LEAP YEAR" and if it's not a leap year print "NOT LEAP YEAR"

let year = 2022;
if((year % 4 == 0) && (year % 100 != 0)){
    console.log("It's a leap year");
}else{
    console.log("Not a leap year");
}

//Assignment 2
// In India, a person can vote if he crosses 18years of age. Give a person year of birth print "YES" if he can vote otherwise print "NO"

let currentYear = 2020;
let yearOfBirth = 2010;
let age = currentYear - yearOfBirth;
console.log('\n');
if( age > 18){
    console.log("YES the person can vote");
}else{
    console.log("NO the person can't vote");
}

//Assignment 3
// Give a single character (small or upper case) if it is a Vowel print "V" in the case of consonant print "C"

let ch = 'U';

console.log('\n');
if((ch =='a' || ch =='e' || ch =='i' || ch =='o' || ch =='u' || ch =='A' || ch =='E' || ch =='I' || ch =='O' || ch =='U')){
    console.log("V");
}else {
    console.log("C");
}


//Assignment 4
// Give a string of PIN Code (with all digits) print "VALID" or "INVALID" (a PIN code is only valid if it has 6 digits)

let pin = '685607'
let length = pin.length;

console.log('\n');
if(length == 6){
    console.log("VALID");
}
else{
    console.log("INVALID");
}

//Assignment 5
// Based on the state print the region it belongs to "EAST", "WEST", "NORTH", "SOUTH"

let WEST=['Rajasthan','Gujarat']
let EAST =['Assam','Manipur']
let North = ['Himachal Pradesh','Jammukashmir']
let South = ['Kerala','Tamilnadu']

let state = 'Manipur';
console.log('\n');
if((state == 'Rajasthan')||(state == 'Gujarat')){
    console.log(state+ " is in WEST zone");
}
else if((state == 'Assam')||(state == 'Manipur')){
    console.log(state+ " is in EAST zone");
    
}
else if((state == 'Himachal Pradesh')||(state == 'Jammukashmir')){
    console.log(state+ " is in NORTH zone");
}
else {
    console.log(state+ " is in SOUTH zone");
}

//Assignment 6
// Given a number print if it is either "EVEN" or "ODD" (Use ternary Operators)

let num = 3;
num % 2 == 0 ? console.log("EVEN"):console.log("ODD");


//Assignment 7
// Given two numbers a, b Print the below statements based on the condition
// "A > B"
// "A < B"
// "A = B" Note: Use Ternary Operators

let a = 5;
let b = 10;
a > b? console.log("A > B"): a < b? console.log("A < B"):console.log("A = B");

//Assignment 8
// Given the shirt size code "S", "M", "L", "XL" print the corresponding names "Small", "Medium", "Large", "Extra Large", "None" (For not a valid code)

let size = "XL"
if(size == "S"){
    console.log("SMALL");
}else if(size == "M"){
    console.log("MEDIUM");
}else if(size == "L"){
    console.log("LARGE");
}else if(size == "XL"){
    console.log("Extra Large");
}else{
    console.log("None")
}