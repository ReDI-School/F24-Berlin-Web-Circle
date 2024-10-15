import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import CalendarToggle from "./components/calendarToggle/CalendarToggle";
import axios from "axios";
import {BASE_URL} from "./constants/constants";

function App() {
  const [places, setPlaces] = useState([]);

// fetch places from the Backend
useEffect(()=> {
  axios.get(`${BASE_URL}places`)
  .then(response => setPlaces(response?.data))
  .catch(error => console.error(`Something went wrong. ${error.message}.`))
  }, [])

  const handleAirbnbSearch = ({ location, checkIn, checkOut, guests }) => {
    // Logic for home search
  };

  return (
    <>
      <div>
        <CalendarToggle />
      </div>    
      <div>
        {places.map((place, index) => (
          <ProductCard key={index} place={place} />
        ))}
      </div>
    </>
  );
}

export default App;
