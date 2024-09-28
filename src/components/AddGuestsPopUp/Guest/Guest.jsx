import { useState } from 'react';
import Styles from './Guest.module.css';

const Guest = ({title, description, descriptionType, onClick}) => {
    const[count, setCount] = useState(0);
    const handelMinusCount = () => {
       {count > 0 && setCount(count - 1)};
       onClick({typeofGuest:title,numberOfGuests:count - 1}); 
    };
    const handelPlusCount = () => {
        setCount(count + 1);
        onClick({typeofGuest:title,numberOfGuests:count + 1}); 
    };

    return(
        <div className={Styles.container}>
            <div className={Styles.detailContainer}>
                <div className={Styles.title}>{title}</div>
                    {descriptionType === 'string' ? 
                        <div>{description}</div> :
                        <div className={Styles.descriptionLink}>{description}</div>
                    }
            </div>
            <div className={Styles.buttonContainer}>
                    <button className={count !== 0 ? Styles.button : Styles.buttonDisable} onClick={handelMinusCount}>-</button>
                    <div className={Styles.count}>{count}</div>
                    <button className={Styles.button} onClick={handelPlusCount}>+</button>
            </div>

        </div>
    )
}
export default Guest;