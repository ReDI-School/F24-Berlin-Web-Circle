import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import colors from '../../theme/colors';
import styles from "./Root.module.css"

const Root = () =>
{
	const themeStyles = {
		"--primary": colors.primary,
		"--palette-deco": colors.paletteDeco,
		"--neutral": colors.neutral,
		"--error" : colors.error,
	};

	return (
		<div style={themeStyles} className={styles.rootLayout}>
			<Header/>
			<div className={styles.layoutBody}>
				<Outlet/>	{/* <Outlet/> render the child route elements. */}
			</div>
			<Footer/>
		</div>
	)
}
	
export default Root;