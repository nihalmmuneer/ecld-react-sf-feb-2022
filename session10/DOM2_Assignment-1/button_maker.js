function apply(){

            let bg = document.getElementById('bg').value;
            console.log(bg);
            let color = document.getElementById('color').value;
            console.log(color);
            let fontSize = document.getElementById('size').value;
            console.log(fontSize);
            let fontWeight = document.getElementById('weight').value;
            console.log(fontWeight);
            let padding = document.getElementById('padding').value;
            console.log(padding);
            let borderRadius = document.getElementById('border').value;
            console.log(borderRadius);
            console.log(document.getElementsByClassName('form'));
            let custom = document.getElementById('custom')
            custom.style.backgroundColor = bg;
            custom.style.color = color;
            custom.style.fontSize = fontSize + "px";
            custom.style.fontWeight = fontWeight ;
            custom.style.padding = padding + "px";
            custom.style.borderRadius = borderRadius + "px"
            custom.style.visibility = "visible";
        }
           
        
     
    
 

