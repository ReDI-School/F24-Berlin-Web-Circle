import { useState } from 'react';
import Styles from './AddGuestsPopUp.module.css';
import Guest from './Guest/Guest';

const AddGuestsPopUp = ({style}) => {
    const [guestsList, setGuestsList] = useState({typeofGuest:0,numberOfGuests:0});
    const guests = [
        {index:1, title:'Adults', description:'Ages 13 or above', descriptionType:'string'},
        {index:2, title:'Children', description:'Ages 2 - 12', descriptionType:'string'},
        {index:3, title:'Infants', description:'Under 2', descriptionType:'string'},
        {index:4, title:'Pets', description:'Bringing a service animal?', descriptionType:'link'}
    ];
    const handelGuestClick = (guest) =>{
        setGuestsList(guest);
    }
    return(
        <div className={Styles.popup} style={style}>
            {guests.map((guest)=> 
                    <Guest 
                        key = {guest.index} 
                        title = {guest.title} 
                        description = {guest.description}
                        descriptionType = {guest.descriptionType}
                        onClick={(e)=>handelGuestClick(e)}
                    />
                )
            }
        </div>
    )
}
export default AddGuestsPopUp;