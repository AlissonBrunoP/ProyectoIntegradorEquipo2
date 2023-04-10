import aron from "../assets/Images/Iconos e imagenes/aron.png";
import bulbasaur from "../assets/Images/Iconos e imagenes/bulbasaur.png";
import butterfree from "../assets/Images/Iconos e imagenes/butterfree.png";
import charmander from "../assets/Images/Iconos e imagenes/charmander.png";
import ditto from "../assets/Images/Iconos e imagenes/ditto.png";

import gastly from "../assets/Images/Iconos e imagenes/gastly.png";

const PokeData = [
  {
    id: "304",
    name: "Aron",
    image: aron,
    color: "#B7B9D0",
    secondary_color: "#B69E31",
    main_type: "Steel",
    secondary_type: "Rock",
    main_ability: "Sturdy",
    sendondary_ability: "Rock-Head",
    height: "0,4 m",
    weight: "60,0 Kg",
    description:
      "it eats Iron ore - and sometimes railroad tracks - to build up the steel armor that protects its body",
    stats: {
      HP: 50,
      ATK: 70,
      DEF: 100,
      SATK: 40,
      SDEF: 40,
      SPD: 30,
    },
  },

  {
    id: "001",
    name: "Bulbasaur",
    image: bulbasaur,
    color: "#74CB48",
    secondary_color: "#A43E9E",
    main_type: "Grass",
    secondary_type: "Poison",
    main_ability: "Chlorophyll",
    sendondary_ability: "Overgrow",
    height: "0,7 m",
    weight: "6,9 Kg",
    description:
      "There is a plant seed on its back from the day this Pokemon is born. The seed slowly grows larger.",
    stats: {
      HP: 45,
      ATK: 49,
      DEF: 49,
      SATK: 65,
      SDEF: 65,
      SPD: 45,
    },
  },

  {
    id: "012",
    name: "Butterfree",
    image: butterfree,
    color: "#A7B723",
    secondary_color: "#A891EC",
    main_type: "Bug",
    secondary_type: "Flying",
    main_ability: "Compound-Eyes",
    sendondary_ability: "Tinted-Lens",
    height: "1,1 m",
    weight: "32,0 Kg",
    description:
      "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
    stats: {
      HP: 60,
      ATK: 45,
      DEF: 50,
      SATK: 90,
      SDEF: 80,
      SPD: 70,
    },
  },

  {
    id: "004",
    name: "Charmander",
    image: charmander,
    color: "#F57D31",
    secondary_color: "",
    main_type: "Fire",
    secondary_type: "",
    main_ability: "Mega-Punch",
    sendondary_ability: "Fire-Punch",
    height: "0,6 m",
    weight: "8,5 kg",
    description:
      "It has a preference for hot things. When it rains, steam is said to spaut from the tip of its tail",
    stats: {
      HP: 39,
      ATK: 52,
      DEF: 43,
      SATK: 60,
      SDEF: 50,
      SPD: 65,
    },
  },
  {
    id: "132",
    name: "Ditto",
    image: ditto,
    color: "#AAA67F",
    secondary_color: "",
    main_type: "Normal",
    secondary_type: "",
    main_ability: "Limber",
    sendondary_ability: "Imposter",
    height: "0,3 m",
    weight: "4,0 kg",
    description:
      "It can reconstitute its enterie cellular structure to change into what it sees, but it returns to normal when it relaxes",
    stats: {
      HP: 48,
      ATK: 48,
      DEF: 48,
      SATK: 48,
      SDEF: 48,
      SPD: 48,
    },
  },

  {
    id: "092",
    name: "Gastly",
    image: gastly,
    color: "#70559B",
    secondary_color: "#A43E9E",
    main_type: "Ghost",
    secondary_type: "Poison",
    main_ability: "Levitate",
    sendondary_ability: "",
    height: "1,3 m",
    weight: "0,1 kg",
    description:
      "Born from gases, anyone would faint if engulted by its gaseous body, wich contains poison",
    stats: {
      HP: 30,
      ATK: 35,
      DEF: 30,
      SATK: 100,
      SDEF: 35,
      SPD: 80,
    },
  },
];

export default PokeData;
