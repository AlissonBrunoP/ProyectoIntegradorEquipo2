import React from "react";
import PokeData from "./PokeData";
import "./CardDetails.css";
import arrowLeft from "../assets/Images/Iconos e imagenes/arrow-left.svg";
import pokeBall from "../assets/Images/Iconos e imagenes/Pokeball.svg";
import heightImg from "../assets/Images/Iconos e imagenes/Height.svg";
import weightImg from "../assets/Images/Iconos e imagenes/Weight.svg";
import { Link, useNavigate, useParams } from "react-router-dom";

function CardDetails() {
  const { pokedexId } = useParams();

  const poke = PokeData.find((pokemon) => pokemon.id === pokedexId);

  const navigate = useNavigate();

  const onClickReturn = () => {
    navigate(`/`, { replace: true });
  };

  return (
    <div>
      <div
        key={poke.id}
        style={{ backgroundColor: poke.color }}
        className="containerCard"
      >
        <div className="headerPokemonCard">
          <div className="nameIdandArrow">
            <img src={pokeBall} alt="" className="imgPokeBall" />

            <h2>
              <Link to={`/`} replace={true}>
                <button className="btnArrowBack" onClick={onClickReturn}>
                  <img src={arrowLeft} alt="" />
                </button>
              </Link>
              {poke.name}
            </h2>
            <p>#{poke.id}</p>
          </div>
          <img className="imgPokemonCard" src={poke.image} alt={poke.name} />
        </div>

        <div className="infoPoke">
          <div className="powerType">
            <p>
              <span style={{ backgroundColor: poke.color }}>
                {poke.main_type}
              </span>
              <span
                style={{
                  backgroundColor: poke.secondary_color,
                  marginLeft: "5px",
                }}
              >
                {poke.secondary_type}
              </span>
            </p>
          </div>

          <div className="weightHeightandMoves" style={{ margin: "5px" }}>
            <div style={{ marginTop: "5px" }}>
              <p>
                <img
                  src={weightImg}
                  alt={poke.name}
                  style={{ marginRight: "5px" }}
                />
                {poke.weight}
              </p>
              <p className="textMoves" style={{ marginTop: "23px" }}>
                Weight
              </p>
            </div>
            <div className="verticalLine1"></div>
            <div style={{ marginTop: "5px" }}>
              <p>
                <img
                  src={heightImg}
                  alt={poke.name}
                  style={{ marginRight: "5px" }}
                />
                {poke.height}
              </p>
              <p className="textMoves" style={{ marginTop: "23px" }}>
                Height
              </p>
            </div>
            <div className="verticalLine1"></div>
            <div>
              <p> {poke.main_ability}</p>
              <p style={{ marginTop: "-15px" }}> {poke.sendondary_ability}</p>
              <p className="textMoves">Moves</p>
            </div>
          </div>
          <p style={{ padding: "5px" }}>{poke.description}</p>
          <h2 style={{ color: poke.color }}>Base Stats</h2>

          <div className="containerStats">
            <div style={{ color: poke.color, marginRight: "10px" }}>
              <p style={{ marginBottom: "-15px", marginLeft: "15px" }}>
                <strong>HP</strong>
              </p>
              <p style={{ marginBottom: "-15px", marginLeft: "15px" }}>
                <strong>ATK</strong>
              </p>
              <p style={{ marginBottom: "-15px", marginLeft: "15px" }}>
                <strong>DEF</strong>
              </p>
              <p style={{ marginBottom: "-15px", marginLeft: "15px" }}>
                <strong>SATK</strong>
              </p>
              <p style={{ marginBottom: "-15px", marginLeft: "15px" }}>
                <strong>SDEF</strong>
              </p>
              <p style={{ marginBottom: "-15px", marginLeft: "15px" }}>
                <strong>SPD</strong>
              </p>
            </div>
            <div className="verticalLine"></div>
            <div>
              <p style={{ marginBottom: "-15px" }}>
                {String(poke.stats.HP).padStart(3, "0")}
              </p>
              <p style={{ marginBottom: "-15px" }}>
                {String(poke.stats.ATK).padStart(3, "0")}
              </p>
              <p style={{ marginBottom: "-15px" }}>
                {String(poke.stats.DEF).padStart(3, "0")}
              </p>
              <p style={{ marginBottom: "-15px" }}>
                {String(poke.stats.SATK).padStart(3, "0")}
              </p>
              <p style={{ marginBottom: "-15px" }}>
                {String(poke.stats.SDEF).padStart(3, "0")}
              </p>
              <p style={{ marginBottom: "-15px" }}>
                {String(poke.stats.SPD).padStart(3, "0")}
              </p>
            </div>
            <div>
              <ul className="listStats">
                <li className="stats">
                  <span
                    className="stats-value"
                    style={{
                      width: `${poke.stats.HP / 2}%`,
                      backgroundColor: poke.color,
                      borderTopLeftRadius: "10px",
                      borderBottomLeftRadius: "10px",
                      opacity: "1",
                    }}
                  ></span>
                  <span
                    className="stats-value"
                    style={{
                      width: `${100 - poke.stats.HP / 2}%`,
                      backgroundColor: poke.color,
                      borderTopRightRadius: "10px",
                      borderBottomRightRadius: "10px",
                      opacity: "0.5",
                    }}
                  ></span>
                </li>

                <li className="stats">
                  <span
                    className="stats-value"
                    style={{
                      width: `${poke.stats.ATK / 2}%`,
                      backgroundColor: poke.color,
                      borderTopLeftRadius: "10px",
                      borderBottomLeftRadius: "10px",
                      opacity: "1",
                    }}
                  ></span>
                  <span
                    className="stats-value"
                    style={{
                      width: `${100 - poke.stats.ATK / 2}%`,
                      backgroundColor: poke.color,
                      borderTopRightRadius: "10px",
                      borderBottomRightRadius: "10px",
                      opacity: "0.5",
                    }}
                  ></span>
                </li>

                <li className="stats">
                  <span
                    className="stats-value"
                    style={{
                      width: `${poke.stats.DEF / 2}%`,
                      backgroundColor: poke.color,
                      borderTopLeftRadius: "10px",
                      borderBottomLeftRadius: "10px",
                      opacity: "1",
                    }}
                  ></span>
                  <span
                    className="stats-value"
                    style={{
                      width: `${100 - poke.stats.DEF / 2}%`,
                      backgroundColor: poke.color,
                      borderTopRightRadius: "10px",
                      borderBottomRightRadius: "10px",
                      opacity: "0.5",
                    }}
                  ></span>
                </li>

                <li className="stats">
                  <span
                    className="stats-value"
                    style={{
                      width: `${poke.stats.SATK / 2}%`,
                      backgroundColor: poke.color,
                      borderTopLeftRadius: "10px",
                      borderBottomLeftRadius: "10px",
                      opacity: "1",
                    }}
                  ></span>
                  <span
                    className="stats-value"
                    style={{
                      width: `${100 - poke.stats.SATK / 2}%`,
                      backgroundColor: poke.color,
                      borderTopRightRadius: "10px",
                      borderBottomRightRadius: "10px",
                      opacity: "0.5",
                    }}
                  ></span>
                </li>

                <li className="stats">
                  <span
                    className="stats-value"
                    style={{
                      width: `${poke.stats.SDEF / 2}%`,
                      backgroundColor: poke.color,
                      borderTopLeftRadius: "10px",
                      borderBottomLeftRadius: "10px",
                      opacity: "1",
                    }}
                  ></span>
                  <span
                    className="stats-value"
                    style={{
                      width: `${100 - poke.stats.SDEF / 2}%`,
                      backgroundColor: poke.color,
                      borderTopRightRadius: "10px",
                      borderBottomRightRadius: "10px",
                      opacity: "0.5",
                    }}
                  ></span>
                </li>

                <li className="stats">
                  <span
                    className="stats-value"
                    style={{
                      width: `${poke.stats.SPD / 2}%`,
                      backgroundColor: poke.color,
                      borderTopLeftRadius: "10px",
                      borderBottomLeftRadius: "10px",
                      opacity: "1",
                    }}
                  ></span>
                  <span
                    className="stats-value"
                    style={{
                      width: `${100 - poke.stats.SPD / 2}%`,
                      backgroundColor: poke.color,
                      borderTopRightRadius: "10px",
                      borderBottomRightRadius: "10px",
                      opacity: "0.5",
                    }}
                  ></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
