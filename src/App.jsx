import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./App.css";
import CategoryTabs from "./components/CategoryTabs/CategoryTabs";
import ProductCard from "./components/ProductCard/ProductCard";
import CalendarToggle from "./components/calendarToggle/CalendarToggle";
import { BASE_URL } from "./constants/constants";
import PriceRangeModal from "./components/PriceRangeModal/PriceRangeModal";


function App() {
  const [places, setPlaces] = useState([]);
  const [selectPlaceId, setSelectPlaceId] = useState(null);
  const [searchParams] = useSearchParams();
  const [isModalOpen, setModalOpen] = useState(false);
  const [histogramData, setHistogramData] = useState([]);

  const toggleModal = () => setModalOpen((prev) => !prev);

  useEffect(() => {
    axios
      .get(`${BASE_URL}places`, {params: searchParams})
      .then((response) => setPlaces(response?.data))
      .catch((error) => console.error(`Something went wrong. ${error.message}.`));
  }, [searchParams]);

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
      
      <CategoryTabs toggleModal={toggleModal} setHistogramData={setHistogramData} />

      <div className="grid">
        {places.map((place) => {
          if (!place.id) return null;

          return (
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
          );
        })}
      </div>
      {isModalOpen && (
        <PriceRangeModal
          isOpen={isModalOpen}
          className="overlay"
          onClose={toggleModal}
          histogramData={histogramData}
        />
      )}
    </>
  );
}

export default App;
