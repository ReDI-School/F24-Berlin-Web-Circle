import React from "react";
import styles from "./PersonProfile.module.css";

const PersonProfile = ({
  title,
  image,
  name,
  role,
  verified,
  reviews,
  rating,
  yearsHosting,
}) => {
  return (
    <div className={styles.hostInfoContainer}>
      <h2 className={styles.header}>{title}</h2>
      <div className={styles.mainContainer}>
        <div className={styles.leafSide}>
          <div className={styles.roundPhotoComponent}>
            <img className={styles.personImg} src={image} alt={name} />
          </div>
          {verified && (
            <div className={styles.verifiedContainer}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                role="img"
                aria-label="check mark"
                className={styles.verifiediconSvg}
              >
                <title>verified-sheild</title>
                <path d="M13.876 21.464l8.732-8.732-1.532-1.532-7.2 7.149-2.809-2.809-1.532 1.532 4.341 4.392zM16.071 4l9.804 4.392v6.536c0 6.026-4.187 11.694-9.804 13.072-5.617-1.379-9.804-7.047-9.804-13.072v-6.536l9.804-4.391z"></path>
              </svg>
            </div>
          )}
          <div className={styles.personRoleContainer}>
            <h2 className={styles.personInfo}>{name}</h2>
            <div className={styles.roleContainer}>
              {role === "Superhost" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  role="img"
                  aria-label="person"
                  focusable="false"
                  className={styles.roleiconSvg}
                >
                  <path d="m8.5 7.6 3.1-1.75 1.47-.82a.83.83 0 0 0 .43-.73V1.33a.83.83 0 0 0-.83-.83H3.33a.83.83 0 0 0-.83.83V4.3c0 .3.16.59.43.73l3 1.68 1.57.88c.35.2.65.2 1 0zm-.5.9a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"></path>
                </svg>
              ) : (
                ""
              )}
              <span className={styles.role}>{role}</span>
            </div>
          </div>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.reviewsContainer}>
            <span className={styles.reviewsNumbrs}>{reviews}</span>
            <span className={styles.reviewsText}>Reviews</span>
          </div>
          <hr className={styles.borders} />
          <div className={styles.reviewsContainer}>
            <div>
              <span className={styles.reviewsNumbrs}>{rating}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={styles.starSvg}
                role="img"
                aria-label="Star icon"
              >
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
              </svg>
            </div>
            <span className={styles.reviewsText}>Rating</span>
          </div>
          <hr className={styles.borders} />
          <div className={styles.reviewsContainer}>
            <span className={styles.reviewsNumbrs}>{yearsHosting}</span>
            <span className={styles.reviewsText}>Year hosting</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonProfile;
