//Assignment-1
//Given an array of numbers print the square of those numbers

let arr = [2,3,5,7,9]

function square(num){
    return num * num
}

arr.forEach(function(el) {
    console.log(square(el));
})

//Assignment-2
//Given an array of numbers generate an array containing the double value of the numbers

console.log('\n');
 let arr1 = [1,2]
 let  arr2 = arr1.map(function(el) {
     return el * 2
 })
 console.log(arr2);

 //Assignment-3
 //Given an array of numbers extract the numbers divisible by 3

 console.log('\n');
 let arr3 = [1,2,3,5,6];
 let arr4 = arr3.filter(function(el) {
     return el % 3 == 0
 })
 console.log(arr4);

 //Assignment-4
 //Given an array of numbers print the product of all numbers

 console.log('\n');
 let arr5 = [2,3,4]
 let prod = arr5.reduce(function(ac,el) {
     return ac * el
 })
 console.log(prod);

 //Assignment-5
 //Given an array of strings print the length of each string

console.log('\n');
let arr6 = ['nihal','edstem','tcs']
let len = arr6.map(function(el){
    return el.length
})
console.log(len);


//Assignment-6
//Given an array of string generate an array with their first characters

console.log('\n');
let arr7 = ['Edstem','Tech']
let arr8 = arr7.map(function(el){
    return el[0];
})
console.log(arr8);

//Assignment-7
//Given an array of string generate an array whose first or last character is a

console.log('\n');
let arr9 = ["assignment", "problem", "media", "upload"]
let arr10 = arr9.filter(function(el){
    return el[0]==='a' || el[el.length - 1] ==='a'
})
console.log(arr10);

//Assignment-8
//Given an array of strings print the snake case of the strings 
console.log('\n');
let arr11 = ["edtem","tech"];
let arr12 = arr11.reduce(function(ac,el){
    return ac+"_"+el
})
console.log(arr12);

//Assignment-9
// Create a user object with name, age, gender, skills as properties and add the below methods to it
    //i.addSkill method => user.addSkill(‘react’) => react should be added to user.skills property which is an array of strings
    // ii. getSkills method => user.getSkills() => It should return all the skills of the user

console.log('\n');
let user = {
    name:'nihal',
    age:23,
    gender:'M',
    skills:[],
    addSkill:function(skill){
        this.skills.push(skill)
    },
    getSkills:function(){
        console.log(this.skills);
    }
}
user.addSkill('react');
user.getSkills();


