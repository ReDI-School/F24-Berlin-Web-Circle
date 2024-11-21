import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
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
  navigate,  // Receive the navigate function here
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

  const toggleCalendar = () => setShowCalendar((prev) => !prev);

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
    if (showCalendar) window.addEventListener("scroll", handleScroll);
    else window.removeEventListener("scroll", handleScroll);
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

  const handleSelectDestination = (region) => {
    // When a destination is selected, navigate to the homes search page
    navigate(`/s/${region}/homes`);
    setLocation(region);  // Optionally update the location in the input field
    setIsFocused(false);  // Close the suggestions dropdown
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
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 100)}
        />
        {isFocused && (
          <SuggestedDestinations
            suggestions={suggestions}
            onSelect={handleSelectDestination}  // Pass the select handler here
          />
        )}
      </div>
      {/* Other search inputs (Check-in, Check-out, Guests) */}
    </div>
  );
};

export default SearchBar;
