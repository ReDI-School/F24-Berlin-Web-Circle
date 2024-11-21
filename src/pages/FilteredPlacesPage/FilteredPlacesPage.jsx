import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { BASE_URL } from "../../constants/constants";
import axios from "axios";
import { Link, useParams, useSearchParams } from "react-router-dom";

const FilteredPlacesPage = () => {
	const [filteredPlaces, setFilteredPlaces] = useState([]);
	const {region} = useParams();
	const [searchParams] = useSearchParams();

	useEffect(()=> {
	axios.get(`${BASE_URL}s/${region}/homes`, {
		params: searchParams
	})
	.then(response => {
		setFilteredPlaces(response?.data);
	})
	.catch(error => console.error(`Something went wrong. ${error.message}.`))
	}, [region, searchParams])
	
	return (
		<div className="grid">
			{
				filteredPlaces.map((filteredPlace) => {	
					return (
						<ProductCard
						key={filteredPlace.id}
						images={filteredPlace.images}
						// onClick={() => handlePlaceClick(filteredPlace.id)} // Optional: Handle click here if needed
					  >
						<Link to={`/rooms/${filteredPlace.id}`}>
						  <h2 className="title">{filteredPlace.title}</h2>
						  <p className="host">{filteredPlace.host}</p>
						  <p className="price">{filteredPlace.price}</p>
						</Link>
					  </ProductCard>
					)
				})
			}
		</div>
	)
}

export default FilteredPlacesPage;