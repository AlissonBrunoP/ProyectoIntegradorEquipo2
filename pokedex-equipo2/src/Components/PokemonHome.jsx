
import PokeData from "../Components/PokeData.js";
import './PokemonHome.css';



function PokemonHome() {
   
     return (
       <div >
         <div className="pokemonContainer" >
           {PokeData.map((pokemon) => (
             <div className="pokemon" key={pokemon.id} style={{'--pokemon-color': pokemon.color}}>
               <p className="idPokemonHome"> {pokemon.id}</p>
               <img className="pokemonImage" src={pokemon.image} alt={pokemon.name} />
               <p className="namePokemonHome"> {pokemon.name}</p>
             </div>
           ))}
         </div>
       </div>
     );
   }
   
   export default PokemonHome;