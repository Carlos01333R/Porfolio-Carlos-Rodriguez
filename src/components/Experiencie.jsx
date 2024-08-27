import ExperienceItem from "./ExperienceItem";
import Briefcase from "./icon/briefcase";
export default function Experiencie() {
  const EXPERIENCIE = [
    {
      id: 1,
      date: "2020-2022",
      title: "Alcaldia de cartagena",
      company: "Pes pedro romero",
      description:
        "Gestión de base de datos y software, ademas de ayudar en sistemas informaticos  ",
      link: "https://drive.google.com/file/d/1ifylpEXDYYGBN8wTqg8mQ1KRyfx4UyK2/view?usp=sharing",
    },
    {
      id: 2,
      date: "Actualmente...",
      title: "Principal Frontend ",
      company: "Propio",
      description:
        "Desarrollo de aplicaciones web con React, javaScript, Tailwind o php y MySQL. trabajo freelance en landing page.",
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
        {EXPERIENCIE.map((experiencie) => (
          <li className="" key={experiencie.id}>
            <ExperienceItem
              title={experiencie.title}
              company={experiencie.company}
              description={experiencie.description}
              date={experiencie.date}
              link={experiencie.link}
            />
          </li>
        ))}
      </ol>
    </>
  );
}
