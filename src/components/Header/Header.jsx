import React from 'react'
import styles from "./Header.module.css"
import airbnbLogo from "../../assets/logo_airbnb.svg"
import ButtonBeAHost from '../ButtonBeAHost/ButtonBeAHost'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import DestinationPopUp from '../DestinationPopUp/DestinationPopUp'
import GuestsPopUp from "../AddGuestsPopUp/AddGuestsPopUp";
import SearchPanel from '../SearchPanel/SearchPanel';
import HeaderUserMenu from '../HeaderUserMenu/HeaderUserMenu'

const Header = () => {

    const handelRegionClick = (item) => {
    }

    return (
        <>
            <div className={styles.headerSectionContainer}>
                <header className={styles.header}>
                    <a className={styles.airbnbHomeButton}
                        href="/">
                        <img src={airbnbLogo} className={styles.logoAirbnb} alt='The Logo of AirBnB' />
                    </a>
                    <SearchPanel />
                    <div className={styles.userMenusWrapper}>
                        <ButtonBeAHost />
                        <LanguageSelector />
                        <HeaderUserMenu />
                    </div>
                    <hr className={styles.separator} />
                </header>
                <div className={styles.destinationPopUp}>
                    <DestinationPopUp title='Search by region' onClick={(e) => handelRegionClick(e)} />
                </div>
                <div>
                    <GuestsPopUp />
                </div>
            </div >
        </>
    )
}
export default Header
