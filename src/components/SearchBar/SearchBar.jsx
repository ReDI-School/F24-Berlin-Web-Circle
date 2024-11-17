import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
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
  const [closing, setClosing] = useState(false);

  const [hoverLocation, setHoverLocation] = useState(false);
  const [hoverCheckIn, setHoverCheckIn] = useState(false);
  const [hoverCheckOut, setHoverCheckOut] = useState(false);
  const [hoverGuests, setHoverGuests] = useState(false);
  const [hoverDate, setHoverDate] = useState(false);


  const handleMouseEnterLocation = () => {
    setHoverLocation(true);
  };

  const handleMouseLeaveLocation = () => {
    setHoverLocation(false);
  };

  const handleMouseEnterCheckIn = () => {
    setHoverCheckIn(true);
  };

  const handleMouseLeaveCheckIn = () => {
    setHoverCheckIn(false);
  };

  const handleMouseEnterCheckOut = () => {
    setHoverCheckOut(true);
  };

  const handleMouseLeaveCheckOut = () => {
    setHoverCheckOut(false);
  };

  const handleMouseEnterGuests = () => {
    setHoverGuests(true);
  };

  const handleMouseLeaveGuests = () => {
    setHoverGuests(false);
  }; 
  
  const handleMouseEnterDate = () => {
    setHoverDate(true);
  };

  const handleMouseLeaveDate = () => {
    setHoverDate(false);
  };



  const toggleCalendar = () => {
    setShowCalendar((prevState) => !prevState);
  }

  const closeCalendarPopup = () => setShowCalendar(false)
  const calendarRef = useOutsideClick(closeCalendarPopup)


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

  
  const handleSearch = () => {
    //search logic here
    onSearch({ location, checkIn, checkOut, date, guests });
  };

  return (
    <>
      <div className={styles.searchBar}>
        <div className={styles.inputContainerWhere}
          onMouseEnter={handleMouseEnterLocation}
          onMouseLeave={handleMouseLeaveLocation}  
        >
          <span className={styles.label}>Where</span>
          <input
            className={styles.inputTextPlaceholder}
            type="text"
            placeholder="Search destinations"
            value={location}
            onChange={(e) => setLocation(e.target.value)}

          />
        </div>
        <div className={styles.separatorWrapper}
             style={{ opacity: hoverLocation || hoverCheckIn || hoverDate ? 0 : 1 }}
        >
          <div className={styles.separator}></div>
        </div>
        {searchType === "stays" ? (
          <div className={styles.checkInOutWrapper} ref={calendarRef}>
            <div className={styles.inputContainerCheckIn} 
              onClick={toggleCalendar}
              onMouseEnter={handleMouseEnterCheckIn}
              onMouseLeave={handleMouseLeaveCheckIn}
            >
              <span className={styles.label}>Check in</span>
              <span className={styles.checkInText}>{checkIn}</span>
            </div>

            <div className={styles.separatorWrapper} 
                 style={{ opacity: hoverCheckIn || hoverCheckOut ? 0 : 1 }}
            >
              <div className={styles.separator}></div>
            </div>

            <div className={styles.inputContainerCheckOut} 
                 onClick={toggleCalendar}
                 onMouseEnter={handleMouseEnterCheckOut}
                 onMouseLeave={handleMouseLeaveCheckOut}
            >
              <span className={styles.label}>Check out</span>
              <span className={styles.checkOutText}>{checkOut}</span>
            </div>
            {showCalendar && (
              <div className={`${styles.calendarWrapper} ${closing ? styles.close : styles.open}`}>
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
          <div className={styles.checkInOutExperiencesWrapper} ref={calendarRef}>
            <div className={styles.inputContainerDate} 
              onClick={toggleCalendar}
              onMouseEnter={handleMouseEnterDate}
              onMouseLeave={handleMouseLeaveDate} 
            >
              <span className={styles.label}>Date</span>
              <span className={styles.checkInText}>{checkIn}</span>
            </div>
            {showCalendar && (
              <div className={`${styles.calendarWrapper} ${closing ? styles.close : styles.open}`}>
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
        <div className={styles.separatorWrapper}
             style={{ opacity: hoverGuests || hoverCheckOut || hoverDate ? 0 : 1 }}
        >
          <div className={styles.separator}></div>
        </div>
        <div className={styles.inputContainerWho}
          onMouseEnter={handleMouseEnterGuests}
          onMouseLeave={handleMouseLeaveGuests} 
        >
          <div className={styles.inputContainerWhoInner}>
            <span className={styles.label}>Who</span>
            <span className={styles.guestsText}>Add guests</span>
          </div>
          <div>
            <button onClick={handleSearch} className={styles.circleButton}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
