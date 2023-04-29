import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch()
    const {count} = useSelector(state => state)

    const plus = () => dispatch({type: 'PLUS'})
    const minus = () => dispatch({type: 'MINUS'})

  return (
    <div className="App">
      <h2>{count}</h2>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
    </div>
  );
}

export default App;
