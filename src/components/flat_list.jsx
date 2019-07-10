import React from 'react';
import Flat from './flat';


const FlatList = ({ flats }) => {
  return (
    <div className="flat-list">
      {flats.map((flat) => <Flat name={flat.name} lat={flat.lat} lon={flat.lon} price={flat.price} title={flat.title} priceCurrency={flat.priceCurrency} imageUrl={flat.imageUrl} />)}
    </div>
  );
};

export default FlatList;
