import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonProfile from "./components/personProfile/PersonProfile";
import { Link } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0);
  const places = [{id: "1", name: "Idyllic house by the sea"}, {id: "2", name: "Studio Zempow / ecological wooden house / photo studio"},
    {id: "3", name: "Funen's best ocean view"}
  ]

  return (
    <>
      <h1 data-testid="heading">Hello F24-Berlin-Web-Circle Typo fixed</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <PersonProfile
        title="Meet your host"
        image="https://a0.muscache.com/im/pictures/user/d62627ea-ea22-4cf1-b38a-152f1f86a9ed.jpg"
        name="Raus"
        role="Superhost"
        verified={true}
        reviews={74}
        rating={4.85}
        yearsHosting={1}
      />
      {/* FOR TESTING */}
      {
        places.map((place) => {
          return (
            <Link to={`/rooms/${place.id}`} key={place.id}>
              <div>
                {`${place.id} - ${place.name}`}
              </div>
            </Link>
          )
        })
      }
    </>
  );
}

export default App;
