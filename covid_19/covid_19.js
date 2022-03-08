window.addEventListener('load',function(){
    let btn = document.getElementById('button')
    btn.addEventListener('click',getData)
})
function getData(){

let state = document.getElementById('state').value;
let cityName = document.getElementById('city').value
let input = document.getElementById('date').value;

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://covid-19-statistics.p.rapidapi.com/reports?region_name="+cityName+"&region_province="+state+"&date="+input);
xhr.setRequestHeader("x-rapidapi-host", "covid-19-statistics.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "6472ea80eamsh4c1cf85394758bdp134c50jsn0317ed8e38a0");
xhr.send();

xhr.onload = function(){
    let response = JSON.parse(this.response);
    console.log(response);
    let activeCases = document.getElementById('active')
    activeCases.textContent = 'Active Cases : '+response['data'][0]['active'];
    console.log(activeCases)
    let recoveredCases = document.getElementById('recovered')
    recoveredCases.textContent = 'Recovered Cases : '+response['data'][0]['recovered'];
    let deaths = document.getElementById('deaths')
    deaths.textContent = 'Deaths : '+response['data'][0]['deaths'];
    let positiveRate = document.getElementById('rate')
    positiveRate.textContent = 'Fatality_rate : '+response['data'][0]['fatality_rate'];
}
}