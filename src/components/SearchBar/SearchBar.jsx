import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import Calendar from "../Calendar/Calendar";
import CalendarToggle from "../calendarToggle/CalendarToggle";
import DataIncrementsButtonForTheCalendar from "../DataIncrementsButtonForTheCalendar/DataIncrementsButtonForTheCalendar";
import useOutsideClick from "../../hooks/useOutsideClick";

const SearchBar = ({ searchType, date: initialDate, checkIn: initialCheckIn, checkOut: initialCheckOut, guests: initialGuests, onSearch }) => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState(initialCheckIn || "Add dates");
  const [checkOut, setCheckOut] = useState(initialCheckOut || "Add dates");
  const [guests, setGuests] = useState(initialGuests || "");
  const [date, setDates] = useState(initialDate || "");

  const [showCalendar, setShowCalendar] = useState(false);
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  }
  const calendarRef = useOutsideClick(() => setShowCalendar(false))

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
              <span className={styles.checkInText}>{checkIn}</span>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.inputContainerCheckOut} onClick={toggleCalendar}>
              <span className={styles.label}>Check out</span>
              <span className={styles.checkOutText}>{checkOut}</span>
            </div>
            {showCalendar && (
              <div className={styles.calendarWrapper} ref={calendarRef}>
                <div className={styles.calendarToggleWrapper}>
                  <CalendarToggle />
                </div>
                <div className={styles.calendarContentWrapper}>
                  <Calendar dayItemWidth="48px" dayItemHeight="48px" />
                </div>
                <div className={styles.incrementButtonWrapper}>
                  <DataIncrementsButtonForTheCalendar />
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className={styles.inputContainerDate} onClick={toggleCalendar}>
              <span className={styles.label}>Date</span>
              <span className={styles.checkInText}>{checkIn}</span>
            </div>
            {showCalendar && (
              <div className={styles.calendarWrapper} ref={calendarRef}>
                <div className={styles.calendarExperiencesWrapper}>
                  <Calendar dayItemWidth="48px" dayItemHeight="48px" />
                </div>
              </div>
            )}
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
