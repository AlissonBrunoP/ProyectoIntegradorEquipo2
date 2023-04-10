import Mew from '../assets/Images/Iconos e imagenes/mew.png';
import Pikachu from '../assets/Images/Iconos e imagenes/pikachu.png';
import Squirtle from '../assets/Images/Iconos e imagenes/squirtle.png';


const PokeData = [
{
    id: "152",
    name: "Mew",
    image: Mew,
    color: "#FB5584",
    secondary_color: "",
    main_type: "Psychic",
    secandary_type: "",
    main_ability: "Synchronize",
    seconadary_ability: "",
    height: "0,4 m",
    weight: "4,0 kg",
    description: "When viewed through a microscope, this Pokemon's short, line, delicate hair can be seen.",
    stats: {
        HP: 100,
        ATK: 100,
        DEF: 100,
        SATK: 100,
        SDEF: 100,
        SPD: 100,
    },
},

{
    id: "025",
    name: "Pikachu",
    image: Pikachu,
    color: "#F9CF30",
    secondary_color: "",
    main_type: "Electric",
    secandary_type: "",
    main_ability: "Mega-Punch",
    seconadary_ability: "Pay-Day",
    height: "0,4 m",
    weight: "6,0 kg",
    description: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    stats: {
        HP: 035,
        ATK: 055,
        DEF: 040,
        SATK: 050,
        SDEF: 050,
        SPD: 090,
    },
},
{
    id: "007",
    name: "Squirtle",
    image: Squirtle,
    color: "#6493EB",
    secondary_color: "",
    main_type: "Water",
    secandary_type: "",
    main_ability: "Torrent",
    seconadary_ability: "Rain-Dish",
    height: "0,5 m",
    weight: "9,0 kg",
    description: "When it retracts its long neck into its shell, it squirts out water with vigorous force. ",
    stats: {
        HP: 044,
        ATK: 48,
        DEF: 065,
        SATK: 050,
        SDEF: 064,
        SPD: 043,
    },

},  

]

export default PokeData;