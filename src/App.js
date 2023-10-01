
import './App.css';
import ShowTodos from './components/react-redux-dataFetch/ShowTodos';
import store from './components/react-redux-dataFetch/store';
import { Provider } from 'react-redux';

function App() {
  return (

    <Provider store ={store}>
        <div className="App">
        <ShowTodos ></ShowTodos>
      </div>
    </Provider>
      
   
    
  );
}

export default App;
