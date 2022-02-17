function decrease() {
    let decrease = document.getElementById('image');
    let currWidth = decrease.clientWidth;
    console.log(currWidth);
    if(currWidth === 50){
        alert('zoomOut limit reached')
    }else{
        decrease.style.width = (currWidth - 5) +"px";
    }
}
function increase() {
    let increase = document.getElementById('image')
    let currWidth = increase.clientWidth;
    console.log(currWidth);
    if(currWidth === 500){
        alert('zoomIn limit reached')
    }else{
        increase.style.width = (currWidth + 5) + "px";
    }
}