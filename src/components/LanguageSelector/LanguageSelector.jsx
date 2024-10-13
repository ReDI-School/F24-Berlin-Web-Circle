import React from 'react'
import globe_icon from "../../assets/globe_icon.svg"
import styles from "./LanguageSelector.module.css"
import LanguagePopUp from '../LanguagePopUp/LanguagePopUp'
import { useState, useEffect } from 'react'

const LanguageSelector = () => {
    const [isVisible, setIsVisiable] = useState(false);
    const handelLanguageSelectionClick = () => {
        setIsVisiable(true);
    }
    const handelClose = () => {
        setIsVisiable(false);
    }

    return (
        <>
            <div className={styles.languageSelector} onClick={handelLanguageSelectionClick}>
                <img src={globe_icon} className={styles.globe_icon} alt="A globe icon as a link to select the language" />
            </div>
            <div className={styles.languagePopUp}>
                <LanguagePopUp onCloseClick={handelClose} isVisible={isVisible}/>
            </div>
        </>
    )
}
export default LanguageSelector