import React from 'react';
import './App.css';
import SearchBar from './components/searchBar/SearchBar';

function App() {
  const handleAirbnbSearch = ({ location, checkIn, checkOut, guests }) => {
    // Logic for home search
    
  };

  return (
    <>
      <h1 data-testid="heading">Hello F24-Berlin-Web-Circle Typo fixed</h1>
      <div>
      <SearchBar
        checkIn=""
        checkOut=""
        guests=""
        onSearch={handleAirbnbSearch}
      />
      </div>
    </>
  )
}

export default App
