import React from "react";
import "./Header.css";
import Pokeball from "../assets/Images/Iconos e imagenes/Pokeball.svg";

function Header() {
  return (
    <div className="header">
      <div className="banner">
        <img className="Pokeball-icon" src={Pokeball} alt="icono pakeball" />
        <h2>Pokédex</h2>
      </div>
      <div className="search-section">
        <input
          className="search-bar"
          type="search"
          placeholder="search"
          value={inputValue}
        />
        <button className="sort-by" type="button">
          A
        </button>
      </div>
    </div>
  );
}

export default Header;
