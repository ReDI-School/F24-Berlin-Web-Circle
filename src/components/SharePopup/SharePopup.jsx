import { CloseIcon } from "../../icons/CloseIcon";
import styles from "./SharePopup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faSquareFacebook,
  faWhatsapp,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope,
  faCopy,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

const SharePopup = ({ onClick }) => {
  return (
    <div className={styles.shareModal}>
        {/* Pass the onClick prop to CloseIcon */}
        <CloseIcon onClick={onClick} />
        <h2 className={styles.text}>Share this experience</h2>


      <div className={styles.modalContent}>
        <div className={styles.modalInfo}>
          <img
            src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/a766e0e9-1e6f-4b88-b8d5-ce12375c6de8.png?im_w=1200&im_q=highq"
            alt="Doja Cat Session"
            className={styles.modalThumbnail}
          />
          <div className={styles.modalTitle}>
            <p>Join the Living Room Session with Doja Cat</p>
          </div>
        </div>

        {/* Flexbox for button layout */}
        <div className={styles.modalButtons}>
          <button >
            <FontAwesomeIcon icon={faCopy} /> Copy Link
          </button>
          <button>
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </button>
          <button>
            <i className="icon">💬</i> Messages
          </button>
          <button>
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </button>
          <button>
            <FontAwesomeIcon icon={faFacebookMessenger} /> Messenger
          </button>
          <button>
            <FontAwesomeIcon icon={faSquareFacebook} /> Facebook
          </button>
          <button>
            <FontAwesomeIcon icon={faXTwitter} /> Twitter
          </button>
          <button>
            <FontAwesomeIcon icon={faEllipsis} /> More options
          </button>
        </div>
      </div>
    </div>
  );
};

export default SharePopup;