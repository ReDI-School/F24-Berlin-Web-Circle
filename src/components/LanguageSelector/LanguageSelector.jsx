import React from 'react'
import globe_icon from "../../assets/globe_icon.svg"
import styles from "./LanguageSelector.module.css"


const LanguageSelector = () => {
    return (
        <div className={styles.languageSelector}>
            <a href="/language-selector">
            <img src={globe_icon} className={styles.globe_icon} alt="A globe icon as a link to select the language" />
            </a>
        </div>
    )
}

export default LanguageSelector