import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import colors from '../theme/colors';

const Root = () =>
{
	const themeStyles = {
		"--primary": colors.primary,
		"--palette-deco": colors.paletteDeco,
	};

	return (
		<div style={themeStyles}>
			<Header/>
			<Outlet/>	{/* <Outlet/> render the child route elements. */}
			<Footer/>
		</div>
	)
}
	
export default Root;