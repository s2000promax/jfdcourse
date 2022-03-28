import React from "react";

const Counter = (props) => {
  const {
    id,
    value,
    name,
    onDelete,
    onIncrement,
    onDecrement,
  } = props;

  const formatValue = number => !number ? 'empty' : number;

  const getBadgeClasses = number => !number ? 'badge m-2 btn-warning' : 'badge m-2 btn-primary';

  return (
    <div>
      <span>{name}</span>
      <span className={getBadgeClasses(value)}>{formatValue(value)}</span>
      <button className='btn btn-primary btn-sm m-2' onClick={() => onIncrement(id)}>+</button>
      <button className='btn btn-primary btn-sm m-2' onClick={() => onDecrement(id)}>-</button>
      <button className="btn btn-danger btn-sm m-2" onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default Counter;