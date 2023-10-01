import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);

    const handleCounterInc =()=>{
        setCount( count + 1)
    }
    const handleCounterDec =()=>{
        
        

       if (count>0) {
           
            setCount( count -1);
       }else{
        setCount(0)
       }
       
    }
    const handleCounterRec =()=>{
       
        setCount(0)
    }
   

  return (
    <div>
      <h1>Counter App</h1>
      <h3>Count : {count} </h3>
      <button onClick={handleCounterInc}>INCREMENT</button>
      <button onClick={handleCounterDec}>DECREMENT</button>
      <button onClick={handleCounterRec}>RSET</button>
      
    </div>
  )
}

export default Counter
