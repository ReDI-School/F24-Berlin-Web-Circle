import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import CalendarToggle from "./components/calendarToggle/CalendarToggle";
import axios from "axios";
import { BASE_URL } from "./constants/constants";

function App() {
  const [places, setPlaces] = useState([]);
  const [selectPlaceId, setSelectPlaceId] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}places`)
      .then((response) => setPlaces(response?.data))
      .catch((error) =>
        console.error(`Something went wrong. ${error.message}.`)
      );
  }, []);
  const handlePlaceClick = (placeId) => {
    setSelectPlaceId(placeId);
    console.log(placeId);

    axios
      .post(`${BASE_URL}savePlace`, { placeId })
      .then((response) => {
        console.log("Place id sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending place ID:", error.message);
      });
  };

  return (
    <>
      <div>
        <CalendarToggle />
      </div>

      <ProductCard
        images={[
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/a766e0e9-1e6f-4b88-b8d5-ce12375c6de8.png?im_w=1200&im_q=highq",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/71d534a9-6699-4fe0-ad82-a9aaf0450b56.png?im_w=1200&im_q=highq",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/3f7a34a4-0052-4d5d-8e81-a75667f48a70.png?im_w=1200&im_q=highq",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/ebbcf8a7-a619-4284-bf02-c8dc208c2670.png?im_w=1200&im_q=highq",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/81d2ee4c-7056-4334-a2e7-3a0e4e3d63ca.png?im_w=1200&im_q=highq",
        ]}
        title="Cozy Apartment in City Center"
        host="Hosted by Wendy and Elisa"
        price="Coming soon"
      />

      <div>
        {places.map((place) => {
          if (!place.id) return null;
          return (
            <div key={place.id} onClick={() => handlePlaceClick(place.id)}>
              <Link to={`/rooms/${place.id}`} key={place.id}>
                <div>{`${place.id} - ${place.title}`}</div>
                {/* <ProductCard
                  images={place.images}
                  title={place.title}
                  host={place.host}
                  price={place.price}
                /> */}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
