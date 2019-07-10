import React from 'react';
import FlatList from './flat_list';
import flats from '../../data/flats';
import SimpleMap from './map';

const App = () => {
  return (
  <div>
    <div>
      <FlatList flats={flats} />
    </div>
    <div className="map-container">
      <SimpleMap />
    </div>
  </div>
  );
};

export default App;
