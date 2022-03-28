import React, {useState} from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const formatCount = () => {
    return counter === 0 ? 'empty' : counter;

  }

  const getBadgeClasses = () => {
    return counter === 0 ? 'badge m-2 btn-warning' : 'badge m-2 btn-primary';
  }

  const handleIncrement = () => {
    setCounter((prevState) => prevState + 1);
  }

  const handleDecrement = () => {
    setCounter((prevState) => prevState - 1);
  }

  return (
    <React.Fragment>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button className='btn btn-primary btn-sm m-2' onClick={handleIncrement}>+</button>
      <button className='btn btn-primary btn-sm m-2' onClick={handleDecrement}>-</button>
    </React.Fragment>
  );
}

export default Counter;