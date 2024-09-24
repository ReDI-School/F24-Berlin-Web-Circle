import { useParams } from "react-router-dom";
import CostsSummary from "../components/CostsSummary/CostsSummary";

const ProductPage = () =>
{
	const {productId} = useParams();	// Object Destructuring

	return (
	<div>
		{`Dummy Product Page ${productId}`}
		<CostsSummary 
			  checkInDate="2024-09-24"
				checkOutDate="2024-09-30"
				pricePerNight={50}
				airbnbServiceFee={20}
				cleaningFee={60}
				longStayDiscount={50}
				nightsCountForDiscount={5}
		/>
	</div>
	)
}

export default ProductPage;