import styles from "./IconButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconButton({ label, onClick, faIcon }) {
 return (
   <button className={styles.iconButton} onClick={onClick}>
     <div className={styles.iconButtonContent}>
       <span>
       <FontAwesomeIcon icon={faIcon} className="faIcon"/>
       </span>
       {label}
     </div>
   </button>
 );
}
