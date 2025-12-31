import React, { useState } from 'react'
import "../components/Counter.css"

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div className='counter-container'>
      <p id='para'> You have clicked: </p>
      <p id='count'>{count}</p>
      <p id='times'>times</p>
      <button onClick={()=>{setCount(count+1)}}>Click me!</button>
      <button onClick={()=>{setCount(0)}}  >Reset</button>
    </div>
  )
}

export default Counter
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
