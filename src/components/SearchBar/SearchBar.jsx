import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import Calendar from "../Calendar/Calendar";
import ModalPopUp from "../ModalPopUp/ModalPopUp";

const SearchBar = ({ searchType, date: initialDate, checkIn: initialCheckIn, checkOut: initialCheckOut, guests: initialGuests, onSearch }) => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState(initialCheckIn || "");
  const [checkOut, setCheckOut] = useState(initialCheckOut || "");
  const [guests, setGuests] = useState(initialGuests || "");
  const [date, setDates] = useState(initialDate || "");

  const [showCalendar, setShowCalendar] = useState(false);
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  }

  const handleSearch = () => {
    //search logic here
    onSearch({ location, checkIn, checkOut, date, guests });
  };

  return (
    <>
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
            <div className={styles.inputContainerCheckIn} onClick={toggleCalendar}>
              <span className={styles.label}>Check in</span>
              <input
                type="text"
                placeholder="Add dates"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                onFocus={toggleCalendar}
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
                onFocus={toggleCalendar}
              />
            </div>
            {showCalendar && (
              <div className={styles.calendarWrapper}>
                <Calendar />
              </div>
            )}
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
                onFocus={toggleCalendar}
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
    </>
  );
};

export default SearchBar;
