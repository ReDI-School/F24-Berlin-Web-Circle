import "./App.css";
import Button from "./components/ShareSaveButton/Button";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

function App() {
  function handleShare() {
    // console.log("handle share");
  }
  function handleSave() {
    // console.log("handle save");
  }

  return (
    <>
      <Button
        label="Share"
        faIcon={faArrowUpFromBracket}
        onClick={handleShare}
      />
      <Button label="Save" faIcon={faHeart} onClick={handleSave} />
    </>
  );
}

export default App;
