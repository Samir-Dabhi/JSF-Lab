import React, { useState } from 'react';

const Counter = () => {
    
    const [count, setCount] = useState(0);
    function incrementCounter(){
        setCount(count+1)
        console.log(count);
    }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=>{
        setCount(count+1)
        console.log(count);
      }}>
        Click me
      </button>
    </div>
  );
};

export default Counter;
