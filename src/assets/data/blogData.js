// import images from all-images/blog-img directory
import img01 from "../all-images/blog-img/blog-1.jpg";
import img02 from "../all-images/blog-img/blog-2.jpg";
import img03 from "../all-images/blog-img/blog-3.jpg";

const blogData = [
  {
    id: 1,
    title: "La mejor manera de conducir coches",
    author: "Jh",
    date: "18 May, 2020",
    time: "9pm",
    imgUrl: img01,
    description:
      "a primera vez que tomas el control de un vehículo puede ser una experiencia emocionante y aterradora. Aunque ya has estudiado las reglas de tránsito y las técnicas de manejo adecuadas, todavía hay algunas cosas que debes tener en cuenta ",
     quote: "Garantizado",
  },

  {
    id: 2,
    title: "Si la batería de tu coche está baja",
    author: "JH",
    date: "12 Dec, 2020",
    time: "9pm",
    imgUrl: img02,
    description:
      " DSi la batería está descargada o defectuosa no podrá suministrar toda la electricidad necesaria para alimentar los componentes del coche. Uno de los componentes que más electricidad consumen son, de hecho, los faros de luz alta y baja",
    quote:
      "Garantizado",
  },

  {
    id: 3,
    title: "La mejor manera de dar viaje",
    author: "JH",
    date: "19, agost, 2022",
    time: "9pm",
    imgUrl: img03,
    description:
      " Somos un servicio totalmente gratuito, sin cargos ocultos.",
    quote:
      "Garantizado",
  },
];

export default blogData;
