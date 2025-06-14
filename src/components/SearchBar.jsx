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
    <div>
      <div>
        <div>
          <input
            type="text"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search for a city..."
          />
          <button
            onClick={handleSearch}
          >
            <Search />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
