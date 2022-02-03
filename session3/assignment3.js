//Assignment 1
// Define a variable count Print your name using while loop the no of times the value assigned to the variable count

let count = 3;
while(count>0){
    console.log('N I H A L');
    count--;
}

//Assignment 2
// Define a variable limit Print your name using for loop the no of times the value assigned to the variable limit

let limit = 5;
console.log('\n');
for(let i = 0 ; i < limit ; i++){
    console.log('N I H A L')
}

//Assignment 3
// Using a while loop print the numbers in descending order from the given starting to ending limit. Start - 20 End - 25

let end = 25;
console.log('\n');
while(end >= 20){
    console.log(end);
    end--;
}

//Assignment 4
// Given a starting number and a decrement value, print all numbers from the starting number till zero deducting the decrement value each time. Starting - 13, Decrement - 4

console.log('\n');
for( let j = 13; j>=1 ; j-=4){
    console.log(j);
}

//Assignment 5
// Print the average of all the numbers from 1 to given limit

let sampleLimit = 5;
let sum = 0;
console.log('\n');
for( i = 0; i <= sampleLimit;i++){
    sum = sum+i;
}
let average = sum/sampleLimit;
console.log("average = ",average);

//Assignment 6
// Find out the average of the first 100 n natural numbers using for loop.

let sum1 = 0;
console.log('\n');
for(let k = 1;k <= 100; k++){
    sum1 = sum1+k;
}
let average1 = sum1/100;
console.log("Average Of First 100 natural numbers are:",average1);

//Assignment 7
// Print all the multiples of 3 till 100 using for loop

console.log('\n');
for(let m = 0 ; m <= 100 ; m++){
    if(m % 3 === 0){
        console.log(m);
    }
}

//Assignment 8
// Given a string print all the consonants which are not a,e,i,o,u using for loop.

let str = 'nihal';
console.log('\n');
for(let v = 0; v < str.length; v++){
    if((str[v] !== 'a') && (str[v] !== 'e') && (str[v] !== 'i') && (str[v] !== 'o') && (str[v] !== 'u')){
        console.log(str[v]);
    }
}

//Assignment 9
// Given a string find out the length of that string
console.log('\n');
let str1 = 'ronaldo';
let length = str1.length;
console.log("length of the string "+str1+" are "+length);

//Assignment 10
// Given a string, print the first character and last character of that string.

let str2 = 'messi';
console.log('\n');
console.log("first character:",str2[0]);
console.log("last character :",str2[str2.length - 1]);

//Assignment 11
// Given a string print the odd indexes of that string using for loop

let str3 = 'edstem';
console.log('\n');
for( let c = 1 ; c < str3.length; c+=2){
    console.log(str3[c]);
}

//Assignment 12
// Find out the sum of the first 10 natural numbers using for loop

let sum4 = 0;
console.log('\n');
for(n = 1;n <= 10;n++){
    sum4 = sum4 + n;
}
console.log("Sum =",sum4)



