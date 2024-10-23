import Styles from './DestinationPopUp.module.css';
import World from '../../assets/Destination/World.jpg';
import UnitedStates from '../../assets/Destination/UnitedStates.webp';
import Spain from '../../assets/Destination/Spain.webp';
import SouthEastAsia from '../../assets/Destination/SouthEastAsia.webp';
import MiddleEast from '../../assets/Destination/MiddleEast.webp';
import Italy from '../../assets/Destination/Italy.webp';
import DestinationButton from './DestinationButton/DestinationButton';

const DestinationPopUp = ({
    title,
    onClick,
    isVisible
}) => {
const destinations = [
    {image:World, description:"I'm flexible"},
    {image:UnitedStates, description:"United States"},
    {image:Spain, description:"Spain"},
    {image:SouthEastAsia, description:"Southeast Asia"},
    {image:MiddleEast, description:"Middle East"},
    {image:Italy, description:"Italy"}];

const handelDestination = (item) =>{
    onClick(item);
}
const arrayChunk = (arr, n) => {
    const array = arr.slice();
    const chunks = [];
    while (array.length) chunks.push(array.splice(0, n));
    return chunks;
  };
    return(
        <div className={Styles.popup} display={isVisible}>
            <div className={Styles.title}>
                {title}
            </div>
            <div className={Styles.regionContainer}>
                {arrayChunk(destinations, 3).map((row, i) => (
                    <div className={Styles.regionRow} key={i}>
                        {row.map((item, i) => (
                            <div key={i}>
                                <DestinationButton destination={item} onClick={(e)=>handelDestination(e)}/>
                            </div>
                        ))}
                    </div>
                ))}         
            </div>
        </div>
    )
}
export default DestinationPopUp;