import React, {useState} from 'react';
import Counter from './counter';

const CountersList = () => {
  const [counters, setCounters] = useState([
    {id: 0, value: 0, name: 'Unnecessary thing'},
    {id: 1, value: 4, name: 'Spoon'},
    {id: 2, value: 0, name: 'Fork'},
    {id: 3, value: 0, name: 'Dish'},
    {id: 4, value: 0, name: `Minimalist's kit`},
  ]);

  const handleDelete = (id) => {
    console.log('id', id);
    const newCounters = counters.filter( counter => counter.id !== id );
    setCounters(newCounters);
  }

  return <>
    {counters
      .map(counter => <Counter
      key={counter.id}
      id={counter.id}
      value={counter.value}
      name={counter.name}
      onDelete={handleDelete}
    />
    )}
  </>
}

export default CountersList;