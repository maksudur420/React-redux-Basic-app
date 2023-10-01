import React,{useEffect} from 'react'
import { fetchAllTodos } from './Action'
import { useDispatch,useSelector } from 'react-redux'

const ShowTodos = () => {
    const dispatch = useDispatch();
    const {data,isLoading,error} =useSelector((state)=>state);

    console.log(data)
    useEffect(()=>{
        dispatch(fetchAllTodos())
    },[dispatch])
  return (
    <div>
        <div>
            {isLoading && (<div class="">
                <h1>Data is Loading</h1>
            </div>)}
        </div>
        <div>
            {
                error && (<h1>{error}</h1>)
            }
        </div>
        <div>
          length:  {
                data.length
            }
        </div>
      
    </div>
  )
}

export default ShowTodos
