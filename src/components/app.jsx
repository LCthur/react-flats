import React from 'react';
import FlatList from './flat_list';
import flats from '../../data/flats';

const App = () => {
  return (
    <div>
      <FlatList flats={flats} />
    </div>
  );
};

export default App;
