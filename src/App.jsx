import React, { useState } from 'react'
import Home from './Home'



const App = () => {
  const [inputValue , setinputValue ] = useState(0)

  const increment = () =>{
    setinputValue(inputValue + 1);
  }

  const decrement = () =>{
    setinputValue(inputValue - 1);
  }

  return (
    <div style={{backgroundColor:"red", color:"white" , fontSize:"100px",padding:"20px"}}>
      <Home/>
      
      <input style={{padding:"20px",width:"500px"}} type="number"  value={inputValue}/> 
      <button onClick={increment} style={{padding:"20px", marginLeft:"2px"}} >+</button>
      <button  onClick={decrement} style={{padding:"20px" , marginLeft:"4px"}}>-</button>
      
       </div>
  )
}

export default App