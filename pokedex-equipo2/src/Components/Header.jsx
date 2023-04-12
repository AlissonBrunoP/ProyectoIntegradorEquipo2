import React from "react";
import "./Header.css";
import { useState } from "react";
import Pokeball from "../assets/Images/Iconos e imagenes/Pokeball.svg";
import text from "../assets/Images/Iconos e imagenes/text.svg";
import num from "../assets/Images/Iconos e imagenes/num.svg";
import search from "../assets/Images/Iconos e imagenes/search.svg";

function Header(props) {
  const [isText, setIsText] = useState(false);
  //   const [sortBy, setSortBy] = useState(text);

  const sortPokemon = () => {
    setIsText(!isText);
    sortById();
  };

  function sortById() {
    const sortedList = props.pokeList.sort((a, b) => {
      setIsText(!isText);
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    });
    props.setPokeList([...sortedList]);
    console.log(sortedList);
  }

  return (
    <div className="header">
      <div className="banner">
        <img className="Pokeball-icon" src={Pokeball} alt="icono pakeball" />
        <h2>Pokédex</h2>
      </div>
      <div className="search-section">
        <form>
          <input
            type="image"
            src={search}
            style={{ width: "18px", marginLeft: "8px" }}
          />
          <input className="search-bar" type="search" placeholder="search" />
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
            alt="Icono texto"
          />
        </button>
      </div>
    </div>
  );
}

export default Header;
