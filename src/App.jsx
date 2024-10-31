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
      .catch((error) => console.error(`Something went wrong. ${error.message}.`));
  }, []);

  const handlePlaceClick = (placeId) => {
    setSelectPlaceId(placeId);
    console.log("Selected Place ID:", placeId);

    axios
      .post(`${BASE_URL}savePlace`, { placeId })
      .then((response) => {
        console.log("Place ID sent successfully:", response.data);
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
            <ProductCard
              key={place.id}
              images={place.images}
              onClick={() => handlePlaceClick(place.id)}
            >
              <Link to={`/rooms/${place.id}`}>
                <h2 className="title">{place.title}</h2>
                <p className="host">{place.host}</p>
                <p className="price">{place.price}</p>
              </Link>
            </ProductCard>
          );
        })}
      </div>
    </>
  );
}

export default App;