import React from "react";
import styles from "./AboveProductTitle.module.css";

const AboveProductTitle = ({ title }) => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.text}>{title}</h1>
    </div>
  );
};

export default AboveProductTitle;
