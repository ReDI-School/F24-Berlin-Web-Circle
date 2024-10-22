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
    const handleAirbnbSearch = ({ location: destination, checkIn, checkOut, guests }) => {
        // TODO: After configuring the props below should be removed. USED FOR TESTING.
        destination = "US";
        checkIn = new Date(2024, 11, 2);
        checkOut = new Date(2024, 11, 3);
        guests = 1;
        ///////////////////

        const searchQueries = {
            destination,
            checkIn,
            checkOut,
            guests
        }
        if (destination)
            navigate({pathname: `/s/${destination}/homes`, search: createSearchParams(searchQueries).toString()});
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