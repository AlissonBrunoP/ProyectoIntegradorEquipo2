import React, { useState } from "react";
import Header from "./Header.jsx";
import PokemonHome from "./PokemonHome.jsx";
import PokeData from "./PokeData.js";
import CardDetails from "../Components/CardDetails.jsx";

function Home() {
  const [pokeList, setPokeList] = useState(PokeData);

  return (
    <div>
      <Header pokeList={pokeList} setPokeList={setPokeList} />
      <PokemonHome pokeList={pokeList} />
      <CardDetails />
    </div>
  );
}

export default Home;
