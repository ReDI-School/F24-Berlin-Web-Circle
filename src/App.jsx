import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import PersonProfile from "./components/personProfile/PersonProfile";
import ProductCard from "./components/ProductCard/ProductCard";
import SearchBar from "./components/searchBar/SearchBar";
function App() {
  const [count, setCount] = useState(0);
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
        <SearchBar
          checkIn=""
          checkOut=""
          guests=""
          onSearch={handleAirbnbSearch}
        />
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <PersonProfile
        title="Meet your host"
        image="https://a0.muscache.com/im/pictures/user/d62627ea-ea22-4cf1-b38a-152f1f86a9ed.jpg"
        name="Raus"
        role="Superhost"
        verified={true}
        reviews={74}
        rating={4.85}
        yearsHosting={1}
      />
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
