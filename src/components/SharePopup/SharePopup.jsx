import { CloseIcon } from "../../icons/CloseIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faSquareFacebook,
  faWhatsapp,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import "./SharePopup.css";

import {
  faEnvelope,
  faCopy,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

const SharePopup = ({ onClick }) => {
  return (
    <div className="share-modal">
      <div className="modal-header">
        <CloseIcon  onClick={onClick}/>
        <h2>Share this experience</h2>
      </div>

      <div className="modal-content">
        <div className="modal-info">
          <img
            src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/a766e0e9-1e6f-4b88-b8d5-ce12375c6de8.png?im_w=1200&im_q=highq"
            alt="Doja Cat Session"
            className="modal-thumbnail"
          />
          <div className="modal-title">
            <p>Join the Living Room Session with Doja Cat</p>
          </div>
        </div>

        {/* Flexbox for button layout */}
        <div className="modal-buttons">
          <button style={{ border: "1px solid lightgrey" }}>
            <FontAwesomeIcon icon={faCopy} /> Copy Link
          </button>
          <button style={{ border: "1px solid lightgrey" }}>
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </button>

          <button style={{ border: "1px solid lightgrey" }}>
            <i className="icon">💬</i> Messages
          </button>
          <button style={{ border: "1px solid lightgrey" }}>
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </button>
          <button style={{ border: "1px solid lightgrey" }}>
            <FontAwesomeIcon icon={faFacebookMessenger} /> Messenger
          </button>
          <button style={{ border: "1px solid lightgrey" }}>
            <FontAwesomeIcon icon={faSquareFacebook} /> Facebook
          </button>

        <button style={{ border: "1px solid lightgrey" }}>
          <FontAwesomeIcon icon={faXTwitter} /> Twitter
        </button>
        <button style={{ border: "1px solid lightgrey" }}>
          <FontAwesomeIcon icon={faEllipsis} /> More options
        </button>
      </div>
          </div>
                  </div>
  );
};

export default SharePopup;