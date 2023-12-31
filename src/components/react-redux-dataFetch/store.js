import { createStore, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import rootReducer from './Reducer'


const store = createStore(rootReducer,applyMiddleware(ThunkMiddleware))

export default store;