import React, { useState } from 'react';

export const doMutationCount = (Fn, value) => Fn(value);

function App (){
  const [ counter, setCounter ] = useState(0);

  const onIncrement = () => doMutationCount(setCounter, counter + 1);
  const onDecrement = () => doMutationCount(setCounter, counter - 1);

  return (
    <div>
      <h1>My Counter</h1>
      <Counter counter={counter} />

      <button type='button' onClick={onIncrement}>
        Increment
      </button>

      <button type='button' onClick={onDecrement}>
        Decrement
      </button>
    </div>
  );
}

export const Counter = ({ counter }) => <p>{counter}</p>;

export default App;
