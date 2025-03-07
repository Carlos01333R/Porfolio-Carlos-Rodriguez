import ReactJS from "../components/icon/ReactJS";
import Tailwind from "../components/icon/Tailwind";
import Php from "../components/icon/Php";
import Mysql from "../components/icon/Mysql";

export const TAGS = {
  REACT: {
    name: "React",
    class: "bg-black text-white",
    icon: ReactJS,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: Tailwind,
  },
  PHP: {
    name: "PHP",
    class: "bg-black text-white",
    icon: Php,
  },
  MYSQL: {
    name: "MySQL",
    class: "bg-[#00758f] text-white",
    icon: Mysql,
  },
};

export const PROJECTS = [
  {
    id: "1",
    title: "FurEver | Adocta un animal",
    description:
      "Landing page de demo para FurEver, una plataforma de adoquin de animales, donde puedes adoptar un animal consumiendo una api externa",
    link: "https://fur-ever.vercel.app/",
    github: "https://github.com/Carlos01333R/FurEver.git",
    image: "/FurEver.png",
    type: "Landing",
    tags: [TAGS.REACT, TAGS.TAILWIND],
  },
  {
    id: "2",
    title: "Luxury contructora DEMO",
    description:
      "Landing page de demo para Luxury contructora costo $1,500,000,00 COP",
    link: "https://luxury-snowy.vercel.app/",
    github: "",
    image: "/lucury.png",
    type: "Landing",
    tags: [TAGS.REACT, TAGS.TAILWIND],
  },
  {
    id: "3",
    title: "VEGGIE King",
    description: "Landing page de un restaurante ",
    link: "https://veggieking.vercel.app/",
    github: "https://github.com/Carlos01333R/VEGGIE-KING.git",
    image: "/Veggie.png",
    tags: [TAGS.REACT, TAGS.TAILWIND],
    type: "Landing",
  },
  {
    id: "9",
    title: "Sorteo online",
    description: "Pagina web de un sorteo online",
    link: "https://sorteopy.vercel.app/",
    github: "",
    image: "/sorteo.png",
    tags: [TAGS.REACT, TAGS.TAILWIND],
    type: "Web app",
  },
  {
    id: "10",
    title: "Generador de Curriculum Vitae",
    description:
      "pagina web para generar curriculum vitae al instante y valores actualizados en tiempo real en una plantilla de curriculum vitae",
    link: "https://generador-de-curriculum-vitae.vercel.app/",
    github: "",
    image: "/generador.png",
    tags: [TAGS.REACT, TAGS.TAILWIND],
    type: "Web app",
  },
  {
    id: "5",
    title: "Cotizar criptomonedas ",
    description:
      "pagina web para Cotizar criptomonedas al instante consumiendo una api externa mostrando graficas y valores actualizados en tiempo real",
    link: "https://cripto-converter.vercel.app/",
    github: "https://github.com/Carlos01333R/criptoConverter.git",
    image: "/cripto.png",
    tags: [TAGS.REACT, TAGS.TAILWIND],
    type: "Web app",
  },
  {
    id: "4",
    title: " dragon ball z",
    description:
      "pagina web de dragon ball z con tailwind css y javascript inspirado en una api de dragon ball z creada por el equipo de la api de dragon ball z",
    link: "https://dragonballz-red.vercel.app/",
    github: "https://github.com/Carlos01333R/dragonballz.git",
    image: "/dragon.png",
    tags: [TAGS.REACT, TAGS.TAILWIND],
    type: "Web app",
  },
  {
    id: "6",
    title: "Consultorio empresarial con JavaScript y TypeScript",
    description:
      "Plataforma gratuita donde personas busca asesora de forma virtual y gratuita. Creada desde cero con React, Tailwind CSS y las ultimas tecnologias de diseño.",
    link: "https://ce-curn.vercel.app/",
    image: "/curn.png",
    tags: [TAGS.REACT, TAGS.TAILWIND],
    github: "",
    type: "Web app",
  },
  {
    id: "7",
    title: "Modelo de predicción framingham",
    description:
      "Plataforma gratuita para la CURN donde personas calculan  de forma virtual y gratuita. Su probadilidad de riesgo cardiavascular apartir de 10 años.",
    link: "https://reanimated-pilot.000webhostapp.com/proyecto_final/what_is.html",
    image: "/framingham.png",
    tags: [TAGS.PHP, TAGS.TAILWIND, TAGS.MYSQL],
    github: "",
    type: "Web app",
  },
  {
    id: "8",
    title: "Consultoria online",
    description:
      "Plataforma gratuita para la CURN donde personas busca asesora de forma virtual y gratuita. en nuestra plataforma de consultores y asesores",
    link: "https://half-length-occurre.000webhostapp.com/curn/index.php",
    image: "/consultoria.png",
    tags: [TAGS.PHP, TAGS.TAILWIND, TAGS.MYSQL],
    github: "",
    type: "Web app",
  },
];
