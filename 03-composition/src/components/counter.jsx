import React, {useState} from "react";

const Counter = (props) => {
  const {value} = props;
  const formatValue = () => {
    return value === 0 ? 'empty' : value;

  }

  const getBadgeClasses = () => {
    return value === 0 ? 'badge m-2 btn-warning' : 'badge m-2 btn-primary';
  }

  const handleIncrement = () => {
    // setValue((prevState) => prevState + 1);
    console.log('handleIncrement');
  }

  const handleDecrement = () => {
    // setValue((prevState) => prevState - 1);
    console.log('handleDecrement');
  }

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBadgeClasses()}>{formatValue()}</span>
      <button className='btn btn-primary btn-sm m-2' onClick={handleIncrement}>+</button>
      <button className='btn btn-primary btn-sm m-2' onClick={handleDecrement}>-</button>
      <button className="btn btn-danger btn-sm m-2" onClick={ () => props.onDelete(props.id)}>Delete</button>
    </div>
  );
}

export default Counter;