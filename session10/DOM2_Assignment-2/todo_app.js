// Create a new list item when clicking on the "Add" button
function add() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  console.log(t);
  li.appendChild(t); 
  console.log(li)
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myList").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let check = document.createElement("INPUT");
  check.type = 'checkbox';
  check.className = "checkBox";
 
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  li.append(check)
 
  let close = document.getElementsByClassName("close");
  for ( let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      
      let div = this.parentElement;
      console.log(div);
      div.style.display = "none";

    }
  }

  // mark and unmark the checkbox 
  let active = document.getElementsByClassName("checkBox");
  console.log(active);
  
  let i;
      for(i = 0; i < active.length ; i++)
      active[i].addEventListener('click',function(){
      if(this.checked)
      {
        //on checked the text inside the parent element have a line-through 
        console.log('checked');
        let marked = this.parentElement;
        console.log(marked)
        marked.style.textDecoration = 'line-through';
      }else {
        // on unchecked the text inside the parent element have no textDecoration 
         console.log('unchecked');
        let unmarked =this.parentElement;
        unmarked.style.textDecoration = 'none';
      }
     
      })
   
    
    }
  
   

     
