import Styles from './DestinationButton.module.css';

const DestinationButton= ({destination, onClick}) => {
    return(
    <div className={Styles.buttonContainer} onClick={()=>onClick(destination.description)}>
        <div className={Styles.button}>
            <img src ={destination.image} alt='picture'/>
            <div className={Styles.buttonDescription}>{destination.description}</div>
        </div>
    </div>
    )
}
export default DestinationButton;