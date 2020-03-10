import React, { Fragment,useState } from 'react';

import './counter.css';

function Counter(){
  const [count,setCount] = useState(0);  // useState Hook

  const handleIncrese = ()=> {
    const newCount = count + 1;
    setCount(newCount);
  }
    
  return (
    <Fragment>
      <h4>Counter: {count} </h4>
      <button className='btn' onClick={handleIncrese}>Increse</button>
    </Fragment>
  )
}

export default Counter;
