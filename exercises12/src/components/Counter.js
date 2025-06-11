// src/components/Counter.js
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // khởi tạo state count = 0

  const handleClick = () => {
    setCount(count + 1); // tăng count lên 1 mỗi lần click
  };

  return (
    <div>
      <h2>Counter</h2>  
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Counter;
