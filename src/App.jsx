import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import "./App.css";
import CategoryTabs from "./components/CategoryTabs/CategoryTabs";
import ProductCard from "./components/ProductCard/ProductCard";
import CalendarToggle from "./components/calendarToggle/CalendarToggle";
import { BASE_URL } from "./constants/constants";
import PriceRangeModal from "./components/PriceRangeModal/PriceRangeModal";
import useOutsideClick from "./hooks/useOutsideClick";


function App() {
  const [places, setPlaces] = useState([]);
  const [selectPlaceId, setSelectPlaceId] = useState(null);
  const [searchParams] = useSearchParams();
  const { modalIsVisible, setModalIsVisible, closeModal } = useOutletContext();
  const [isModalOpen, setModalOpen] = useState(false);
  const [histogramData, setHistogramData] = useState([]);

  const toggleModal = () => setModalOpen((prev) => !prev);

  const priceRangeRef = useOutsideClick(() => setModalOpen(false))

	useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modalOpen');
    } else {
      document.body.classList.remove('modalOpen');
    }
  }, [isModalOpen]);

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
    <div> 
      <div>
        <CalendarToggle />
      </div>
      
      <CategoryTabs toggleModal={toggleModal} setHistogramData={setHistogramData} />

      <div className="grid">
        {places.length === 0 || places.every((place) => !place.id) ? (
          <div className="noCategoryMessage">Sorry, no places were found in this category</div>
        ) : (
          places.map(
            (place) =>
              place.id && (
              <ProductCard
                key={place.id}
                images={place.images}
                linkTo={`/rooms/${place.id}`}
                onClick={() => handlePlaceClick(place.id)}
                modalIsVisible={modalIsVisible}
                setModalIsVisible={setModalIsVisible}
                closeModal={closeModal}
              >
                <h2 className="title">{place.title}</h2>
                <p className="host">{place.host}</p>
                <p className="price">{place.price}</p>
              </ProductCard>
            )
          )
        )}
      </div>

      {isModalOpen && (
        <PriceRangeModal
          isOpen={isModalOpen}
          className="overlay"
          onClose={toggleModal}
          histogramData={histogramData}
          priceRangeRef={priceRangeRef}
        />
      )}
    </div>
  );
}

export default App;
