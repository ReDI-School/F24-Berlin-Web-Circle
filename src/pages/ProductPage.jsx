import PersonProfile from "../components/personProfile/PersonProfile";
import { useParams } from "react-router-dom";
import ReservationCard from "../components/ReservationCard/ReservationCard";
import HostSummary from "../components/HostSummary/HostSummary";
import hostImage from "../assets/images/host-raus.webp";
import MapView from "../components/mapView/MapView";
import mapViewSampleImg from "./../assets/map-view-sample.png";

const ProductPage = () => {
  const { productId } = useParams(); // Object Destructuring

	return (
	<div>
		{`Dummy Product Page ${productId}`}
		<ReservationCard />
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
      <HostSummary 
          hostName="Raus"
          hostingDuration={1}
          role="Superhost"
          profilePicUrl={hostImage}
      />
      <MapView
        mapViewSampleImg={mapViewSampleImg}
        address={"Königslutter am Elm, Niedersachsen, Germany"}
        addressDescription={
          "In the midst of a diverse nature park, you will find yourself surrounded by hilly landscapes covered with dense forests, moors, gorgeous heaths and salt marshes. The surroundings invite you to explore them at any time of the year: hike through one of the largest beech forests in the region, where you will occasionally encounter rare forest dwellers, go mushroom hunting in a popular hiking area nearby, or take a bike ride to a vantage point overlooking aln the midst of a diverse nature park, you will In the midst of a diverse nature park, you will find yourself surrounded by hilly landscapes covered with dense forests, moors, gorgeous heaths and salt marshes. The surroundings invite you to explore them at any time of the year: hike through one of the largest beech forests in the region, where you will occasionally encounter rare forest dwellers, go mushroom hunting in a popular hiking area nearby, or take a bike ride to a vantage point overlooking aln the midst of a diverse nature park, you will"
        }
      />
    </div>
  );
};

export default ProductPage;
