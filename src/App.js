import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BeerCard from './BeerCard';
import './App.css'

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://api.sampleapis.com/beers/ale')
      .then(response => setBeers(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-900 container mx-auto p-4">
      <input
        type="text"
        placeholder="Search Beers"
        className="w-[40vw] p-2 mb-20 border border-gray-300 rounded fixed "
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className=" grid mt-32 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {filteredBeers.map(beer => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default App;
