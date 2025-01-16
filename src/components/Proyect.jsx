import { Button, useDisclosure, Tooltip } from "@nextui-org/react";
import { useState } from "react";
import More from "./icon/More";
import Less from "./icon/Less";
import IconVisualStudio from "./icon/IconVisualStudio";
import Filter from "./Filter";
import Code from "./icon/Code";
import Preview from "./icon/Preview";
import Info from "./icon/Info";
import InfoProjects from "./InfoProjects";
import ReactJS from "./icon/ReactJS";
import Tailwind from "./icon/Tailwind";
import Php from "./icon/Php";
import Mysql from "./icon/Mysql";
//import Spliner from "./Spliner";
//import useProject from "../hook/ApiProject";

export default function Proyect() {
  const [slice, setSlice] = useState(4);
  const [filter, setFilter] = useState("all");
  const [idProject, setIdProject] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  //const { countries, loading } = useProject();

  const TAGS = {
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

  const PROJECTS = [
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
      github: "https://github.com/Carlos01333R/VEGGIE-KING.git",
      image: "/sorteo.png",
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

  const filterProjects = (PROJECTS) => {
    if (filter === "all") {
      return PROJECTS;
    }
    return PROJECTS.filter(
      (project) => project.type.toLowerCase() === filter.toLowerCase()
    );
  };

  const FilterType = filterProjects(PROJECTS);

  return (
    <>
      <section className="ml-3 mt-24">
        <h2 className="text-4xl font-raleway-black flex items-center gap-3">
          <IconVisualStudio />
          Proyectos
        </h2>
      </section>

      <section className="flex items-end mt-5 md:mt-0">
        <Filter PROJECT={PROJECTS} filter={filter} setFilter={setFilter} />
      </section>

      <section className="mt-14 w-full md:w-full grid grid-cols-1  gap-x-5 gap-y-5 md:grid-cols-2 m-auto md:ml-3">
        {FilterType.slice(0, slice).map((project) => (
          <>
            <div
              className="w-full  md:max-w-full m-auto relative flex justify-center items-center"
              key={project.link}
            >
              <div
                className="relative w-full h-[250px] md:max-2xl:flex md:w-[450px] bg-cover bg-center rounded-xl "
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${project.image})`,
                }}
              >
                <div className="absolute top-2 left-5 z-20 w-24 bg-gray-700 rounded-xl px-2 py-1">
                  <p className="text-center font-raleway-regular text-white text-sm font-bold">
                    {project.type}
                  </p>
                </div>
                <div className="absolute top-1 flex left-[90%] z-20 w-10 px-2 py-1">
                  <Tooltip
                    className="text-black font-raleway-medium"
                    content="Ver más información"
                    placement="top"
                  >
                    <button
                      onClick={() => {
                        setIdProject(project.id);
                        onOpen();
                      }}
                      className="bg-gray-700 rounded-full"
                      name="Info project"
                    >
                      <Info />
                    </button>
                  </Tooltip>
                </div>
                <p className="absolute bottom-5 left-5 z-20 w-[80%]  text-2xl font-raleway-black flex flex-col truncate">
                  {project.title}
                  <div className="flex gap-2 mt-2 font-raleway-regular text-white text-sm font-bold">
                    {project.code != "" ? (
                      <div className="flex gap-x-2">
                        <a
                          target="_blank"
                          className="flex items-center gap-2 bg-transparent border-2 border-gray-200 text-white py-1 px-3 rounded-xl "
                          href={project.code}
                        >
                          <Code />
                          Code
                        </a>

                        <a
                          target="_blank"
                          className="flex items-center gap-2 bg-transparent border-2 border-gray-200 text-white py-1 px-3 rounded-xl"
                          href={project.link}
                        >
                          <Preview />
                          Preview
                        </a>
                      </div>
                    ) : (
                      <a
                        target="_blank"
                        className="flex items-center gap-2 bg-transparent border-2 border-gray-200 text-white py-1 px-3 rounded-xl"
                        href={project.link}
                      >
                        <Preview />
                        Preview
                      </a>
                    )}
                  </div>
                </p>
              </div>
            </div>
          </>
        ))}
      </section>

      <div className="flex w-full justify-center mt-10">
        {slice === 4 ? (
          <Button
            variant="default"
            className="border-2 px-4 py-2 rounded-xl border-gray-700 text-white text-sm font-bold flex items-center"
            onClick={() => setSlice(slice + 5)}
          >
            <More />
            Ver mas
          </Button>
        ) : (
          <button
            className="border-2 px-4 py-2 rounded-xl border-gray-700 text-white text-sm font-bold flex items-center"
            onClick={() => setSlice(slice - 5)}
          >
            <Less />
            Ver menos
          </button>
        )}
        <InfoProjects
          project={PROJECTS}
          idProject={idProject}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        />
      </div>
    </>
  );
}
