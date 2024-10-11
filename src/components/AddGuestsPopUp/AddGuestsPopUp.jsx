import Styles from './AddGuestsPopUp.module.css';
import Guest from './Guest/Guest';

const AddGuestsPopUp = ({ guestsData, onGuestChange, style }) => {
  return (
    <div className={Styles.popup} style={style}>
      {guestsData?.map((guest) => (
        <Guest
          key={guest.index}
          title={guest.title}
          description={guest.description}
          descriptionType={guest.descriptionType}
          onClick={onGuestChange}
        />
      ))}
    </div>
  );
};

export default AddGuestsPopUp;
