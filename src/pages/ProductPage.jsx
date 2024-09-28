import { useParams } from "react-router-dom";
import ReservationCard from "../components/ReservationCard/ReservationCard";

const ProductPage = () => {
  const { productId } = useParams(); // Object Destructuring

  return (
    <div>
      {`Dummy Product Page ${productId}`}
      <ReservationCard />
    </div>
  );
};

export default ProductPage;
