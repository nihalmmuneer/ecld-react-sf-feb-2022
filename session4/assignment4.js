//Assignment-1
// Given an array of strings count all the vowel characters

let count = 0;
str = ['edstem','react','javascript','html','css'];
for(let i = 0; i<str.length; i++){
    for( let j=0; j<str[i].length; j++){
        if(str[i][j] === 'a' || str[i][j] === 'e' || str[i][j] === 'i' || str[i][j] === 'o' || str[i][j] === 'u'){
            count = count + 1;
        }

    }
}
console.log(count);

//Assignment-2
// Given a string print "YES" if it is a palindrome "NO" if it is not one

let flag = 1;

let string = 'madam';
for(let k=0, l = string.length-1; k < string.length; k++,l-- ){
    if(string[k] === string[l]){
        continue;
    }
    else {
        flag = 0;
    }
}
console.log('\n');
if(flag === 1){
    console.log("The string is palindrome");
}else{
    console.log("The string is not a palindrome");
}

//Assignment-3
// Given an array of marks, find out the Average

let marks = [95,86,66,94,58];
length = marks.length;
let total = 0;
for(let m = 0 ; m < marks.length; m++){
    total = total + marks[m];
}
console.log('\n');
let average = total / length;
console.log("Average = ",average);

//Assignment-4
//Given an array of strings, remove all the odd length strings from it

let newarr =[]
let arr = ['edstem','react','html','foodie','coder'];
console.log('\n');
for(let s = 0 ; s < arr.length; s++){
    if(arr[s].length % 2 !== 1){
        newarr.push(arr[s])
        
    }
} 
console.log(newarr);
    

//Assignment-5
//Given an array of numbers, change the multiples of 3 to ‘multiple’

let numbers = [5,9,8,12,22,18];
for(let n = 0; n<numbers.length; n++){
    if(numbers[n] % 3 === 0){
        numbers[n] = 'multiple';
    }
}
console.log('\n');
console.log(numbers);

//Assignment-6
//Given an empty array fill that array with first 10 natural numbers

let sample = [];
for(let d = 1; d <=10; d++){
    sample.push(d);
}
console.log('\n');
console.log(sample);

//Assignment-7
//Given a string split it into an array of words

let str2 = [""];
y = 0;
let str1 = "Edstem Technologies located at kerala";

for(let x = 0; x < str1.length ; x++){
    if(str1[x] === " "){
        y++;
        str2[y]=[""];
    }
    else{
        str2[y] += str1[x];
    }
}
console.log('\n');
console.log(str2);

//Assignment-8
//Given a string print all the Characters in the odd position (Start counting with 0)

let str3 = 'Edstem';
console.log('\n');
for( let a = 0 ; a < str3.length; a++){
    if(a % 2 == 1){
        console.log(str3[a]);
    }
}

//Assignment-9
//Given a sentence print the count of words (Separated by a space character)

let str5 = "Coding is Easy";
let count1 = 0;
console.log('\n');
if(str5 === ""){
    console.log("Number of words are:",count1);
}else {
    count1++;
    for( let c = 0; c < str5.length; c++){
        if(str5[c] === " "){
            count1++;
        }
    }
    console.log("Number of words in a string are:",count1);
}


//Assignment-10
//Given an Array of names find out if edstem is there or not, if the given string is there print true or else print false

console.log('\n');
let flag2 = 0;
let arr3 = ['react','html','edstem'];
for(let f = 0; f< arr3.length; f++){
    if(arr3[f] === 'edstem'){
        flag2 = 1;
        break;
    }
}
if(flag2 === 1){
    console.log("True");

}else{
    console.log("False");
}
