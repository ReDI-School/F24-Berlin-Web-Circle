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

    <div className="grid">
      {places.map((place) => {
        if (!place.id) return null;
        return (
          <Link to={`/rooms/${place.id}`} key={place.id}>
            <ProductCard 
              images={place.images}
              title={place.title}
              host={place.host}
              price={place.price}
              onClick={() => handlePlaceClick(place.id)} // Optional: Handle click here if needed
            />
          </Link>
        );
      })}
    </div>
  </>
);
  }

export default App;
