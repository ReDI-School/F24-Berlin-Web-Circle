import { WifiIcon } from "../../icons/WifiIcon";
import { KitchenIcon } from "../../icons/KitchenIcon";
import { BalconyIcon } from "../../icons/BalconyIcon";
import { BackyardIcon } from "../../icons/BackyardIcon";
import { FirepitIcon } from "../../icons/FirepitIcon";
import { WorkspaceIcon } from "../../icons/WorkspaceIcon";
import { SaunaIcon } from "../../icons/SaunaIcon";
import { FireplaceIcon } from "../../icons/FireplaceIcon";
import { ParkingIcon } from "../../icons/ParkingIcon";
import { PetsIcon } from "../../icons/PetsIcon";
import styles from "./Amenities.module.css";

function Amenities({ title, amenities, onClick }) {
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
      <h2 className={styles.amenitiesSectionTitle}>{title}</h2>
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
