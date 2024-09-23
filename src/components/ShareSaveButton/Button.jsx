import React from "react";
import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({ faIcon, label, onClick }) {
  return (
    <button onClick={onClick}>
      <div className="button-container">
        <span className="icon">
          <FontAwesomeIcon icon={faIcon} />
        </span>
        {label}
      </div>
    </button>
  );
}
