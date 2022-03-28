import React, {useState} from 'react';
import Counter from './counter';

const CountersList = () => {

  const initialState = [
    {id: 0, value: 0, name: 'Unnecessary thing'},
    {id: 1, value: 0, name: 'Spoon'},
    {id: 2, value: 0, name: 'Fork'},
    {id: 3, value: 0, name: 'Dish'},
    {id: 4, value: 0, name: `Minimalist's kit`},
  ];

  const [counters, setCounters] = useState(initialState);

  const handleIncrement = (id) => {
    setCounters(counters.map(item => {
      if (item.id === id) {
        item.value += 1;
      }
      return item;
    }));
  }

  const handleDecrement = (id) => {
    setCounters(counters.map(item => {
      if (item.id === id) {
        if (!!item.value) {
          item.value -= 1
        }
        ;
      }
      return item;
    }));
  }

  const handleDelete = (id) => {
    setCounters(counters.filter(counter => counter.id !== id));
  }

  const handleReset = () => {
    setCounters(initialState);
  }

  return <>
    {counters
      .map(counter => <Counter
          key={counter.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...counter}
        />
      )}
    <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Reset</button>
  </>
}

export default CountersList;