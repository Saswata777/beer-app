import React from 'react';
import './App.css'

const BeerCard = ({ beer }) => {
  return (
    <div className="box bg-slate-50 max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className=" w-4/6"
        src={beer.image || 'https://via.placeholder.com/140'}
        alt={beer.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{beer.name}</div>
        <p className="text-gray-700 text-base">
          {beer.description}
        </p>
        <p className="text-gray-700 text-base">
          Price: {beer.price}     
        </p>
        <p className="text-gray-700 text-base">
          Rating:  {Math.floor(beer.rating.average)}     
        </p>
      </div>
      
    </div>
  );
};

export default BeerCard;
