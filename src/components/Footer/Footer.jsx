import "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div>© 2024 Airbnb, Inc.</div>
      <div className="socialMedia">

        <a
          href="https://www.facebook.com/airbnb" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ marginLeft: "10px", color: "black", fontSize: "20px"}}
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>

        <a
          href="https://www.twitter.com/airbnb" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ marginLeft: "10px", color: "black", fontSize: "20px" }}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>

        <a
          href="https://www.instagram.com/airbnb" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ marginLeft: "10px", color: "black",fontSize: "20px" }}
        >
          <FontAwesomeIcon icon={faSquareInstagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;