import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { BASE_URL } from "../../constants/constants";
import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";

const FilteredPlacesPage = () => {
	const [filteredPlaces, setFilteredPlaces] = useState([]);
	const {destination} = useParams();
	const [searchParams] = useSearchParams();

	useEffect(()=> {
	axios.get(`${BASE_URL}s/${destination}/homes`, {
		params: searchParams
	})
	.then(response => setFilteredPlaces(response?.data))
	.catch(error => console.error(`Something went wrong. ${error.message}.`))
	}, [destination, searchParams])
	
	return (
		<div>
			{
				filteredPlaces.map((filteredPlace, id) => {
					return (
						<ProductCard
						key={id}
						images={[filteredPlace.image]}
						title={filteredPlace.title}
						host={filteredPlace.host}
						price={filteredPlace.price}
					  />
					)
				})
			}
		</div>
	)
}

export default FilteredPlacesPage;