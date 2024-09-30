import AddGuestsPopUp from "../AddGuestsPopUp/AddGuestsPopUp";
import DestinationPopUp from '../DestinationPopUp/DestinationPopUp'

const Header = () =>
{
	const handelRegionClick = (item) => {
	}

	return (
		<div>
			<header>
				Dummy Header
			</header>
			<AddGuestsPopUp/>
          	<DestinationPopUp title = 'Search by region' onClick = {(e)=>handelRegionClick(e)}/>
		</div>

	)
}

export default Header;