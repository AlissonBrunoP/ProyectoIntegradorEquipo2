import React, { useEffect, useState } from "react";
import "./Header.css";
import Pokeball from "../assets/Images/Iconos e imagenes/Pokeball.svg";
import text from "../assets/Images/Iconos e imagenes/text.svg";
import num from "../assets/Images/Iconos e imagenes/num.svg";
import search from "../assets/Images/Iconos e imagenes/search.svg";
import close from "../assets/Images/Iconos e imagenes/close.svg";
import PokeData from "./PokeData";

function Header(props) {
  const [isText, setIsText] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sortPokemon = () => {
    setIsText(!isText);
    if (!isText) {
      sortById();
    } else {
      sortByName();
    }
  };

  function sortById() {
    const sortedList = [...props.pokeList].sort((a, b) => a.id - b.id);
    props.setPokeList(sortedList);
    setIsText(!isText);
  }

  function sortByName() {
    const sortedList = [...props.pokeList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    props.setPokeList(sortedList);
    setIsText(!isText);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    const searchResults = PokeData.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pokemon.id.toString().includes(searchTerm.toLowerCase())
    );
    props.setPokeList(searchResults);
  }, [searchTerm]);

  function handleSearchReset() {
    setSearchTerm("");
  }

  return (
    <div className="header">
      <div className="banner">
        <img className="Pokeball-icon" src={Pokeball} alt="icono pakeball" />
        <h2>Pokédex</h2>
      </div>
      <div className="search-section">
        <form onReset={handleSearchReset}>
          <img
            src={search}
            alt="Icono de búsqueda"
            style={{ width: "18px", marginLeft: "15px" }}
          />

          <input
            className="search-bar"
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </form>
        <button
          className="sort-by"
          onClick={sortPokemon}
          type="button"
          style={{ outline: "none" }}
        >
          <img
            style={{ width: "20px" }}
            src={isText ? text : num}
            alt="Icono de ordenamiento"
          />
        </button>
      </div>
    </div>
  );
}

export default Header;
