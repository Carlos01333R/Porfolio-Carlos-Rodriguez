import ExperienceItem from "./ExperienceItem";
import Briefcase from "./icon/briefcase";
import Spliner from "./Spliner";

import useSupabaseExperiencia from "../hook/Apiexperiencia";
export default function Experiencie() {
  const { experiencia, loading } = useSupabaseExperiencia();

  return (
    <>
      {" "}
      <section className="w-full">
        {loading && <Spliner title={"Experiencia"} />}
      </section>
      {!loading && (
        <h2 className="flex items-center mb-4 ml-1 text-2xl font-raleway-black gap-x-3 text-black dark:text-white">
          <Briefcase />
          Experiencia laboral
        </h2>
      )}
      <ol className="relative mt-16">
        {!loading &&
          experiencia.map((experiencie) => (
            <li className="relative" key={experiencie.id}>
              <ExperienceItem
                name={experiencie.name}
                subname={experiencie.subname}
                descripcion={experiencie.descripcion}
                start={experiencie.start}
                end={experiencie.end}
                urlCertificado={experiencie.urlCertificado}
                now={experiencie.now}
                louding={loading}
              />
            </li>
          ))}
      </ol>
    </>
  );
}
