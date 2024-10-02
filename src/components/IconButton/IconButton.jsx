import styles from "./IconButton.module.css";

export default function IconButton({ label, onClick, iconSrc }) {
 return (
   <button className={styles.iconButton} onClick={onClick}>
     <div className={styles.iconButtonContent}>
       <span>

       </span>
       {label}
     </div>
   </button>
 );
}
