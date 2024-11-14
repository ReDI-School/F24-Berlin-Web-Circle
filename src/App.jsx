import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import DataIncrementsButtonForTheCalendar from "./components/DataIncrementsButtonForTheCalendar/DataIncrementsButtonForTheCalendar";
import ProductCard from "./components/ProductCard/ProductCard";
import CalendarToggle from "./components/calendarToggle/CalendarToggle";
import PriceRangeFilter from "./components/priceRange/PriceRangeFilter";
import { BASE_URL } from "./constants/constants";

function App() {
  const [places, setPlaces] = useState([]);
  const [selectPlaceId, setSelectPlaceId] = useState(null);

  const histogramData = [
    { from: 16, to: 23, count: 2 },
    { from: 37, to: 44, count: 13 },
    { from: 55, to: 63, count: 30 },
    { from: 76, to: 84, count: 50 },
    { from: 95, to: 103, count: 90 },
    { from: 116, to: 123, count: 60 },
    { from: 135, to: 143, count: 20 },
    { from: 156, to: 156, count: 12 },
    { from: 174, to: 182, count: 15 },
    { from: 194, to: 202, count: 8 },
    { from: 216, to: 224, count: 5 },
    { from: 233, to: 242, count: 10 },
    { from: 254, to: 261, count: 25 },
    { from: 273, to: 281, count: 40 },
    { from: 292, to: 304, count: 22 },
  ];

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
      
      <DataIncrementsButtonForTheCalendar />

      <PriceRangeFilter histogramData= {histogramData}/>

      <div className="grid">
        {places.map((place) => {
          if (!place.id) return null;

          return (
            <>
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

            </>
          );
        })}
      </div>
    </>
  );
}

export default App;