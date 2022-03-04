let timer = 0;
let timeInterval;
let ms = document.getElementById('milliseconds');
let sec = document.getElementById('mainseconds');
let min = document.getElementById('mainminutes');

function Start(){
    Stop();
    timeInterval = setInterval(function() {
        timer+=1/60;
        msVal = Math.floor((timer - Math.floor(timer)) * 100);
        // console.log(msVal);
        secVal = Math.floor(timer) - Math.floor(timer/60) * 60;
        console.log(secVal);
        minVal = Math.floor(timer/60);
        // console.log(minVal);
        ms.textContent = msVal < 10 ? "0" + msVal.toString() : msVal;
        sec.textContent = secVal < 10 ? "0" + secVal.toString() : secVal;
        min.textContent = minVal < 10 ? "0" + minVal.toString() : minVal;

    },1000/60)

}

function Stop(){
    clearInterval(timeInterval);
}
function Reset(){
    timer = 0;
    ms.textContent = "00";
    sec.textContent = "00";
    min.textContent = "00";
}
