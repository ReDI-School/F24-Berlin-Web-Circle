import { Link } from "react-router-dom";
import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import PriceRangeFilter from "./components/priceRange/PriceRangeFilter";

function App() {
  const places = [
    { id: "1", name: "Idyllic house by the sea" },
    { id: "2", name: "Studio Zempow / ecological wooden house / photo studio" },
    { id: "3", name: "Funen's best ocean view" },
  ];

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

  return (
    <>
      <PriceRangeFilter histogramData={histogramData}/>
      
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
