import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ checkIn: initialCheckIn, checkOut: initialCheckOut, guests: initialGuests, onSearch }) => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState(initialCheckIn || "");
  const [checkOut, setCheckOut] = useState(initialCheckOut || "");
  const [guests, setGuests] = useState(initialGuests || "");

  const handleSearch = () => {
    //search logic here
    onSearch({ location, checkIn, checkOut, guests });
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
