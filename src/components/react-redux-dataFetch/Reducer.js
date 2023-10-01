import { FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE } from "./Action"
// initial State Create

const initialState ={
    data :[],
    isLoading: false,
    error : null
}


// Create Reducer

const fetchReducer =(state=initialState,action)=>{
    switch (action.type) {
        case  FETCH_DATA_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case  FETCH_DATA_SUCCESS:
            return{
                ...state,
                isLoading: false,
                data: action.payload

            }
        case FETCH_DATA_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
           
    
        default:
            return state;
    }
}

export default fetchReducer;