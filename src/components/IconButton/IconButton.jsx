import "./IconButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function IconButton({ faIcon, label, onClick }) {
 return (
   <button className="icon-button" onClick={onClick}>
     <div className="icon-button-content">
       <span>
         <FontAwesomeIcon icon={faIcon} className="fa-icon"/>
       </span>
       {label}
     </div>
   </button>
 );
}
