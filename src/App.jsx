import React, { useState } from 'react'
import Home from './Home'
import UsingProps from './UsingProps'
import { Link, BrowserRouter } from 'react-router-dom'



const App = () => {
  const [inputValue , setinputValue ] = useState(0)

  const increment = () =>{
    setinputValue(inputValue + 1);
  }

  const decrement = () =>{
    setinputValue(inputValue - 1);
  }

  return (
    <BrowserRouter>
    <div style={{backgroundColor:"red", color:"white" , fontSize:"100px",padding:"20px"}}>
      <Home/> 
      <Link to="/">home</Link>
      <Link to="/contacts">contacts</Link>

      
      <input style={{padding:"20px",width:"500px"}} type="number"  value={inputValue}/> 
      <button onClick={increment} style={{padding:"20px", marginLeft:"2px"}} >+</button>
      <button  onClick={decrement} style={{padding:"20px" , marginLeft:"4px"}}>-</button>
      
      <UsingProps name={"RadheShyam"}/>
       </div>
       </BrowserRouter>
  )
}

export default App