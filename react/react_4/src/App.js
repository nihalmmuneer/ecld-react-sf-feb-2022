import React , { useState }from 'react'
import './App.css'

function App(){
  //count = count.useState(0)
  //setCount = setCount.useState(0)
  const [count,setState] = useState(0)

  function incrementHandler() {
    setState(count + 1)
  }
  function decrementHandler() {
    setState(count - 1)
  }
  return (
    <>
    <div class="body">
    <div class="title">
      Counter App
    </div>
    <div>
      <h1>{count}</h1>
    </div>
    <div >
      <button  onClick={incrementHandler}>+</button>
      <button  onClick={decrementHandler}>-</button>
    </div>
    </div>
    </>
  )
}

export default App