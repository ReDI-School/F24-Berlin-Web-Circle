import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import CalendarToggle from "./components/calendarToggle/CalendarToggle";
import CategoryTabs from "./components/CategoryTabs/CategoryTabs";
import axios from "axios";
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
return (
  <>
    <div>
      <CalendarToggle />
    </div>
   <div>
        <CategoryTabs />  
      </div>
      <div className="grid">
        {places.map((place) => {
          if (!place.id) return null;
          return (
            <div key={place.id} onClick={() => handlePlaceClick(place.id)}>
              <ProductCard
                images={place.images}
                title={place.title}
                host={place.host}
                price={place.price}
              />
              {/* Wrap only the text content in Link */}
              <Link to={`/rooms/${place.id}`} className="productLink">
                <h2>{place.title}</h2>
                <p>{place.host}</p>
                <p>{place.price}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;