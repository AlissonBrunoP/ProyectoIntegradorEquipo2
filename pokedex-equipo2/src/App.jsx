import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PokeDataAli from "../src/Components/PokeDataAli";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        {PokeData.map((pokemon) => (
          <div key={pokemon.id}>
            <p> {pokemon.id}</p>
            <img src={pokemon.image} alt={pokemon.name} />

            <p> {pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
