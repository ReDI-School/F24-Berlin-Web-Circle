import { Link } from "react-router-dom";
import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import SearchBar from "./components/searchBar/SearchBar";
import ToggleButtonsStaysExperiences from './components/ToggleButtonsStaysExperiences/ToggleButtonsStaysExperiences'
import { useState } from "react";


function App() {

  const [searchType, setSearchType] = useState("stays");
  const toggleSearchType = (type) => {
    setSearchType(type);
  };

  const places = [
    { id: "1", name: "Idyllic house by the sea" },
    { id: "2", name: "Studio Zempow / ecological wooden house / photo studio" },

    { id: "3", name: "Funen's best ocean view" },
  ];

  const handleAirbnbSearch = ({ location, checkIn, checkOut, guests }) => {
    // Logic for home search
  };

  return (
    <>
    <div>
    <ToggleButtonsStaysExperiences toggleSearchType={toggleSearchType}/>
    </div>
      <div>
        <SearchBar
          searchType={searchType}
          checkIn=""
          checkOut=""
          guests=""
          onSearch={handleAirbnbSearch}
        />
      </div>
       <ProductCard 
        image={"src/assets/4f7a276e-9995-4b32-bda6-300de0619b25.webp"} 
        title={"Cozy Apartment in City Center"}
        host={"Hosted by Wendy and Elisa"}
        price={"Coming soon"}
      
      />
      {/* FOR TESTING */}
      {places.map((place) => {
        return (
          <Link to={`/rooms/${place.id}`} key={place.id}>
            <div>{`${place.id} - ${place.name}`}</div>
          </Link>
        );
      })}
    </>
    
  );
}

export default App;
