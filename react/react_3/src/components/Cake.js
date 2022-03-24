import React from 'react'
import './Cake.css'

function Cake(props) {
    console.log(props)
  return (
    <>
    
    <div class="card">
    <img src={props.img} alt="Image1"/>
      <div class="container">
        <h4><b>{props.name}</b></h4> 
        <p>{props.price}</p>
      </div>
    </div>
    </>
  );
}

export default Cake;
