import React from "react";
import airbnbLogo from "../../assets/logo_airbnb.svg";
import GuestsPopUp from "../AddGuestsPopUp/AddGuestsPopUp";
import ButtonBeAHost from "../ButtonBeAHost/ButtonBeAHost";
import DestinationPopUp from "../DestinationPopUp/DestinationPopUp";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import ToggleButtonsStaysExperiences from "../ToggleButtonsStaysExperiences/ToggleButtonsStaysExperiences";
import SearchBar from "../searchBar/SearchBar";
import styles from "./Header.module.css";

const Header = () => {
  const handelRegionClick = (item) => {};

  const handleAirbnbSearch = ({ location, checkIn, checkOut, guests }) => {
    // Logic for home search
  };

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <div className={styles.logoDiv}>
          <a className={styles.airbnbHomeButton} href="/">
            <img
              src={airbnbLogo}
              className={styles.logoAirbnb}
              alt="The Logo of AirBnB"
            />
          </a>
        </div>
        <ToggleButtonsStaysExperiences />
        <div className={styles.beAHostAndLanguageSelectorWrapper}>
          <div className={styles.hostButtonDiv}>
            <ButtonBeAHost />
          </div>
          <div className={styles.languageSelectorDiv}>
            <LanguageSelector />
          </div>
        </div>
        
      </header>
      <div>
          <SearchBar
            checkIn=""
            checkOut=""
            guests=""
            onSearch={handleAirbnbSearch}
          />
        </div>
      <div className={styles.destinationPopUp}>
        <DestinationPopUp
          title="Search by region"
          onClick={(e) => handelRegionClick(e)}
        />
      </div>
      <div>
        <GuestsPopUp />
      </div>
    </div>
  );
};
export default Header;
