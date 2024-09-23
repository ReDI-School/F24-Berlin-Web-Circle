import React from "react";
import "./MeetTheHost.css";

const MeetTheHost = ({ data }) => {
  return (
    <div className="host-info-container">
      <h2 className="header">Meet your Host</h2>
      <div className="main-container">
        <div className="leaf-side">
          <div className="round-photo-component">
            <img className="person-img" src={data.image} alt={data.name} />
          </div>
          {data.verified && (
            <div className="verified-container">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                role="img"
                aria-label="check mark"
                className="verifiedicon-svg"
              >
                <title>verified-sheild</title>
                <path d="M13.876 21.464l8.732-8.732-1.532-1.532-7.2 7.149-2.809-2.809-1.532 1.532 4.341 4.392zM16.071 4l9.804 4.392v6.536c0 6.026-4.187 11.694-9.804 13.072-5.617-1.379-9.804-7.047-9.804-13.072v-6.536l9.804-4.391z"></path>
              </svg>
            </div>
          )}
          <div className="person-role-container">
            <h2 className="person-info">{data.name}</h2>
            <div className="role-container">
              {data.role === "Superhost" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  role="img"
                  aria-label="person"
                  focusable="false"
                  className="roleicon-svg"
                >
                  <path d="m8.5 7.6 3.1-1.75 1.47-.82a.83.83 0 0 0 .43-.73V1.33a.83.83 0 0 0-.83-.83H3.33a.83.83 0 0 0-.83.83V4.3c0 .3.16.59.43.73l3 1.68 1.57.88c.35.2.65.2 1 0zm-.5.9a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"></path>
                </svg>
              ) : (
                ""
              )}
              <span className="role">{data.role}</span>
            </div>
          </div>
        </div>

        <div className="right-side">
          <div className="reviews-container">
            <span className="reviews-numbrs">{data.reviews}</span>
            <span className="reviews-text">Reviews</span>
          </div>
          <hr className="borders" />
          <div className="reviews-container">
            <div>
              <span className="reviews-numbrs">{data.rating}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="star-svg"
                role="img"
                aria-label="Star icon"
              >
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
              </svg>
            </div>
            <span className="reviews-text">Rating</span>
          </div>
          <hr className="borders" />
          <div className="reviews-container">
            <span className="reviews-numbrs">{data.yearsHosting}</span>
            <span className="reviews-text">Year hosting</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheHost;
