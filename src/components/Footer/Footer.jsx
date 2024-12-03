import React, { useState } from "react";
import styles from "./Footer.module.css"; // Import modular CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [activeIcon, setActiveIcon] = useState(null); // State for active icon

  // Event handler for icon click
  const handleClick = (event, iconName) => {
    event.preventDefault(); // Prevent default action (e.g., link navigation)
    setActiveIcon(iconName); // Set the clicked icon as active
  };

  return (
    <>
      {/* Mobile Fixed Footer */}
      <div className={styles.mobileFooter}>

        {/* Explore Icon */}
        <a
          href="/explore"
          className={`${styles.mobileIcon} ${
            activeIcon === "explore" ? styles.active : ""
          }`}
          onClick={(event) => handleClick(event, "explore")}
        >
          <FontAwesomeIcon icon={faSearch} className={styles.icon} />
          <span className={styles.iconText}>Explore</span>
        </a>
       

        {/* Wishlist Icon */}
        <a
          href="/wishlist"
          className={`${styles.mobileIcon} ${
            activeIcon === "wishlist" ? styles.active : ""
          }`}
          onClick={(event) => handleClick(event, "wishlist")}
        >
          <FontAwesomeIcon icon={faHeart} className={styles.icon} />
          <span className={styles.iconText}>Wishlists</span>
        </a>

        <a
          href="/login"
          className={`${styles.mobileIcon} ${
            activeIcon === "login" ? styles.active : ""
          }`}
          onClick={(event) => handleClick(event, "login")}
        >
          <FontAwesomeIcon icon={faUser} className={styles.icon} />
          <span className={styles.iconText}>Log in</span>
        </a>
      </div>

      {/* Desktop Footer */}
      <footer className={styles.footer}>
        <div>© 2024 Airbnb, Inc.</div>
        <div className={styles.socialMedia}>
          <a
            href="https://www.facebook.com/airbnb"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <FontAwesomeIcon icon={faFacebook} className={styles.icons}/>
          </a>
          <a
            href="https://www.twitter.com/airbnb"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <FontAwesomeIcon icon={faTwitter} className={styles.icons}/>
          </a>
          <a
            href="https://www.instagram.com/airbnb"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <FontAwesomeIcon icon={faSquareInstagram} className={styles.icons}/>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
