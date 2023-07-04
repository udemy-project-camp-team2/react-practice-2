import React from "react";

const Counter = ({handleIncrement, handleDecrement ,conuntStore}) => {
  return (
    <div>
      <h1>카운터</h1>
      <p>{conuntStore.count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Counter;