import { Search } from 'lucide-react';
import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
    const [searchLocation, setSearchLocation] = useState('');

    const handleSearch = (e) => {
        if (e) e.preventDefault();
        if (searchLocation.trim()) {
            onSearch(searchLocation.trim());
            setSearchLocation('');
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch(e);
        }
    }
  return (
    <div className='mb-8'>
      <div className='max-w-md mx-auto'>
        <div className='relative'>
          <input
            type="text"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search for a city..."
            className="w-full px-6 py-4 pr-12 rounded-2xl border-0 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 text-gray-700 placeholder-gray-400 transition-all duration-150"
          />
          <button
            onClick={handleSearch}
            className="absolute right-2 top-2 p-2 bg-blue-500 hover:bg-blue-600 rounded-xl transition-colors duration-200"
          >
            <Search className='w-6 h-6 text-white' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
