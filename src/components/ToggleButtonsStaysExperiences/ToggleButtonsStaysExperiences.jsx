import React from 'react'
import { useState } from 'react';
import styles from "./ToggleButtonsStaysExperiences.module.css"

const ToggleButtonsStaysExperiences = () => {

    const [activeButton, setActiveButton] = useState("stays");

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };


    return (
        <div className={styles.buttonContainer}>
            <button
                className={`${styles.toggleButton} ${activeButton === "stays" ? styles.active : styles.inactive}`}
                onClick={() => handleButtonClick("stays")}
            >Stays
            </button>
            <button
                className={`${styles.toggleButton} ${activeButton === "experiences" ? styles.active : styles.inactive}`}
                onClick={() => handleButtonClick("experiences")}
            >Experiences

            </button>
        </div>
    )
}

export default ToggleButtonsStaysExperiences
