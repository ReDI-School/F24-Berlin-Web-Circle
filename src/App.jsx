import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import CalendarToggle from "./components/calendarToggle/CalendarToggle";
import SearchBar from "./components/SearchBar/SearchBar";
import axios from "axios";

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

  return (
    <>
      <div>
        <CalendarToggle />
      </div>

      <SearchBar />

      <ProductCard
        images={[
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/a766e0e9-1e6f-4b88-b8d5-ce12375c6de8.png?im_w=1200&im_q=highq",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/71d534a9-6699-4fe0-ad82-a9aaf0450b56.png?im_w=1200&im_q=highq",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/3f7a34a4-0052-4d5d-8e81-a75667f48a70.png?im_w=1200&im_q=highq",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/ebbcf8a7-a619-4284-bf02-c8dc208c2670.png?im_w=1200&im_q=highq",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/81d2ee4c-7056-4334-a2e7-3a0e4e3d63ca.png?im_w=1200&im_q=highq",
        ]}
        title="Cozy Apartment in City Center"
        host="Hosted by Wendy and Elisa"
        price="Coming soon"
      />

      {/* Links to room details */}
      <div>
        {places.map((place) => {
          // Ensure a valid link, skipping places without an id
          if (!place.id) return null;
          return (
            <Link to={`/rooms/${place.id}`} key={place.id}>
              <div>{`${place.id} - ${place.title}`}</div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default App;
