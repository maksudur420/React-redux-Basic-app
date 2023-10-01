import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {handleCounterInc,handleCounterDec,handleCounterRec} from './Action'

const CounterRedux = () => {
    const count = useSelector(state=>state.count);
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Counter App with React-Redux</h1>
      <h3>Count : {count} </h3>
      <button onClick={()=>dispatch(handleCounterInc())}>INCREMENT</button>
      <button onClick={()=>dispatch(handleCounterDec())}>DECREMENT</button>
      <button onClick={()=>dispatch(handleCounterRec())}>RSET</button>
    </div>
  )
}

export default CounterRedux
