import ReservationCard from "../components/ReservationCard/ReservationCard";
import FavoriteStay from "../components/FavoriteStay/FavoriteStay";
import HostSummary from "../components/HostSummary/HostSummary";
import hostImage from "../assets/images/host-raus.webp";
import MapView from "../components/MapView/MapView";
import mapViewSampleImg from "./../assets/map-view-sample.png";
import ProductGallery from "../components/ProductGallery/ProductGallery";
import ProductHighlight from "../components/ProductHighlight/ProductHighlight";
import ProductSummary from "../components/ProductSummary/ProductSummary";
import ProductDescription from "../components/ProductDescription/ProductDescription";
import IconButton from "../components/IconButton/IconButton";
import {
  faArrowUpFromBracket,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ProductPage.module.css";
import AboveProductTitle from "../components/AboveProductTitle/AboveProductTitle";
import ReviewSummary from "../components/ReviewSummary/ReviewSummary";
import ReviewsSection from "../components/ReviewsSection/ReviewsSection";
import MeetYourHostSection from "../components/MeetYourhostSection/MeetYourHostSection";
import Amenities from "../components/Amenities/Amenities";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [error, setError] = useState(null);
  const [place, setPlace] = useState(null);
  const { productId } = useParams();
  console.log(productId);
  useEffect(() => {
    axios
      .get(`http://localhost:8800/places/${productId}`)
      .then((response) => setPlace(response.data))

      .catch((err) =>
        setError(err.response?.data?.error || "Something went wrong")
      );
  }, [productId]);

  // console.log(place);


  /* ============== Reservation card data ============== */
  const checkInDate = new Date("2025-01-01");
  const checkOutDate = new Date("2025-01-16");
  const pricePerNight = 146;
  const cleaningFee = 10;
  const airbnbServiceFee = 10;
  const longStayDiscount = 30;
  const nightsCountForDiscount = 5;

  const [guestsList, setGuestsList] = useState([
    { typeofGuest: 'Adults', numberOfGuests: 1 },
    { typeofGuest: 'Children', numberOfGuests: 0 },
    { typeofGuest: 'Infants', numberOfGuests: 0 },
    { typeofGuest: 'Pets', numberOfGuests: 0 },
  ]);
    const guestsData = [
        {index:1, title:'Adults', description:'Ages 13 or above', descriptionType:'string'},
        {index:2, title:'Children', description:'Ages 2 - 12', descriptionType:'string'},
        {index:3, title:'Infants', description:'Under 2', descriptionType:'string'},
        {index:4, title:'Pets', description:'Bringing a service animal?', descriptionType:'link'}
    ];

    const handleGuestClick = (updatedGuest) => {
      setGuestsList((prevList) =>
        prevList.map((guest) =>
          guest.typeofGuest === updatedGuest.typeofGuest
            ? { ...guest, numberOfGuests: updatedGuest.numberOfGuests }
            : guest
        )
      );
    };
 /* ============== End of Reservation card data ============== */

  const highlights = [
    {
      type: "CHECK_IN",
      text: "Self check-in",
      subText: "Check yourself in with the lockbox.",
    },
    {
      type: "AWARD",
      text: "Superhost",
      subText: "Superhosts are experienced, highly rated Hosts.",
    },
    {
      type: "WIFI",
      text: "Free Wifi",
      subText: "Superhosts are experienced, highly rated Hosts.",
    },
    {
      type: "CANCELLATION",
      text: "Free cancellation",
      subText: "Get a full refund if you change your mind.",
    },
  ];

  const amenities = [
    { type: "kitchen", text: "Kitchen" },
    { type: "workspace", text: "Dedicated workspace" },
    { type: "sauna", text: "Sauna" },
    { type: "balcony", text: "Patio or balcony" },
    { type: "fireplace", text: "Indoor fireplace" },
    { type: "wifi", text: "Wifi" },
    { type: "parking", text: "Free parking on premises" },
    { type: "pets", text: "Pets allowed" },
    { type: "backyard", text: "Backyard" },
    { type: "firepit", text: "Fire pit" },
  ];

  const reviews = [
    {
      name: "Julia",
      picture:
        "https://a0.muscache.com/im/pictures/user/5c7af12d-86a7-48f9-a58b-2dfcb88399b7.jpg?im_w=240",
      rating: 5,
      reviewText:
        "It was really super relaxing days with lots of peace and quiet. So if you need a little break, I can definitely recommend the tiny house.",
      date: "2024-09-22",
    },
    {
      name: "Eef",
      picture:
        "https://a0.muscache.com/im/pictures/user/d1b646f8-16d9-4469-8d26-190b944ce662.jpg?im_w=240",
      rating: 5,
      reviewText:
        "It's a nice boat and beautiful surroundings! Lots of walking and cycling, all right from the place of stay",
      date: "2024-09-05",
    },
    {
      name: "Nicole",
      picture:
        "https://a0.muscache.com/im/pictures/user/User-477216581/original/7daddddf-7c73-4aad-b631-69859d1f1622.jpeg?im_w=240",
      rating: 5,
      reviewText:
        "we liked the houseboat, surroundings and location very much. people were also very friendly and accommodating",
      date: "2024-04-05",
    },
  ];

  function handleShare() {
    alert("Share this experience");
  }
  function handleSave() {
    alert("Save this experience");
  }

  function handleShowAmenities() {
    alert("Here is the list of all amenities!");
  }

  return (
    <div className={styles.MainProductPage}>
      <div className={styles.ProductPageContainer}>
        <div className={styles.titlePage}>
          {!!place && !!place.title && <AboveProductTitle
            title={place.title}
          />}
          <div className={styles.IconButton}>
            <IconButton
              faIcon={faArrowUpFromBracket}
              label="Share"
              onClick={handleShare}
            />
            <IconButton faIcon={faHeart} label="Save" onClick={handleSave} />
          </div>
        </div>
        {!!place && <ProductGallery
          bigImage={place.images[0]}
          smallTopLeftImage={place.images[1]}
          smallTopRightImage={place.images[2]}
          smallBottomLeftImage={place.images[3]}
          smallBottomRightImage={place.images[4]}
        />}
        <div className={styles.ProductDescriptionContainer}>
          <div className={styles.ProductDescription}>
            <ProductSummary
              accommodation={"Entire rental unit"}
              address={"Berlin, Germany"}
              guests={{ key: "guest", value: 3 }}
              bedrooms={{ key: "bedroom", value: 1 }}
              beds={{ key: "bed", value: 3 }}
              baths={{ key: "bath", value: 1 }}
              starGrade={4.65}
              reviews={23}
            />
            <FavoriteStay />
            <HostSummary
              hostName="Raus"
              hostingDuration={1}
              role="Superhost"
              profilePicUrl={hostImage}
            />
            <ProductHighlight highlights={highlights} />
            <hr className={styles.separator} />
            <ProductDescription
              descriptionPlace="The apartment consists of a large living room, a private, large bathroom with a bathtub and a high space, which is suitable for the storage of luggage and is accessed by a staircase.accessed by a staircase"
              descriptionSpace="The apartment starts from a quiet courtyard and has its own entrance, which does not depart from the general stairwell."
              guestAccess="You have access to all areas of the flat. The flat has its own entrance."
              otherThings="Do not smoke in rooms!"
            />{" "}
            <hr className={styles.separator} />
            <Amenities
              amenities={amenities}
              title="What this place offers"
              onClick={handleShowAmenities}
            />
          </div>
          <div className={styles.ReservationCard}>
            <ReservationCard 
               checkInDate={checkInDate}
               checkOutDate={checkOutDate}
               pricePerNight={pricePerNight}
               cleaningFee={cleaningFee}
               airbnbServiceFee={airbnbServiceFee}
               longStayDiscount={longStayDiscount}
               nightsCountForDiscount={nightsCountForDiscount}
               guestsData={guestsData}     
               onGuestChange={handleGuestClick} 
               guestsList={guestsList}  
            />
          </div>
        </div>
        <hr className={styles.separator} />
        <ReviewSummary
          totalAvgRating={4.91}
          totalReviewsCount={200}
          ratings={{
            cleanlinessAvgRating: 4.8,
            accuracyAvgRating: 4.9,
            checkInAvgRating: 5.0,
            communicationAvgRating: 5.0,
            locationAvgRating: 4.9,
            valueAvgRating: 4.6,
            starTotals: {
              fiveStar: 130,
              fourStar: 50,
              threeStar: 10,
              twoStar: 6,
              oneStar: 4,
            },
          }}
        />
        {/* <IconButton
          faIcon={faArrowUpFromBracket}
          label="Share"
          onClick={handleShare}
        />
        <IconButton faIcon={faHeart} label="Save" onClick={handleSave} /> */}
        <div className={styles.reviews}>
          <ReviewsSection reviews={reviews} />
        </div>
        <MapView
          mapViewSampleImg={mapViewSampleImg}
          address="Königslutter am Elm, Niedersachsen, Germany"
          addressDescription="In the midst of a diverse nature park, you will find yourself surrounded by hilly landscapes covered with dense forests, moors, gorgeous heaths and salt marshes. The surroundings invite you to explore them at any time of the year: hike through one of the largest beech forests in the region, where you will occasionally encounter rare forest dwellers, go mushroom hunting in a popular hiking area nearby, or take a bike ride to a vantage point overlooking aln the midst of a diverse nature park, you will In the midst of a diverse nature park, you will find yourself surrounded by hilly landscapes covered with dense forests, moors, gorgeous heaths and salt marshes. The surroundings invite you to explore them at any time of the year: hike through one of the largest beech forests in the region, where you will occasionally encounter rare forest dwellers, go mushroom hunting in a popular hiking area nearby, or take a bike ride to a vantage point overlooking aln the midst of a diverse nature park, you will"
        />
      </div>
      <MeetYourHostSection />
    </div>
  );
};

export default ProductPage;
