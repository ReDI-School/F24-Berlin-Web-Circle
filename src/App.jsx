import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import CalendarToggle from "./components/calendarToggle/CalendarToggle";
import axios from "axios";
import CategoryTabs from "./components/CategoryTabs/CategoryTabs";

function App() {
  const [bakendMessage, setBakendMessage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8800/");
        setBakendMessage(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const places = [
    {
      id: 1,
      title: "Idyllic house by the sea",
      host: "Hosted by Wendy and Elisa",
      price: "Coming soon",
      image: "src/assets/4f7a276e-9995-4b32-bda6-300de0619b25.webp",
    },
    {
      id: 2,
      title: "Studio Zempow / ecological wooden house / photo studio",
    },
    { id: 3, title: "Funen's best ocean view" },
    { id: 4, title: "Cozy Apartment in City Center" },
    // test object with no id:
    { title: "House at a beach" },
  ];

  const handleAirbnbSearch = ({ location, checkIn, checkOut, guests }) => {
    // Logic for home search
  };

  return (
    <>
      <h1>{bakendMessage}</h1>
      <div>
        <CalendarToggle />
      </div>  
      <div>
        <CategoryTabs />  
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
