
window.addEventListener('load',function(){
 let btn = document.getElementById('search');
    // let result = document.getElementById('result');
    btn.addEventListener('click',getUserData)
})
function getUserData(){
    let searchInput = document.getElementById('city').value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.openweathermap.org/data/2.5/weather?q='+searchInput+'&appid=b37072c2f7d63b5a7187b9b8f6c5fcdf')
    xhr.send()
    xhr.onload = function() {
        console.log(this.status);
        if(this.status !== 200){
            alert('City Not Found')
        }
        let response = JSON.parse(this.response);
        console.log(response);
        let container = document.getElementById('result');
        container.innerHTML = ''
        let h1 = document.createElement('h1')
        h1.textContent = response['weather'][0]['description']; 
        let temp = document.createElement('p');
        temp.textContent = 'Temperature : '+response['main']['temp']+'  '+' Humidity : '+response['main']['humidity']+' '+' windSpeed : '+response['wind']['speed'];
        let div = document.createElement('div');
        div.textContent = 'Geo coords : ['+response['coord']['lat']+','+response['coord']['lon']+']'
        container.append(h1,temp,div)
        console.log(container)
     }
      
        }

    
