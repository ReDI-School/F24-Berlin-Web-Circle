import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import CalendarToggle from "./components/calendarToggle/CalendarToggle";
import PersonProfile from "./components/PersonProfile/PersonProfile";
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

  const handleAirbnbSearch = ({ location, checkIn, checkOut, guests }) => {
    // Logic for home search
  };

  return (
    <>


      <div>
        <CalendarToggle />
      </div>    
      <div>
        {places.map((place, index) => (
          <ProductCard key={index} place={place} />
        ))}
      </div>

      <SearchBar></SearchBar>

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
        images={[
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/a766e0e9-1e6f-4b88-b8d5-ce12375c6de8.png?im_w=1200&im_q=highq",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/71d534a9-6699-4fe0-ad82-a9aaf0450b56.png?im_w=1200&im_q=highq",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/3f7a34a4-0052-4d5d-8e81-a75667f48a70.png?im_w=1200&im_q=highq"
        ]}
        title="Cozy Apartment in City Center"
        host="Hosted by Wendy and Elisa"
        price="Coming soon"/>
    
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