//Assignment-1
//Given an array of string join them with a comma ,

let string1 = "";
let string = ["HTML","CSS","JAVA","JS"];
console.log('\n');
for(let i = 0; i < string.length - 1;i++){
    string1 += string[i]+",";
}
string1 += string[string.length - 1];
console.log(string1);

//Assignment-2
//Given an array or string print the total no of characters

let count = 0;
let string2 = ["HTML","CSS","JAVA","JS","ANDROID"];
for(j = 0; j < string2.length; j++){
    for(k = 0; k < string2[j].length; k++){
        count++;
}
}

console.log('\n');
console.log("Total number of characters are:",count);

//Assignment-3
//Given an array or string print the total no of characters

let scores = [100,20,31,150,39,72];
let highest = lowest = scores[0];
for(let s = 0; s < scores.length; s++){
    if(scores[s] > highest){
        highest = scores[s];
    }
    else if(scores[s] < lowest){
        lowest = scores[s];
    }
}

console.log('\n');
console.log("Highest Score:",highest);
console.log("Lowest:",lowest);

//Assignment-4
//Given a matrix, print the rows and columns

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
let rows = matrix.length;
let cols = 0
console.log('\n');
console.log("Total number of rows:",rows);
if(rows > 0){
     cols = matrix[0].length;
}
console.log("Number of columns:",cols);

//Assignment-5
//Given a matrix print the first diagonal

console.log('\n');
let matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
for(let m = 0; m < matrix1.length; m++){
    for( let n = 0; n < matrix[m].length; n++){
        if(m == n){
            console.log(matrix[m][n]);
        }
    }
}

//Assignment-6
//Given an array of string generate an array whose first or last character is a

let array1 = []
console.log('\n')
let array = ["assignment","problem","media","upload"];
for(let a = 0; a < array.length; a++ ){
        if((array[a][0]) !== 'a' && (array[a][array[a].length - 1] !== 'a')){
            continue;
        
        }
        else{
            array1.push(array[a]);
        }
    }
console.log(array1);

//Assignment-7
//Given an array of strings print the snake case of the strings

console.log('\n');
let str3 = ""
let str2 = ["edstem","tech"];
for(let h = 0 ; h < str2.length-1; h++){
    str3 += str2[h]+'_'; 
}  
str3 += str2[str2.length-1];
console.log(str3);

//Assignment-8
//Given an 2d Array print the difference of first and second diagonals sum

let matrix4 = [[1,2,3],[4,5,6],[7,8,9]];
let sum1 = 0;
let sum2 = 0;
let diff = sum1 - sum2;

console.log('\n');
for(let d = 0; d < matrix4.length; d++){
    sum1 += matrix4[d][d];
    for(let e = 0; e < matrix4[d].length; e++){
        if(d + e == matrix4.length-1){
            sum2 += matrix4[d][e];
        }
    }
}
console.log(sum1);
console.log(sum2);
console.log(diff);

//Assignmen-9
//Given an array of numbers print the product of all numbers

console.log('\n');
let multiplication = 1;
let multi = [2,3,4];
for( let x = 0; x < multi.length; x++){
    multiplication *= multi[x];
}
console.log(multiplication);

//Assignment-10
//Given an 2d array print the mid column

console.log('\n');
let array3 = [[1,2,3],[4,5,6],[7,8,9]];
for(let y=0 ; y < array3.length; y++){
    console.log(array3[y][1]);
}