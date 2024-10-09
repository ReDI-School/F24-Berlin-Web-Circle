import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import CalendarToggle from "./components/calendarToggle/CalendarToggle";
import PersonProfile from "./components/personProfile/PersonProfile";
import SearchBar from "./components/searchBar/SearchBar";

function App() {
  /* const places = [
    { id: "1", name: "Idyllic house by the sea" },
    { id: "2", name: "Studio Zempow / ecological wooden house / photo studio" },
    { id: "3", name: "Funen's best ocean view" },
  ]; */

  const places = [
    { id: "1", 
      title: "Idyllic house by the sea", 
      host: "Hosted by Wendy and Elisa",
      price: "Coming soon",
      image: "src/assets/4f7a276e-9995-4b32-bda6-300de0619b25.webp"},
    { id: "2", title: "Studio Zempow / ecological wooden house / photo studio" },
    { id: "3", title: "Funen's best ocean view" },
    { id: "4", title: "Cozy Apartment in City Center"} 
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

      <div>
        <CalendarToggle />
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
        
        <div>
        {places.map((place) => (
        <ProductCard 
        key={place.id}
        place={place}
      />  
        ))}
       </div>
      {/* FOR TESTING */}
      {/* {places.map((place) => {
        return (
          <Link to={`/rooms/${place.id}`} key={place.id}>
            <div>{`${place.id} - ${place.name}`}</div>
          </Link>
        );
      })} */}
    </>
    
  );
}

export default App;
