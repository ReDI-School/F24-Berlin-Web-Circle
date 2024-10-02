import "./IconButton.css";

export default function IconButton({ label, onClick, iconSrc }) {
 return (
   <button className="icon-button" onClick={onClick}>
     <div className="icon-button-content">
       <span>
        <img src={iconSrc} />
       </span>
       {label}
     </div>
   </button>
 );
}
