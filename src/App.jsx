import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import CalendarToggle from "./components/calendarToggle/CalendarToggle";

function App() {

  const places = [
    {
      id: "1",
      title: "Idyllic house by the sea",
      host: "Hosted by Wendy and Elisa",
      price: "Coming soon",
      image: "src/assets/4f7a276e-9995-4b32-bda6-300de0619b25.webp"
    },
    { id: "2", title: "Studio Zempow / ecological wooden house / photo studio" },
    { id: "3", title: "Funen's best ocean view" },
    { id: "4", title: "Cozy Apartment in City Center" },
    // test object with no id:
    { title: "House at a beach" }
  ];

  const handleAirbnbSearch = ({ location, checkIn, checkOut, guests }) => {
    // Logic for home search
  };

  return (
    <>
      <div>
        <CalendarToggle />
      </div>    
      <div>
        {places.map((place) => (
          <ProductCard
            key={place.id}
            place={place}
          />
        ))}
      </div>
    </>
  );
}

export default App;
