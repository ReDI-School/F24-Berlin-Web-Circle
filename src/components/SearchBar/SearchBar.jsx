import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import Calendar from "../Calendar/Calendar";
import CalendarToggle from "../calendarToggle/CalendarToggle";
import DataIncrementsButtonForTheCalendar from "../DataIncrementsButtonForTheCalendar/DataIncrementsButtonForTheCalendar";
import useOutsideClick from "../../hooks/useOutsideClick";
import SuggestedDestinations from "../SuggestedDestinations/SuggestedDestinations.jsx";

const SearchBar = ({
  searchType,
  date: initialDate,
  checkIn: initialCheckIn,
  checkOut: initialCheckOut,
  guests: initialGuests,
  onSearch,
}) => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState(initialCheckIn || "Add dates");
  const [checkOut, setCheckOut] = useState(initialCheckOut || "Add dates");
  const [guests, setGuests] = useState(initialGuests || "");
  const [date, setDates] = useState(initialDate || "");

  const [showCalendar, setShowCalendar] = useState(false);
  const [closing, setClosing] = useState(false);

  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar((prevState) => !prevState);
  };

  const closeCalendarPopup = () => setShowCalendar(false);
  const calendarRef = useOutsideClick(closeCalendarPopup);

  useEffect(() => {
    const handleScroll = () => {
      if (showCalendar && !closing) {
        setClosing(true);
        setTimeout(() => {
          setShowCalendar(false);
          setClosing(false);
        }, 300);
      }
    };
    if (showCalendar) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showCalendar, closing]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await fetch("server/src/data/products.json");
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };
    fetchSuggestions();
  }, []);

  const handleSearch = () => {
    onSearch({ location, checkIn, checkOut, date, guests });
  };

  const handleSelectDestination = (destination) => {
    setLocation(destination.name);
    setIsFocused(false);
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
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 100)} 
          />
          {isFocused && (
            <SuggestedDestinations
              suggestions={suggestions}
              onSelect={handleSelectDestination}
            />
          )}
        </div>
        <div className={styles.separator}></div>
        {searchType === "stays" ? (
          <div className={styles.checkInOutWrapper} ref={calendarRef}>
            <div
              className={styles.inputContainerCheckIn}
              onClick={toggleCalendar}
            >
              <span className={styles.label}>Check in</span>
              <span className={styles.checkInText}>{checkIn}</span>
            </div>

            <div className={styles.separator}></div>

            <div
              className={styles.inputContainerCheckOut}
              onClick={toggleCalendar}
            >
              <span className={styles.label}>Check out</span>
              <span className={styles.checkOutText}>{checkOut}</span>
            </div>
            {showCalendar && (
              <div
                className={`${styles.calendarWrapper} ${
                  closing ? styles.close : styles.open
                }`}
              >
                <div className={styles.calendarToggleWrapper}>
                  <CalendarToggle />
                </div>
                <div className={styles.calendarContentWrapper}>
                  <Calendar
                    dayItemWidth="48px"
                    dayItemHeight="48px"
                    pickedDayWidth="46px"
                    pickedDayHeight="46px"
                    isSearchBarCalendar={true}
                  />
                </div>
                <div className={styles.incrementButtonWrapper}>
                  <DataIncrementsButtonForTheCalendar />
                </div>
              </div>
            )}
          </div>
        ) : (
          <div
            className={styles.checkInOutExperiencesWrapper}
            ref={calendarRef}
          >
            <div className={styles.inputContainerDate} onClick={toggleCalendar}>
              <span className={styles.label}>Date</span>
              <span className={styles.checkInText}>{checkIn}</span>
            </div>
            {showCalendar && (
              <div
                className={`${styles.calendarWrapper} ${
                  closing ? styles.close : styles.open
                }`}
              >
                <div className={styles.calendarExperiencesWrapper}>
                  <Calendar
                    dayItemWidth="48px"
                    dayItemHeight="48px"
                    pickedDayWidth="46px"
                    pickedDayHeight="46px"
                    isSearchBarCalendar={true}
                  />
                </div>
              </div>
            )}
          </div>
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
