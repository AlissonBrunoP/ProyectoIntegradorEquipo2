import "./PokemonHome.css";
import PokeData from "./PokeData";
import { Link, useNavigate, useParams } from "react-router-dom";

function PokemonHome(props) {
  const { pokedexId } = useParams();

  const navigate = useNavigate();

  const onClickReturn = () => {
    navigate(`/`, { replace: true });
  };
  const pokemon = PokeData.find((pokemon) => pokemon.id === pokedexId);

  return (
    <div>
      <div className="pokemonContainer">
        {props.pokeList.map((pokemon) => (
          <Link to={`/pokedex/${pokemon.id}`} replace={true}>
            <div
              onClick={onClickReturn}
              className="pokemon"
              key={pokemon.id}
              style={{ "--pokemon-color": pokemon.color }}
            >
              <p className="idPokemonHome"> #{pokemon.id}</p>
              <img
                className="pokemonImage"
                src={pokemon.image}
                alt={pokemon.name}
              />
              <p className="namePokemonHome"> {pokemon.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PokemonHome;
