import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, multiply, divide, clear, login } from './actions';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <h1>Hello Redux !</h1>
      <h3>カウント: {counter}</h3>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>
      <button onClick={() => dispatch(multiply(4))}>×</button>
      <button onClick={() => dispatch(divide(4))}>÷</button><br />
      <button onClick={() => dispatch(clear())}>reset!!</button>
      <button onClick={() => dispatch(login())}>login or logout</button>


      {isLogin ? <h3>ログインしました !</h3> : <h3>ログインしてください</h3>}
    </div>
  );
}

export default App;
