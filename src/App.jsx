import "./App.css";
import { Link } from "react-router-dom";


function App() {
  const places = [
    { id: "1", name: "Idyllic house by the sea" },
    { id: "2", name: "Studio Zempow / ecological wooden house / photo studio" },
    { id: "3", name: "Funen's best ocean view" },
  ];

  return (
    <>
      <h1 data-testid="heading">Hello F24-Berlin-Web-Circle Typo fixed</h1>
      {places.map((place) => {
        return (
          <Link to={`/rooms/${place.id}`} key={place.id}>
            <div>{`${place.id} - ${place.name}`}</div>
          </Link>
        );
      })}
    </>
  );
}

export default App;
