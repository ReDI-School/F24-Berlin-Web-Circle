import React from 'react'
import SearchBar from "../SearchBar/SearchBar";
import ToggleButtonsStaysExperiences from '../ToggleButtonsStaysExperiences/ToggleButtonsStaysExperiences'
import styles from "./SearchPanel.module.css"
import { useState } from 'react';

const SearchPanel = () => {

    const [searchType, setSearchType] = useState("stays");
    const toggleSearchType = (type) => {
        setSearchType(type);
    };
    const handleAirbnbSearch = ({ location, checkIn, checkOut, guests }) => {
        // Logic for home search
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