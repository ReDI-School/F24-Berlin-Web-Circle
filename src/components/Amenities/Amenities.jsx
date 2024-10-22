import {
  WifiIcon,
  KitchenIcon,
  BalconyIcon,
  BackyardIcon,
  FirepitIcon,
  WorkspaceIcon,
  SaunaIcon,
  FireplaceIcon,
  ParkingIcon,
  PetsIcon,
} from "../../icons";
import styles from "./Amenities.module.css";

function Amenities({ amenities, onClick }) {
  const renderIcon = (type) => {
    switch (type) {
      case "kitchen":
        return <KitchenIcon />;
      case "workspace":
        return <WorkspaceIcon />;
      case "sauna":
        return <SaunaIcon />;
      case "balcony":
        return <BalconyIcon />;
      case "fireplace":
        return <FireplaceIcon />;
      case "wifi":
        return <WifiIcon />;
      case "parking":
        return <ParkingIcon />;
      case "pets":
        return <PetsIcon />;
      case "backyard":
        return <BackyardIcon />;
      case "firepit":
        return <FirepitIcon />;
      default:
        return <SaunaIcon />;
    }
  };
  return (
    <div className={styles.amenitiesSection}>
      <h2 className={styles.amenitiesSectionTitle}>What this place offers</h2>
      <ul className={styles.amenitiesContainer}>
        {amenities.map((amenitie, index) => (
          <li key={index} className={styles.amenitiesList}>
            {renderIcon(amenitie.type)}
            <span className={styles.amenitiesDescription}>
              {amenitie?.text}
            </span>
          </li>
        ))}
      </ul>
      <button className={styles.showAmenitiesButton} onClick={onClick}>
        Show all 20 amenities
      </button>
    </div>
  );
}

export default Amenities;
