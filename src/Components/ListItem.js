// ListItem.js

import React from 'react';

const ListItem = ({ item }) => {
  console.log(`Rendering item: ${item}`);
  return <li>{item}</li>;
};

export default ListItem;
