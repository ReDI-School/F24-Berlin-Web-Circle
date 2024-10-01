import React from 'react'
import styles from "./Header.module.css"
import airbnbLogo from "../../assets/logo_airbnb.svg"
import ButtonBeAHost from '../ButtonBeAHost/ButtonBeAHost'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import DestinationPopUp from '../DestinationPopUp/DestinationPopUp'
import ToggleButtonsStaysExperiences from '../ToggleButtonsStaysExperiences/ToggleButtonsStaysExperiences'


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
				<ToggleButtonsStaysExperiences />
                {/* {<div className={styles.toggleButtonsStaysExperiences}>
                    <button className={styles.buttonStays}>Stays</button>
                    <button className={styles.buttonExperiences}>Experiences</button>
                </div>} */}
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
        </div >
    )
}

export default Header
