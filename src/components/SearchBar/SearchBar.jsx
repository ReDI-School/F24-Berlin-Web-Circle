import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ searchType, dates: initialDates, checkIn: initialCheckIn, checkOut: initialCheckOut, guests: initialGuests, onSearch }) => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState(initialCheckIn || "");
  const [checkOut, setCheckOut] = useState(initialCheckOut || "");
  const [guests, setGuests] = useState(initialGuests || "");
  const [date, setDates] = useState(initialDates || "");

  const handleSearch = () => {
    //search logic here
    onSearch({ location, checkIn, checkOut, date, guests });
  };

  return (

    <div className={styles.searchBar}>
      <div className={styles.inputContainerWhere}>
        <span className={styles.label}>Where</span>
        <input
          className={styles.inputTextPlaceholder}
          type="text"
          placeholder="Search destinations"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className={styles.separator}></div>

      {searchType === "stays" ? (
        <>
          <div className={styles.inputContainerCheckIn}>
            <span className={styles.label}>Check in</span>
            <input
              type="text"
              placeholder="Add dates"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div className={styles.separator}></div>
          <div className={styles.inputContainerCheckOut}>
            <span className={styles.label}>Check out</span>
            <input
              type="text"
              placeholder="Add dates"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
        </>
      ) : (
        <>
          <div className={styles.inputContainerDate}>
            <span className={styles.label}>Date</span>
            <input
              type="text"
              placeholder="Add dates"
              value={date}
              onChange={(e) => setDates(e.target.value)}
            />
          </div>
        </>
      )}
      <div className={styles.separator}></div>
      <div className={styles.inputContainerWho}>
        <span className={styles.label}>Who</span>
        <input
          type="text"
          placeholder="Add guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSearch} className={styles.circleButton}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
