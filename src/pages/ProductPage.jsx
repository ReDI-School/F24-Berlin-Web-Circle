import PersonProfile from "../components/personProfile/PersonProfile";
import { useParams } from "react-router-dom";

const ProductPage = () =>
{
	const {productId} = useParams();	// Object Destructuring

	return (
	<div>
		{`Dummy Product Page ${productId}`}
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
	)
}

export default ProductPage;