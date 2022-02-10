//Assignment-1
//Given an array with name, age and gender convert it to object and print keys and values by looping over it using for in loop

let array = ['nihal',23,'M']
let obj={}
obj.name = array[0];
obj.age = array[1];
obj.gender = array[2];

for(let keys in obj){
    let values;
    values= obj[keys];
    console.log(keys+" - "+values);
}

//Assignment-2
//Given a string , calculate the occurrence of each and every character and print the output.

let count = 1;
let obj1 = {};
let str = 'edstem';
for( let i = 0 ; i < str.length; i++){
    if(!obj1[str[i]]){
        obj1[str[i]] = count;
    }else{
        obj1[str[i]] = count + 1;
    }
}
console.log('\n');
// console.log(obj1);
for(let s in obj1){
    console.log(s+" - "+obj1[s] );
}

//Assignment-3
//Given user's names and their phone numbers , query the given user and find the phone number .

console.log('\n');
let obj2 = [{
    name:'nihal',
    phoneNumber:7856446
},
{
        name: 'shiyas',
        phoneNumber:51654165
},
{
        name:'ajmal',
        phoneNumber:65468565
}]

for( let j = 0; j < obj2.length; j++){
    if(obj2[j].name == 'ajmal'){
        console.log(obj2[j].phoneNumber);
    }
}

//Assignment-4
//Given an array , find the unique elements

console.log('\n');
count = 1;
let obj4 = {}
let array2 = [10,20,30,10,40,-2];
for(let c = 0; c < array2.length; c++){
    if((!obj4[array2[c]]) && count < 2){
        obj4[array2[c]] = count;
    }else{
         delete obj4[array2[c]] 
    }
}
// console.log(obj4);
console.log(Object.keys(obj4));

//Assignment-5
//Given two words (small case) if they are anagrams print "TRUE" otherwise "FALSE" 

console.log('\n');
let str5 = "den";
let str6 = "end";
if(str5.length !== str6.length){
    console.log("Invalid Input")
}
 str5 = str5.split('').sort().join('');
 str6 = str6.split('').sort().join('');
if(str5 === str6){
    console.log('TRUE');

}else{
    console.log("FALSE");
}
 
//Assignment-6
//Given an employees database query the employees who are from hyderabad and having experience more than 3 years

console.log('\n');
let database = [ 
    { name: 'vicky', age: 24, married: false, address: { city: 'hyderabad', state: 'andhra', pincode: '516003' }, skills: ['react', 'html', 'nodejs'], experience: 2 }, 
    { name: 'nirmal', age: 20, married: true, address: { city: 'hyderabad', state: 'telengana', pincode: '500004' }, skills: ['css', 'figma'], experience: 4 },
    { name: 'neeraj', age: 26, married: false, address: { city: 'bengaluru', state: 'karnataka', pincode: '510006' }, skills: ['aws', 'angular', 'nodejs'], experience: 5 } 
]

for(let e = 0; e  < database.length; e++){
    if((database[e].address.city == 'hyderabad') && (database[e].experience > 3)){
        console.log(database[e].name);
    }
}






