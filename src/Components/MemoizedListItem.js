// MemoizedListItem.js

import React from 'react';

const MemoizedListItem = React.memo(({ item }) => {
  console.log(`Rendering memoized item: ${item}`);
  return <li>{item}</li>;
});

export default MemoizedListItem;
