import React, { useState } from 'react';

export default function Counter({ initValue }) {
  const [count, setCount] = useState(initValue);
  return (
    <div>
      <h1>Count: {count}</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => setCount(count - 1)}>Substract</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(-count)}>Toggle</button>
      </div>
    </div>
  );
}
