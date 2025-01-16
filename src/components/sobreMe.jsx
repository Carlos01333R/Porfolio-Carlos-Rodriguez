import { Image } from "@nextui-org/react";
import Sobremi from "./icon/Sobremi";
//import useSupabaseSobreMi from "../hook/ApiSobreMi";
//import SkeletonSobreMi from "./skeletonSobreMi";
//import Spliner from "./Spliner";
export default function SobreMe() {
  // const { sobreMi, loading } = useSupabaseSobreMi();
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

        <p className="w-[90%] md:w-[60%] mt-10 font-raleway-regular leading-8">
          Me llamo carlos Rodriguez. Empecé en la programación en la
          Universidad, tenía 16 años. Actualmente estoy{" "}
          <span className="text-[#FEF08A]">
            soy tecnologo en sistema y futuro ingeniero de sistemas.
          </span>
        </p>

        <p className="w-[90%] md:w-[60%] mt-2 font-raleway-regular leading-8">
          Algunos de mis éxitos incluyen{" "}
          <span className="text-[#FEF08A]">
            Colaborar en la Plataforma de la corporación universitaria rafael
            Nuñez.
          </span>
          Actualmente se esta trabando un nuevo proyecto en la Universidad.
        </p>

        <p className="w-[90%] md:w-[60%] mt-2 font-raleway-regular leading-8">
          Como tecnologo en sistema,
          <span className="text-[#FEF08A]">
            he trabajado con la alcaldia de cartagena Software y soporte de
            sistemas en la Alcaldia.
          </span>
          Mi objetivo es ser una de los mejores desarrolladores web de colombia.
        </p>
      </section>
    </>
  );
}
