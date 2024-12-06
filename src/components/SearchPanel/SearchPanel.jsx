import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ToggleButtonsStaysExperiences from "../ToggleButtonsStaysExperiences/ToggleButtonsStaysExperiences";
import styles from "./SearchPanel.module.css";
import { createSearchParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import FilterButton from "../FilterButton/FilterButton";

const SearchPanel = () => {
    const [searchType, setSearchType] = useState("stays");
    const [searchQuery, setSearchQuery] = useState(""); // State for mobile search input
    const navigate = useNavigate();

    // Toggle between "stays" and "experiences"
    const toggleSearchType = (type) => {
        setSearchType(type);
    };

    // Search handler for desktop
    const handleAirbnbSearch = ({ location: region, checkIn, checkOut, adults, children, infants, pets }) => {
        const searchQueries = {
            region,
            checkIn,
            checkOut,
            adults,
            children,
            infants,
            pets
        };

        if (region) {
            navigate({
                pathname: `/s/${region}/homes`,
                search: createSearchParams(searchQueries).toString(),
            });
        }
    };

    // Search handler for mobile
    const handleMobileSearch = () => {
        if (searchQuery.trim() !== "") {
            navigate({
                pathname: `/s/${searchQuery}/homes`,
            });
        }
    };

    return (
        <div className={styles.searchPanel}>
            {/* Desktop Version */}
            <div className={styles.desktopPanel}>
                <div className={styles.toggleButtonsContainer}>
                    <ToggleButtonsStaysExperiences toggleSearchType={toggleSearchType} />
                </div>
                <div className={styles.searchBarContainer}>
                    <SearchBar
                        searchType={searchType}
                        onSearch={handleAirbnbSearch}
                    />
                </div>
            </div>

            {/* Mobile Version */}
            <div className={styles.mobileSearch}>
                <div className={styles.mobileSearchInputWrapper}>
                    {/* Search Icon on the Left */}
                    <button className={styles.mobileSearchButton} onClick={handleMobileSearch}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>

                    {/* Input and Placeholder Text Block */}
                    <div className={styles.inputPlaceholderBlock}>
                        <input
                            type="text"
                            className={styles.mobileSearchInput}
                            placeholder="Where to?"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <div className={styles.mobileSearchPlaceholder}>
                            Anywhere <span className={styles.dot}>•</span> Any week{" "}
                            <span className={styles.dot}>•</span> Add guests
                        </div>
                    </div>
                </div>

                {/* Filter Button placed next to the search bar */}
                <div className={styles.filterButtonWrapper}>
                    <FilterButton />
                </div>
            </div>
        </div>
    );
};

export default SearchPanel;
