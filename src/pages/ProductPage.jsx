import { useParams } from "react-router-dom";
import ReservationCard from "../components/ReservationCard/ReservationCard";
import FavoriteStay from "../components/FavoriteStay/FavoriteStay";
import HostSummary from "../components/HostSummary/HostSummary";
import hostImage from "../assets/images/host-raus.webp";
import MapView from "../components/MapView/MapView";
import mapViewSampleImg from "./../assets/map-view-sample.png";
import ProductGallery from "../components/ProductGallery/ProductGallery";
import PersonProfile from "../components/personProfile/PersonProfile";
import ProductHighlight from "../components/ProductHighlight/ProductHighlight";

const ProductPage = () => {
  const highlights = [{type: "CHECK_IN", text: "Self check-in", subText: "Check yourself in with the lockbox."},
    {type: "AWARD", text: "Superhost", subText: "Superhosts are experienced, highly rated Hosts." },
    {type: "WIFI", text: "Free Wifi", subText: "Superhosts are experienced, highly rated Hosts." },
    {type: "CANCELLATION", text: "Free cancellation", subText: "Get a full refund if you change your mind."}];

  const { productId } = useParams(); // Object Destructuring
    
  return (
    <div>
      {`Dummy Product Page ${productId}`}
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
      <ReservationCard />
      <FavoriteStay />
      <HostSummary
        hostName="Raus"
        hostingDuration={1}
        role="Superhost"
        profilePicUrl={hostImage}
      />
      <ProductHighlight highlights={highlights}/>
      <MapView
        mapViewSampleImg={mapViewSampleImg}
        address={"Königslutter am Elm, Niedersachsen, Germany"}
        addressDescription={
          "In the midst of a diverse nature park, you will find yourself surrounded by hilly landscapes covered with dense forests, moors, gorgeous heaths and salt marshes. The surroundings invite you to explore them at any time of the year: hike through one of the largest beech forests in the region, where you will occasionally encounter rare forest dwellers, go mushroom hunting in a popular hiking area nearby, or take a bike ride to a vantage point overlooking aln the midst of a diverse nature park, you will In the midst of a diverse nature park, you will find yourself surrounded by hilly landscapes covered with dense forests, moors, gorgeous heaths and salt marshes. The surroundings invite you to explore them at any time of the year: hike through one of the largest beech forests in the region, where you will occasionally encounter rare forest dwellers, go mushroom hunting in a popular hiking area nearby, or take a bike ride to a vantage point overlooking aln the midst of a diverse nature park, you will"
        }
      />

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
    </div>
  );
};

export default ProductPage;
