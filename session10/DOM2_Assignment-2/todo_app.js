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

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
 
  let close = document.getElementsByClassName("close");
  for ( let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      console.log(div);
      div.style.display = "none";
    }
  }
}
