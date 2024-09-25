import DestinationPopUp from '../components/DestinationPopUp/DestinationPopUp'

const Header = () =>
{
	const handelRegionClick = (item) => {
	}

	return (
		<div>
			<header>
				Dummy Header
			</header>
          	<DestinationPopUp title = 'Search by region' onClick = {(e)=>handelRegionClick(e)}/>
		</div>

	)
}

export default Header;