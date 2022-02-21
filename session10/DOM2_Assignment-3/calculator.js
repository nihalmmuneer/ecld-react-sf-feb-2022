function display(value){
    document.getElementById('result').value += value;

}
function equals(){
    let x = document.getElementById('result');
    x.value = eval(x.value);

}
function clr(){
    let input = document.getElementById('result');
    input.value = '';
}
function backSpace(){
    let y = document.getElementById('result');
    let deleteChar = y.value;
    deleteChar = deleteChar.slice(0,-1);
    y.value = deleteChar;

}
function square(){
    let number = document.getElementById('result');
    number.value = Math.pow(number.value,2)
}