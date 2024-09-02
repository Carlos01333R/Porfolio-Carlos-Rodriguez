import { Image } from "@nextui-org/react";
import Sobremi from "./icon/Sobremi";
import useSupabaseSobreMi from "../hook/ApiSobreMi";
import SkeletonSobreMi from "./skeletonSobreMi";
import Spliner from "./Spliner";
export default function SobreMe() {
  const { sobreMi, loading } = useSupabaseSobreMi();
  return (
    <>
      <div className="flex justify-start items-start mt-20 mb-0 ml-5">
        <h2 className=" text-2xl font-raleway-black flex items-center gap-4">
          <Sobremi />
          Sobre mi
        </h2>
      </div>

      <section className="flex flex-col justify-center items-center mt-10">
        <Image
          width={200}
          height={200}
          src="https://as1.ftcdn.net/v2/jpg/05/90/59/88/1000_F_590598870_TOcGd4cUZzPoEMlxSc7XYwcupHOE0vLM.jpg"
          alt="Carlos Rodriguez"
          className="rounded-full group border-8 border-[#fff] p-2 hover:border-0 hover:transition-all hover:duration-500 hover:scale-110"
        />
        <section className="w-full mt-10">
          {loading && <Spliner title={"Descripción"} />}
        </section>

        {loading ? (
          <SkeletonSobreMi />
        ) : (
          sobreMi.map((item) => (
            <p
              key={item.id}
              className="w-[90%] md:w-[60%] mt-10 font-raleway-regular leading-8"
            >
              {item.descripcion.slice(0, 104)}
              <span className="text-yellow-400 ml-1">
                {item.descripcion.slice(104, 160)}
              </span>{" "}
              {item.descripcion.slice(160, 191)}
              <span className="text-yellow-400 ml-1">
                {item.descripcion.slice(191, 265)}
              </span>{" "}
              {item.descripcion.slice(265, 356)}
              <span className="text-yellow-400 ml-1">
                {item.descripcion.slice(356, 446)}
              </span>{" "}
              {item.descripcion.slice(446, item.descripcion.length)}.
            </p>
          ))
        )}
      </section>
    </>
  );
}
