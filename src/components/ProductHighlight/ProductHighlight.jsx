import styles from "./ProductHighlight.module.css"
import { CHECK_IN, CANCELLATION, AWARD } from "../../constants/constants"
import {CalendarIcon, DoorIcon, MedalIcon, PinIcon} from '../../icons'

const ProductHighlight = ({highlights}) => {
	const renderIcon = (highlightType) => {
		switch (highlightType) {
			case CHECK_IN: return <DoorIcon/>
			case AWARD: return <MedalIcon/>
			case CANCELLATION: return <CalendarIcon/>
			default: return <PinIcon/>;
		}
	}

	return (
		<ul className={styles.highlights}>
			{highlights.map((feature, i) => {
				return (
					<li key={i} className={styles.highlightItem}>
						{renderIcon(feature?.type)}
						<div className={styles.highlightDes}>
							<h3>{feature?.text}</h3>
							<div className={styles.subText}>{feature?.subText}</div>
						</div>
					</li>
				)
			})}
		</ul>
	)
}

export default ProductHighlight;