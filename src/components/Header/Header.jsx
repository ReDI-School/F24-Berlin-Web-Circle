<<<<<<< HEAD
const Header = () =>
{
	return (
	<header>
		Dummy Header
	</header>
=======
import DestinationPopUp from '../DestinationPopUp/DestinationPopUp'

const Header = () =>
{
	const handelRegionClick = (item) => {
	}

	return (
		<div>
          	<DestinationPopUp title = 'Search by region' onClick = {(e)=>handelRegionClick(e)}/>
		</div>

>>>>>>> main
	)
}

export default Header;