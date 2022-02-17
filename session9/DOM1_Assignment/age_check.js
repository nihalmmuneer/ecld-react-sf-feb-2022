
function checkAge() {
    let age = document.getElementById('age').value
    console.log(age)
    if(!age){
        alert('Enter the Age');
    }
    else if(age > 18){
        document.getElementById('enter').innerHTML = "You can drive in India!"
    }else if(age < 18){
        document.getElementById('enter').innerHTML = "You can't drive in India"
    }else {
        document.getElementById('enter').innerHTML = "You are just old enough to drive in India!"
    }
}

