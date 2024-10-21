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


const ProductPage = () => {
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

  const reviews = [{
      name: "Julia",
      picture: "https://a0.muscache.com/im/pictures/user/5c7af12d-86a7-48f9-a58b-2dfcb88399b7.jpg?im_w=240",
      rating: 5,
      reviewText: "It was really super relaxing days with lots of peace and quiet. So if you need a little break, I can definitely recommend the tiny house.",
      date: "2024-09-22"
    },
    {
      name: "Eef",
      picture: "https://a0.muscache.com/im/pictures/user/d1b646f8-16d9-4469-8d26-190b944ce662.jpg?im_w=240",
      rating: 5,
      reviewText: "It's a nice boat and beautiful surroundings! Lots of walking and cycling, all right from the place of stay",
      date: "2024-09-05"
    },
    {
      name: "Nicole",
      picture: "https://a0.muscache.com/im/pictures/user/User-477216581/original/7daddddf-7c73-4aad-b631-69859d1f1622.jpeg?im_w=240",
      rating: 5,
      reviewText: "we liked the houseboat, surroundings and location very much. people were also very friendly and accommodating",
      date: "2024-04-05"
    },
   ]

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
          <AboveProductTitle
            title={"Cabin in nature with panoramic view & sauna"}
          />
          <div className={styles.IconButton}>
            <IconButton
              faIcon={faArrowUpFromBracket}
              label="Share"
              onClick={handleShare}
            />
            <IconButton faIcon={faHeart} label="Save" onClick={handleSave} />
          </div>
        </div>
        <ProductGallery
          bigImage={
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzNDc1NzYxMjc3MDc0NzgxMg%3D%3D/original/5ad7780d-76b5-428f-9219-432243a83a03.jpeg"
          }
          smallTopLeftImage={
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzNDc1NzYxMjc3MDc0NzgxMg%3D%3D/original/253a0690-2a1e-4c34-ae7f-968b869be4b5.jpeg"
          }
          smallTopRightImage={
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzNDc1NzYxMjc3MDc0NzgxMg%3D%3D/original/78ed3027-a197-4043-9b7e-8fc79a5425fc.jpeg"
          }
          smallBottomLeftImage={
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzNDc1NzYxMjc3MDc0NzgxMg%3D%3D/original/182abee3-f7f8-4652-8c2a-f845e990d9c5.jpeg"
          }
          smallBottomRightImage={
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzNDc1NzYxMjc3MDc0NzgxMg%3D%3D/original/2ca9c23e-85db-48f8-bd21-0718c286dcdf.jpeg"
          }
        />
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
            <ReservationCard />
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
        <IconButton
          faIcon={faArrowUpFromBracket}
          label="Share"
          onClick={handleShare}
        />
        <IconButton faIcon={faHeart} label="Save" onClick={handleSave} />
        <div className={styles.reviews}>
        <ReviewsSection 
       reviews={reviews}
      />
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
