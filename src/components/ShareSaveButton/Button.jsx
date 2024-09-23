import React from "react";
import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({ faIcon, label, onClick }) {
  return (
    <button className="save-share-button" onClick={onClick}>
      <div className="button-content">
        <span>
          <FontAwesomeIcon icon={faIcon} className="fa-icon" fill="false" />
        </span>
        {label}
      </div>
    </button>
  );
}
