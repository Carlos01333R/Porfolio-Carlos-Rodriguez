import ExperienceItem from "./ExperienceItem";
import Briefcase from "./icon/briefcase";
//import Spliner from "./Spliner";
//import useSupabaseExperiencia from "../hook/Apiexperiencia";

export default function Experiencie() {
  // const { experiencia, loading } = useSupabaseExperiencia();

  const items = [
    {
      name: "Alcaldia de cartagena",
      subname: "Pes pedro romero",
      start: "2020",
      end: "2022",
      urlCertificado:
        "https://www.linkedin.com/in/carlos-andres-rodriguez-avila-9742a428b/",
      descripcion:
        "Gestión de base de datos y software, ademas de ayudar en sistemas informaticos",
    },
    {
      name: "Principal Frontend",
      subname: "Propio",

      now: "actualmente...",
      descripcion:
        "Desarrollo de aplicaciones web para el cliente, desde el diseño hasta la implementación. Aplicaciones web con React,Tailwind CSS, supabase, NextUI y aplicaiones moviles con react native",
    },
  ];
  return (
    <>
      {" "}
      <h2 className="flex items-center mb-4 ml-1 text-2xl font-raleway-black gap-x-3 text-black dark:text-white">
        <Briefcase />
        Experiencia laboral
      </h2>
      <ol className="relative mt-16">
        {items.map((experiencie) => (
          <li className="relative" key={experiencie.id}>
            <ExperienceItem
              name={experiencie.name}
              subname={experiencie.subname}
              descripcion={experiencie.descripcion}
              start={experiencie.start}
              end={experiencie.end}
              urlCertificado={experiencie.urlCertificado}
              now={experiencie.now}
            />
          </li>
        ))}
      </ol>
    </>
  );
}
