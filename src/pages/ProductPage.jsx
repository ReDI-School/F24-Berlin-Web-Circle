import { useParams } from "react-router-dom";
import ReservationCard from "../components/ReservationCard/ReservationCard";
import DateIncrementsButtonForTheCalendar from "../components/DataIncrementsButtonForTheCalendar/DataIncrementsButtonForTheCalendar";
const ProductPage = () => {
  const { productId } = useParams(); // Object Destructuring

  return (
    <div>
      {`Dummy Product Page ${productId}`}
      <DateIncrementsButtonForTheCalendar />
      <ReservationCard />
    </div>
  );
};

export default ProductPage;
