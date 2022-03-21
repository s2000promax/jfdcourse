import React, {useState} from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [tags, setTags] = useState(['tag1', 'tag2', 'tag3']);

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

  const handleTagChange = (id) => {
    setTags(prevState => prevState.filter(tag => tag !== id));
  }

  const renderTags = () => {
    return !!tags.length && tags.map((tag) => (
      <li
        key={tag}
        className='btn btn-primary btn-sm m-2'
        onClick={() => handleTagChange(tag)}>{tag}
      </li>
    ));
  }

  if (!!tags.length) {
    return (
      <ul>
        {renderTags()}
      </ul>
    );
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