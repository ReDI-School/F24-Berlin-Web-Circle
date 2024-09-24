import { useParams } from "react-router-dom";
import IconButton from "../components/IconButton/IconButton";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

const ProductPage = () =>
{
	const {productId} = useParams();	// Object Destructuring

	function handleShare() {
		// console.log("handle share")
	}

	function handleSave() {
		// console.log("handle save")
	}

	return (
	<div>
		{`Dummy Product Page ${productId}`}
		<div className="share-save-buttons-container">
		<IconButton faIcon={faArrowUpFromBracket} label="Share" onClick={handleShare}/>
		<IconButton faIcon={faHeart} label="Save" onClick={handleSave}/>
		</div>
	</div>
	)
}

export default ProductPage;