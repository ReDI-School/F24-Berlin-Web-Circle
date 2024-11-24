import React from 'react'
import styles from "./FilterButton.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

const FilterButton = () => {
    return (

            <div className={styles.filterButton}>
                <div className={styles.contentFilter}>
                    <FontAwesomeIcon icon={faSliders} className={styles.icon} />
                    <h6>Filters</h6>
                </div>
            </div>

    )
}

export default FilterButton