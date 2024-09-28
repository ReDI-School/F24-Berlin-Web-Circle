import DestinationPopUp from '../DestinationPopUp/DestinationPopUp'

const Header = () =>
{
	const handelRegionClick = (item) => {
	}

	return (
		<div>
          	<DestinationPopUp title = 'Search by region' onClick = {(e)=>handelRegionClick(e)}/>
		</div>

	)
}

export default Header;