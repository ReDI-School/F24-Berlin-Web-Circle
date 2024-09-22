import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Root = () =>
{
	return (
	<>
		<Header/>
		<Outlet/>	{/* <Outlet/> render the child route elements. */}
		<Footer/>
	</>
	)
}
	
export default Root;