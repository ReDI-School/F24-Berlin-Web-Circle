
import React ,{ useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PersonProfile from "./components/personProfile/PersonProfile";
import SearchBar from './components/searchBar/SearchBar';
import { Link } from 'react-router-dom'

function App() {
  
  const [count, setCount] = useState(0);
  const places = [{id: "1", name: "Idyllic house by the sea"}, {id: "2", name: "Studio Zempow / ecological wooden house / photo studio"},
    {id: "3", name: "Funen's best ocean view"}]
  
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
      {/* FOR TESTING */}
      {
        places.map((place) => {
          return (
            <Link to={`/rooms/${place.id}`} key={place.id}>
              <div>
                {`${place.id} - ${place.name}`}
              </div>
            </Link>
          )
        })
      }
    </>
  );
}

export default App;
