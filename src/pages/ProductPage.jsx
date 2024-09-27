import { useParams } from "react-router-dom";
import ReservationCard from "../components/ReservationCard/ReservationCard";
import HostSummary from "../components/HostSummary/HostSummary";

const ProductPage = () => {
  const { productId } = useParams(); // Object Destructuring

  return (
    <div>
      {`Dummy Product Page ${productId}`}
      <ReservationCard />
      <br />
      <HostSummary 
          hostName="Raus"
          hostingDuration={1}
          role="Superhost"
          profilePicUrl="https://a0.muscache.com/im/pictures/user/d62627ea-ea22-4cf1-b38a-152f1f86a9ed.jpg"
      />
    </div>
    
  );
};

export default ProductPage;
