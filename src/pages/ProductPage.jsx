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
import ShortcutsPopUp from "../components/ReservationCard/ShortcutsPopUp/ShortcutsPopUp";
import GuestCountPopUp from "../components/ReservationCard/GuestCountPopUp/GuestCountPopUp";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [error, setError] = useState(null);
  const [place, setPlace] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8800/places/${productId}`)
      .then((response) => setPlace(response.data))
      .catch((err) =>
        setError(err.response?.data?.error || "Something went wrong")
      );
  }, [productId]);

<<<<<<< HEAD
  //TODO add this into the places.json
  const meetyourHost = {
    "isVerified": "true",
    "profileText": "Hi, we are Smiling Host, we enjoy giving other people a pleasant time. That's the reason we start",
    "responseRate": "100%",
    "responseTime": "an hour"
  }

=======
>>>>>>> 6fd6e67f1c5849ac566a76928150a784d836d7b7
  /* ============== Reservation card data ============== */
  const [isShortcutsPopupVisible, setIsShortcutsPopupVisible] = useState(false);
  const [isGuestCountPopupVisible, setIsGuestCountPopupVisible] =
    useState(false);
  const [showGuests, setShowGuests] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [guestsList, setGuestsList] = useState([
    { typeofGuest: "Adults", numberOfGuests: 1 },
    { typeofGuest: "Children", numberOfGuests: 0 },
    { typeofGuest: "Infants", numberOfGuests: 0 },
    { typeofGuest: "Pets", numberOfGuests: 0 },
  ]);

  const toggleShortcutsPopup = () => {
    setIsShortcutsPopupVisible((prevState) => !prevState);
  };

  const toggleGuestCountPopup = () => {
    setIsGuestCountPopupVisible((prevState) => !prevState);
  };

  const handleGuestClick = (updatedGuest) => {
    setGuestsList((prevList) =>
      prevList.map((guest) =>
        guest.typeofGuest === updatedGuest.typeofGuest
          ? { ...guest, numberOfGuests: updatedGuest.numberOfGuests }
          : guest
      )
    );
  };

<<<<<<< HEAD
  const defaultCheckInDate = "10/20/2024";
  const defaultCheckOutDate = "10/25/2024";
  const pricePerNight = 146;
  const cleaningFee = 10;
  const airbnbServiceFee = 10;
  const longStayDiscount = 30;
  const nightsCountForDiscount = 5;
  const minStayNights = 3;
  const isBookingOpen = true;
=======
  const defaultCheckInDate = '10/20/2024'
  const defaultCheckOutDate = '10/25/2024'
  const pricePerNight = 146
  const cleaningFee = 10
  const airbnbServiceFee = 10
  const longStayDiscount = 30
  const nightsCountForDiscount = 5
  const minStayNights = 3
  const isBookingOpen = true
>>>>>>> 6fd6e67f1c5849ac566a76928150a784d836d7b7
  const allowGuestsNumber = {
    peopleNumber: 6,
    petsNumber: 2,
  };

  /* ============== End of Reservation card data ============== */

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
    <>
      {!!place && (
        <div className={styles.MainProductPage}>
          <div className={styles.ProductPageContainer}>
            <div className={styles.titlePage}>
              {!!place.title && <AboveProductTitle title={place.title} />}
              <div className={styles.IconButton}>
                <IconButton
                  faIcon={faArrowUpFromBracket}
                  label="Share"
                  onClick={handleShare}
                />
                <IconButton
                  faIcon={faHeart}
                  label="Save"
                  onClick={handleSave}
                />
              </div>
            </div>
            {!!place.images && (
              <ProductGallery
                bigImage={place.images[0]}
                smallTopLeftImage={place.images[1]}
                smallTopRightImage={place.images[2]}
                smallBottomLeftImage={place.images[3]}
                smallBottomRightImage={place.images[4]}
              />
            )}
<<<<<<< HEAD
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
                {!!place.highlights && (
                  <ProductHighlight highlights={place.highlights} />
                )}
                <hr className={styles.separator} />
                <ProductDescription
                  descriptionPlace="The apartment consists of a large living room, a private, large bathroom with a bathtub and a high space, which is suitable for the storage of luggage and is accessed by a staircase.accessed by a staircase"
                  descriptionSpace="The apartment starts from a quiet courtyard and has its own entrance, which does not depart from the general stairwell."
                  guestAccess="You have access to all areas of the flat. The flat has its own entrance."
                  otherThings="Do not smoke in rooms!"
                />{" "}
                <hr className={styles.separator} />
                {!!place.amenities && (
                  <Amenities
                    amenities={place.amenities}
                    title="What this place offers"
                    onClick={handleShowAmenities}
                  />
                )}
              </div>
              <div className={styles.ReservationCard}>
                <ReservationCard
                  defaultCheckInDate={defaultCheckInDate}
                  defaultCheckOutDate={defaultCheckOutDate}
                  pricePerNight={pricePerNight}
                  cleaningFee={cleaningFee}
                  airbnbServiceFee={airbnbServiceFee}
                  longStayDiscount={longStayDiscount}
                  nightsCountForDiscount={nightsCountForDiscount}
                  onGuestChange={handleGuestClick}
                  guestsList={guestsList}
                  allowGuestsNumber={allowGuestsNumber}
                  minStayNights={minStayNights}
                  isBookingOpen={isBookingOpen}
                  toggleShortcutsPopup={toggleShortcutsPopup}
                  toggleGuestCountPopup={toggleGuestCountPopup}
                  setShowGuests={setShowGuests}
                  showGuests={showGuests}
                  showCalendar={showCalendar}
                  setShowCalendar={setShowCalendar}
                />
              </div>
              {isShortcutsPopupVisible && (
                <ShortcutsPopUp
                  isVisible={isShortcutsPopupVisible}
                  onClose={toggleShortcutsPopup}
                  showCalendar={showCalendar}
                  setShowCalendar={setShowCalendar}
                />
              )}
              {isGuestCountPopupVisible && (
                <GuestCountPopUp
                  isVisible={isGuestCountPopupVisible}
                  onClose={toggleGuestCountPopup}
                  showGuests={showGuests}
                  setShowGuests={setShowGuests}
                />
              )}
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
=======
          {isGuestCountPopupVisible && (
              <GuestCountPopUp
                isVisible={isGuestCountPopupVisible}
                onClose={toggleGuestCountPopup}
                showGuests={showGuests}
                setShowGuests={setShowGuests}
              />
            )}
        </div>
        <hr className={styles.separator} />
        {!!place.reviewSummary && <ReviewSummary
          totalAvgRating={place.reviewSummary.valueAvgRating}
          totalReviewsCount={place.reviewSummary.totalReviewsCount}
          ratings={{
            cleanlinessAvgRating: place.reviewSummary.ratings.cleanlinessAvgRating,
            accuracyAvgRating: place.reviewSummary.ratings.accuracyAvgRating,
            checkInAvgRating: place.reviewSummary.ratings.checkInAvgRating,
            communicationAvgRating: place.reviewSummary.ratings.communicationAvgRating,
            locationAvgRating: place.reviewSummary.ratings.locationAvgRating,
            valueAvgRating: place.reviewSummary.ratings.valueAvgRating,
            starTotals: {
              fiveStar: place.reviewSummary.ratings.starTotals.fiveStar,
              fourStar: place.reviewSummary.ratings.starTotals.fourStar,
              threeStar: place.reviewSummary.ratings.starTotals.threeStar,
              twoStar: place.reviewSummary.ratings.starTotals.twoStar,
              oneStar: place.reviewSummary.ratings.starTotals.oneStar,
            },
          }}
        />}
        {/* <IconButton
>>>>>>> 6fd6e67f1c5849ac566a76928150a784d836d7b7
          faIcon={faArrowUpFromBracket}
          label="Share"
          onClick={handleShare}
        />
        <IconButton faIcon={faHeart} label="Save" onClick={handleSave} /> */}
            {!!place.reviews && (
              <div className={styles.reviews}>
                <ReviewsSection reviews={place.reviews} />
              </div>
            )}
            <MapView
              mapViewSampleImg={mapViewSampleImg}
              address="Königslutter am Elm, Niedersachsen, Germany"
              addressDescription="In the midst of a diverse nature park, you will find yourself surrounded by hilly landscapes covered with dense forests, moors, gorgeous heaths and salt marshes. The surroundings invite you to explore them at any time of the year: hike through one of the largest beech forests in the region, where you will occasionally encounter rare forest dwellers, go mushroom hunting in a popular hiking area nearby, or take a bike ride to a vantage point overlooking aln the midst of a diverse nature park, you will In the midst of a diverse nature park, you will find yourself surrounded by hilly landscapes covered with dense forests, moors, gorgeous heaths and salt marshes. The surroundings invite you to explore them at any time of the year: hike through one of the largest beech forests in the region, where you will occasionally encounter rare forest dwellers, go mushroom hunting in a popular hiking area nearby, or take a bike ride to a vantage point overlooking aln the midst of a diverse nature park, you will"
            />
          </div>
          {!!place.hostSummary && <MeetYourHostSection
            image={place.hostSummary.profilePicUrl}
            name={place.hostSummary.hostName}
            role={place.hostSummary.role}
            verified={meetyourHost.isVerified}
            reviews={place.reviewSummary.totalReviewsCount}
            rating={place.reviewSummary.valueAvgRating}
            yearsHosting={place.hostSummary.hostingDuration}
            profileText={meetyourHost.profileText}
            responseRate={meetyourHost.responseRate}
            responseTime={meetyourHost.responseTime}
          />}
        </div>
      )}
    </>
  );
};

export default ProductPage;
