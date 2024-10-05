import React from 'react'
import styles from "./Header.module.css"
import airbnbLogo from "../../assets/logo_airbnb.svg"
import ButtonBeAHost from '../ButtonBeAHost/ButtonBeAHost'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import DestinationPopUp from '../DestinationPopUp/DestinationPopUp'
/* import ToggleButtonsStaysExperiences from '../ToggleButtonsStaysExperiences/ToggleButtonsStaysExperiences'
 */import GuestsPopUp from "../AddGuestsPopUp/AddGuestsPopUp";

const Header = () => {
    const handelRegionClick = (item) => {
    }

    return (
        <div className={styles.headerContainer}>
            <header className={styles.header}>
                <div className={styles.logoDiv}>
                    <a className={styles.airbnbHomeButton}
                        href="/">
                        <img src={airbnbLogo} className={styles.logoAirbnb} alt='The Logo of AirBnB' />
                    </a>
                </div>
				{/* <ToggleButtonsStaysExperiences /> */}
                <div className={styles.beAHostAndLanguageSelectorWrapper}>
                    <div className={styles.hostButtonDiv}>
                        <ButtonBeAHost />
                    </div>
                    <div className={styles.languageSelectorDiv}>
                        <LanguageSelector />
                    </div>
                </div>
            </header>
            <div className={styles.destinationPopUp}>
                <DestinationPopUp title='Search by region' onClick={(e) => handelRegionClick(e)} />
            </div>
            <div>
                  <GuestsPopUp/>
            </div>
        </div >
    )
}
export default Header
