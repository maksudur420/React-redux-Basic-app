import  {createStore } from "redux";
import counterReducer from "./CreateReducer";

const store = createStore(counterReducer);

export default store;