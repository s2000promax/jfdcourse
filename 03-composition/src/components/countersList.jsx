import React, {useState} from 'react';
import Counter from './counter';

const CountersList = () => {
  const initialState = [
    {id: 0, value: 0, name: 'Unnecessary thing'},
    {id: 1, value: 4, name: 'Spoon'},
    {id: 2, value: 0, name: 'Fork'},
    {id: 3, value: 0, name: 'Dish'},
    {id: 4, value: 0, name: `Minimalist's kit`},
  ];

  const initialStateUpade = [
    {id: 0, value: 1, name: 'Unnecessary thing'},
    {id: 1, value: 2, name: 'Spoon'},
    {id: 2, value: 3, name: 'Fork'},
    {id: 3, value: 4, name: 'Dish'},
    {id: 4, value: 5, name: `Minimalist's kit`},
  ];
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    console.log('id', id);
    const newCounters = counters.filter( counter => counter.id !== id );
    setCounters(newCounters);
  }

  const handleReset = () => {
    setCounters(initialState);
  }

  const handleUpdate = () => {
    setCounters(initialStateUpade);
  }

  return <>
    {counters
      .map(counter => <Counter key={counter.id} onDelete={handleDelete} {...counter} />
    )}
    <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Reset</button>
    <button className="btn btn-primary btn-sm m-2" onClick={handleUpdate}>Update</button>
  </>
}

export default CountersList;