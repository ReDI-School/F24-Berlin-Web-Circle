import React from "react";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";
import styles from "./MapDisplay.module.css";
import HomeIcon from "../../icons/HomeIcon";

const MapDisplay = ({ lat, lng }) => {
  return (
    <div className={styles.mainContainer}>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || " "}>
        <Map
          mapId={import.meta.env.VITE_mapId}
          className={styles.mainMap}
          defaultCenter={{ lat: lat, lng: lng }}
          defaultZoom={12}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          zoomControl={true}
          streetViewControl={true}
          mapTypeControl={true}
          fullscreenControl={true}
          cameraControl={true}
        />
        <AdvancedMarker clickable={true} position={{ lat: lat, lng: lng }}>
          <div className={styles.mai}>
            <div className={styles.imgContainer}>
              <HomeIcon width={30} height={30} />
            </div>
          </div>
        </AdvancedMarker>
      </APIProvider>
    </div>
  );
};

export default MapDisplay;
