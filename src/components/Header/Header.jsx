import DestinationPopUp from "../DestinationPopUp/DestinationPopUp";
import GuestsPopUp from "../AddGuestsPopUp/AddGuestsPopUp";

const Header = () => {
  const handelRegionClick = (item) => {};

  return (
    <div>
      <DestinationPopUp
        title="Search by region"
        onClick={(e) => handelRegionClick(e)}
      />
      <GuestsPopUp/>
    </div>
  );
};

export default Header;
