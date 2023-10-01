
import { INCREMENT,DECREMENT,RESET } from "./Constant"

export const handleCounterInc =()=>{
    return{
        type: INCREMENT
    }
   
}

export const handleCounterDec =()=>{
    return{
        type: DECREMENT
    }
}
export const handleCounterRec =()=>{
   
    return{
        type: RESET
    }
}