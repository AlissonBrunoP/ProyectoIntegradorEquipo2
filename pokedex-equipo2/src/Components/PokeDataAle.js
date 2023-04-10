import charmander from "../assets/Images/Iconos e imagenes/charmander.png";
import ditto from "../assets/Images/Iconos e imagenes/ditto.png";
import gastly from "../assets/Images/Iconos e imagenes/gastly.png";


const PokeDataAle = [

    {
    id:"004",
    name: charmander,
    image: "../assets/Images/Iconos e imagenes/charmander.png",
    color: "#F57D31",
    secondary_color: "", 
    main_type: "Fire",
    secondary_type: "",
    main_ability: "Mega-Punch",
    sendondary_ability: "Fire-Punch",
    height: "0,6 m",
    weight: "8,5 kg",
    description: "It has a preference for hot things. When it rains, steam is said to spaut from the tip of its tail",
    stats:{
        HP: 39,
        ATK: 52,
        DEF: 43,
        SATK: 60,
        SDEF: 50,
        SPD: 65,
    },
},
{
    id:"132",
    name: ditto,
    image: "./assets/Images/Iconos e imagenes/ditto.png",
    color: "#AAA67F",
    secondary_color: "", 
    main_type: "Normal",
    secondary_type: "",
    main_ability: "Limber",
    sendondary_ability: "Imposter",
    height: "0,3 m",
    weight: "4,0 kg",
    description: "It can reconstitute its enterie cellular structure to change into what it sees, but it returns to normal when it relaxes",
    stats:{
        HP: 48,
        ATK: 48,
        DEF: 48,
        SATK: 48,
        SDEF: 48,
        SPD: 48,
    },
},

{
    id:"092",
    name: gastly,
    image: "../assets/Images/Iconos e imagenes/gastly.png",
    color: "#70559B",
    secondary_color: "#A43E9E", 
    main_type: "Ghost",
    secondary_type: "Poison",
    main_ability: "Levitate",
    sendondary_ability: "",
    height: "1,3 m",
    weight: "0,1 kg",
    description: "Born from gases, anyone would faint if engulted by its gaseous body, wich contains poison",
    stats:{
        HP: 30,
        ATK: 35,
        DEF: 30,
        SATK: 100,
        SDEF: 35,
        SPD: 80,
    },
},
];

export default PokeDataAle;
