import {useState} from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(prevCount => prevCount + 1);
  };
  const decreaseCount = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decreaseCount}>-</button>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}

export default Counter;