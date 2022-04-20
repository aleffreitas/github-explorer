import { useState } from 'react';

export function Counter() {

  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter + 1);
  }

  function reset(){
    setCounter(0);
  }

  return(
    <>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}