import { useParams } from "react-router-dom";
import ReservationCard from "../components/ReservationCard/ReservationCard";
import HostSummary from "../components/HostSummary/HostSummary";
import hostImage from "../assets/images/host-raus.webp";

const ProductPage = () => {
  const { productId } = useParams(); // Object Destructuring

  return (
    <div>
      {`Dummy Product Page ${productId}`}
      <ReservationCard />
      <HostSummary 
          hostName="Raus"
          hostingDuration={1}
          role="Superhost"
          profilePicUrl={hostImage}
      />
    </div>
  );
};

export default ProductPage;
