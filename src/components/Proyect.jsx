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
import { PROJECTS } from "../data/info";

export default function Proyect() {
  const [slice, setSlice] = useState(4);
  const [filter, setFilter] = useState("all");
  const [idProject, setIdProject] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  //const { countries, loading } = useProject();

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
                    {project.github != "" ? (
                      <div className="flex gap-x-2">
                        <a
                          target="_blank"
                          className="flex items-center gap-2 bg-transparent border-2 border-gray-200 text-white py-1 px-3 rounded-xl "
                          href={project.github}
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
