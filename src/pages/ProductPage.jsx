import { useParams } from "react-router-dom";

const ProductPage = () =>
{
	const {productId} = useParams();	// Object Destructuring

	return (
	<div>
		{`Dummy Product Page ${productId}`}
	</div>
	)
}

export default ProductPage;