import React from 'react';

const BenchIndexItem = ({ bench }) => (
  <div>
    <li>{bench.description}</li>
    <li>{bench.lat}</li>
    <li>{bench.lng}</li>
  </div>
);

export default BenchIndexItem;
