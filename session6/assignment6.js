//Assignment-1
//Write a function named addNumbers which takes two numbers as input and return their sum

function addNumbers(num1,num2){
    let sum = num1+num2;
    return sum;
}

let num1 = 5;
let num2 = 10;
addNumbers(num1,num2);
console.log("Sum of "+num1+" and "+num2+" are:",addNumbers(num1,num2));

//Assignment-2
//Write a function to find the absolute difference of two numbers

function absoluteDiff(num3,num4){
    let diff = num3 - num4;
    console.log("Diff b/w "+num3+" and "+num4+" are:",Math.abs(diff));
}

console.log('\n');
let num3 = 4;
let num4 = 18;
absoluteDiff(num3,num4);


//Assignment-3
//Write a function isOdd which returns a boolean value based the number is odd or not

console.log('\n');
function isOdd(num5){
    if(num5 % 2 == 1){
        return 'The Number is Odd';
    }
        return "The Number is Even"
} 

let num5 = 10;
console.log(isOdd(num5));

//Assignment-4
//Write a function function which prints the odd numbers from 0 to a given limit(included)

console.log('\n');
function oddNumbers(limit){
    for(let i = 0; i <= limit ; i++){
        if(i % 2 == 1){
            console.log(i);
        }
    }
}
let limit = 20;
oddNumbers(limit);

//Assignment-5
//Write a function to calculate the average of an array. If there are no items in the array it should return 0

console.log('\n');
function average(arr){
    if(arr.length < 1){
        return 0
    }
    else{
        let total =0;
        let avg = 0;
        for(let j=0 ; j < arr.length; j++){
            total = total + arr[j];
        }
        return avg = total/arr.length;
    }
}

let arr = [10,15,20,25,30];
console.log(average(arr));

//Assignment-6
//Write a function to convert a character to lower case

console.log('\n');
function toLower(str){
   
    return str.toLowerCase();
}

let str = "NIHAL";
console.log(toLower(str))
