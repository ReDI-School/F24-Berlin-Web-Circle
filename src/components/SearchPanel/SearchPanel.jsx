import React from 'react'
import SearchBar from "../SearchBar/SearchBar";
import ToggleButtonsStaysExperiences from '../ToggleButtonsStaysExperiences/ToggleButtonsStaysExperiences'
import styles from "./SearchPanel.module.css"
import { useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

const SearchPanel = () => {

    const [searchType, setSearchType] = useState("stays");
    const navigate = useNavigate();

    const toggleSearchType = (type) => {
        setSearchType(type);
    };
    const handleAirbnbSearch = ({ location: region, checkIn, checkOut, guests }) => {
        // TODO: After configuring the props below should be removed. USED FOR TESTING.
        region = "uS";
        checkIn = new Date("2025-01-14T13:00:00.000Z");
        checkOut = new Date("2025-01-15T10:00:00.000Z");
        guests = 1;

        const searchQueries = {
            region,
            checkIn,
            checkOut,
            guests
        }
        if (region)
            navigate({pathname: `/s/${region}/homes`, search: createSearchParams(searchQueries).toString()});
    };
    return (
        <div>
            <div className={styles.toggleButtonsContainer}>
                <ToggleButtonsStaysExperiences toggleSearchType={toggleSearchType} />
            </div>
            <div className={styles.searchBarContainer}>
                <SearchBar
                    searchType={searchType}
                    checkIn=""
                    checkOut=""
                    guests=""
                    onSearch={handleAirbnbSearch}
                />
            </div>            
        </div>        
    )
}

export default SearchPanel