// List.js

import React, { useState } from 'react';
import ListItem from './ListItem';
import MemoizedListItem from './MemoizedListItem';

const List = ({ items }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Regular List</h2>
      <ul>
        {items.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
      <button onClick={increment}>Increment Count</button>

      <h2>Memoized List</h2>
      <ul>
        {items.map((item, index) => (
          <MemoizedListItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default List;
