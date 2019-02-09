import React, { useState } from 'react';

export const doIncrement = (Fn, value) => Fn(value + 1);
export const doDecrement = (Fn, value) => Fn(value - 1);

function App (){
  const [ counter, setCounter ] = useState(0);

  const onIncrement = () => doIncrement(setCounter, counter);
  const onDecrement = () => doDecrement(setCounter, counter);

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

// List from exemple testing
export const List = ({ items }) => (
  <ul className='list'>
    <li>{items.a}</li>
    <li>{items.b}</li>
  </ul>
);
export default App;
