import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  const handleSearch = () => {
    console.log("Search", { location, checkIn, checkOut, guests });
    //search logic here
  };

  return (
    <div className="search-bar">
      <div className="input-container">
        <span className="label">Where</span>
        <input
          type="text"
          placeholder="Search destinations"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="separator"></div>

      <div className="input-container">
        <span className="label">Check in</span>
        <input
          type="text"
          placeholder="Add dates"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>
      <div className="separator"></div>

      <div className="input-container">
        <span className="label">Check out</span>
        <input
          type="text"
          placeholder="Add dates"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>
      <div className="separator"></div>

      <div className="input-container">
        <span className="label">Who</span>
        <input
          type="text"
          placeholder="Add guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
      </div>
      <button onClick={handleSearch} className="circle-button">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;
