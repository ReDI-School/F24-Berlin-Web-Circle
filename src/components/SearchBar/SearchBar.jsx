import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import styles from "./SearchBar.module.css";
import Calendar from "../Calendar/Calendar";
import CalendarToggle from "../calendarToggle/CalendarToggle";
import DataIncrementsButtonForTheCalendar from "../DataIncrementsButtonForTheCalendar/DataIncrementsButtonForTheCalendar";
import useOutsideClick from "../../hooks/useOutsideClick";
import { formatDateToMonthDay, formatDateRange } from "../../utils/dateUtils";
import { CloseButtonIcon } from "../../icons/CloseButtonIcon";

const SearchBar = ({ searchType, onSearch }) => {
  const [location, setLocation] = useState("");
  const [searchCheckIn, setSearchCheckIn] = useState("Add dates");
  const [searchCheckOut, setSearchCheckOut] = useState("Add dates");
  const [guests, setGuests] = useState("Add guests");
  const [showCalendar, setShowCalendar] = useState(false);
  const [closing, setClosing] = useState(false);
  const [hoverStates, setHoverStates] = useState({
    location: false,
    checkIn: false,
    checkOut: false,
    guests: false,
    date: false,
  });
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [focusedSearchBar, setFocusedSearchBar] = useState(false);
// console.log('selectedBlock', selectedBlock)
// console.log('focusedSearchBar', focusedSearchBar)
// console.log('searchType', searchType)
// console.log('searchCheckIn', searchCheckIn)
// console.log('searchCheckOut', searchCheckOut)


  const prevSelectedBlock = useRef(null);

  const disableSearchBarFocus = () => { 
    setFocusedSearchBar(false);
    setSelectedBlock(null);
  }

  const closeCalendarPopup = () => setShowCalendar(false)

  const searchBarRef = useOutsideClick(disableSearchBarFocus);
  const calendarRef = useOutsideClick(closeCalendarPopup)

  useEffect(() => {
    prevSelectedBlock.current = selectedBlock;
  }, [selectedBlock]);

  const handleBlockClick = (block) => {
    setSelectedBlock((prevBlock) => (prevBlock === block && selectedBlock !== 'where' ? null : block));
    setFocusedSearchBar(true);
  };

  const handleMouseHover = (block, isHovering) => {
    setHoverStates((prev) => ({
      ...prev,
      [block]: isHovering,
    }));
  };


  const toggleCalendar = () => {
    setShowCalendar((prevState) => !prevState);
  }

  useEffect(() => {
    searchCheckIn && searchCheckIn !== "Add dates" ? setSelectedBlock("checkOut") : setSelectedBlock("checkIn")
  }, [searchCheckIn])

  useEffect(() => {
    searchCheckIn && searchCheckOut && searchType === "experiences" ? setSelectedBlock("date") : null
  }, [searchCheckIn, searchType, searchCheckOut])
  

  useEffect(() => {
    const handleScroll = () => {
      if (showCalendar && !closing) {
        setClosing(true);
        setFocusedSearchBar(false);
        setSelectedBlock(null);
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
    onSearch({ location, searchCheckIn, searchCheckOut, guests });
  };

  return (
    <>
      <div className={`${styles.searchBar} ${focusedSearchBar ? styles.focused : ''}`} ref={searchBarRef}>
        <div 
          className={`${styles.inputContainerWhere} 
                      ${selectedBlock === "where" ? styles.selected : ''}
                      ${selectedBlock === "checkIn" || selectedBlock === "date" ? styles.hoveredWhereBlock : ''}
                    `}
          onMouseEnter={() => handleMouseHover("location", true)}
          onMouseLeave={() => handleMouseHover("location", false)}
          onClick={() => handleBlockClick("where")}  
        >
          <div className={styles.locationContentWrapper}>
            <span className={styles.label}>Where</span>
            <input
              className={styles.inputTextPlaceholder}
              type="text"
              placeholder="Search destinations"
              value={location}
              onChange={(e) => setLocation(e.target.value)}

            />
          </div>
          {location && selectedBlock === "where" && (
            <button 
              onClick={(e) => {
                e.stopPropagation()
                setLocation("")
              }}
              className={styles.searchDeleteContentBtn}
            >
              <CloseButtonIcon />
            </button>
          )}
        </div>
        <div className={styles.separatorWrapper}
             style={{ opacity: hoverStates.location ||
              hoverStates.checkIn ||
              hoverStates.date ||
               (selectedBlock === "where" && focusedSearchBar) ||
               (selectedBlock === "checkIn" && focusedSearchBar) ||
               (selectedBlock === "date" && focusedSearchBar) ?
               0 : 1 }}
        >
          <div className={styles.separator}></div>
        </div>
        {searchType === "stays" ? (
          <div className={styles.checkInOutWrapper} ref={calendarRef}>
            <div className={`${styles.inputContainerCheckIn} 
                             ${selectedBlock === "checkIn" ? styles.selected : ''}
                             ${selectedBlock === "where" ? styles.hoveredCheckInBlock : ''}
                             ${selectedBlock === "checkOut" ? styles.hoveredReversedCheckInBlock : ''}
                           `}
              onClick={() => {
                handleBlockClick("checkIn");
                if((prevSelectedBlock.current !== "checkOut" && showCalendar) ||
                  (!showCalendar)) {
                  toggleCalendar();
                }
              }}
              onMouseEnter={() => handleMouseHover("checkIn", true)}
              onMouseLeave={() => handleMouseHover("checkIn", false)}
            >
              <div className={styles.checkInTextWrapper}>
                <span className={styles.label}>Check in</span>
                <span className={styles.checkInText}>{formatDateToMonthDay(searchCheckIn)}</span>
              </div>
              {searchCheckIn && searchCheckIn !== "Add dates" && selectedBlock === "checkIn" && (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchCheckIn("Add dates")
                  setSearchCheckOut("Add dates")
                }}
                className={styles.searchDeleteContentBtn}
              >
                <CloseButtonIcon />
              </button>
              )}
            </div>

            <div className={styles.separatorWrapper} 
                 style={{ opacity: hoverStates.checkIn ||
                   hoverStates.checkOut ||
                   (selectedBlock === "checkIn" && focusedSearchBar) ||
                   (selectedBlock === "checkOut" && focusedSearchBar) ? 
                   0 : 1 }}
            >
              <div className={styles.separator}></div>
            </div>

            <div className={`${styles.inputContainerCheckOut} 
                             ${selectedBlock === "checkOut" ? styles.selected : ''}
                             ${selectedBlock === "who" ? styles.hoveredCheckOutBlock : ''}
                             ${selectedBlock === "checkIn" ? styles.hoveredReversedCheckOutBlock : ''}
                           `}
                 onMouseEnter={() => handleMouseHover("checkOut", true)}
                 onMouseLeave={() => handleMouseHover("checkOut", false)}
                 onClick={() => {
                  handleBlockClick("checkOut")
                  if((prevSelectedBlock.current !== "checkIn" && showCalendar) ||
                  (!showCalendar)) {
                    toggleCalendar();
                  }
                }}
            >
              <div className={styles.checkOutTextWrapper}>
                <span className={styles.label}>Check out</span>
                <span className={styles.checkOutText}>{formatDateToMonthDay(searchCheckOut)}</span>
              </div>
              {searchCheckOut && searchCheckOut !== "Add dates" && selectedBlock === "checkOut" && (
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  setSearchCheckIn("Add dates")
                  setSearchCheckOut("Add dates")
                }}
                className={styles.searchDeleteContentBtn}
              >
                <CloseButtonIcon />
              </button> 
              )}
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
                    searchCheckIn={searchCheckIn}
                    searchCheckOut={searchCheckOut}
                    setSearchCheckIn={setSearchCheckIn}
                    setSearchCheckOut={setSearchCheckOut}
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
            <div className={`${styles.inputContainerDate} 
                              ${selectedBlock === "date" ? styles.selected : ''}
                              ${selectedBlock === "where" ? styles.hoveredDateBlock : ''}
                              ${selectedBlock === "who" ? styles.hoveredReversedDateBlock : ''}
                            `}
              onClick={() => {
                handleBlockClick("date")
                toggleCalendar()
              }}
              onMouseEnter={() => handleMouseHover("date", true)}
              onMouseLeave={() => handleMouseHover("date", false)}
            >
              <div className={styles.dateTextWrapper}>
                <span className={styles.label}>Date</span>
                <div className={styles.experienceDatesWrapper}>
                  <span className={styles.checkInText}>{formatDateRange(searchCheckIn, searchCheckOut)}</span>
                </div>
              </div>
              {searchCheckIn && searchCheckIn !== "Add dates" && selectedBlock === "date" && ( 
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  setSearchCheckIn("Add dates")
                  setSearchCheckOut("Add dates")
                }}
                className={styles.searchDeleteContentBtn}
              >
                <CloseButtonIcon />
              </button> 
              )}
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
                    searchCheckIn={searchCheckIn}
                    searchCheckOut={searchCheckOut}
                    setSearchCheckIn={setSearchCheckIn}
                    setSearchCheckOut={setSearchCheckOut}  
                  />
                </div>
              </div>
            )}
          </div>
        )}
        <div className={styles.separatorWrapper}
             style={{ opacity: hoverStates.guests ||
              hoverStates.checkOut ||
              (selectedBlock === "who" && focusedSearchBar) ||
              (selectedBlock === "checkOut" && focusedSearchBar) ||
              (selectedBlock === "date" && focusedSearchBar) ||
              hoverStates.date ? 0 : 1 }}
        >
          <div className={styles.separator}></div>
        </div>
        <div className={`${styles.inputContainerWho} 
                         ${selectedBlock === "who" ? styles.selected : ''}
                         ${selectedBlock === "checkOut" || selectedBlock === "date" ? styles.hoveredWhoBlock : ''}
                       `}
          onMouseEnter={() => handleMouseHover("guests", true)}
          onMouseLeave={() => handleMouseHover("guests", false)}
          onClick={() => handleBlockClick("who")}
        >
          <div className={styles.inputContainerWhoInner}>
            <span className={styles.label}>Who</span>
            <span className={styles.guestsText}>{guests}</span>
          </div>
          {guests && guests !== "Add guests" && selectedBlock === "guests" && ( 
          <button 
            onClick={(e) => {
              e.stopPropagation()
              setGuests("Add guests")
            }}
            className={styles.searchDeleteContentBtn}
          >
            <CloseButtonIcon />
          </button> 
          )}
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
