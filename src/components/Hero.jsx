import { Image } from "@nextui-org/react";
import LinkedIn from "./icon/LinkedIn";
import DropdownContact from "./Dropdown";
//import useSupabaseSobreMi from "../hook/ApiSobreMi";
//import Spliner from "./Spliner";
export default function Hero() {
  //const { sobreMi, loading } = useSupabaseSobreMi();
  return (
    <>
      <section className="w-full text-white">
        <div className="mt-10">
          <div className="mt-20 mb-5 flex items-center gap-x-3">
            <Image
              src="https://porfolioing.vercel.app/projects/foto.png"
              alt=""
              className="rounded-full w-20 h-20 "
            />

            <a
              href="https://www.linkedin.com/in/carlos-andres-rodriguez-avila-9742a428b/"
              target="_black"
              className="border-2 border-gray-400 py-1 px-4 rounded-2xl text-gray-200 bg-transparent"
            >
              Disponible para trabaja
            </a>
          </div>
          <p className="text-2xl md:text-6xl font-raleway-black w-[50%] ">
            Hey, soy Carlos Rodriguez
          </p>
          <div className="w-[70%]">
            <p className="mt-4 text-xl font-raleway-regula">
              +2 años de experiencia.{" "}
              <span className="text-[#FEF08A] font-bold">
                Ingeniero de sistemas y tecnologo en sistemas de información y
                de software
              </span>{" "}
              de Cartagena, Colombia. Especializado en el desarrollo de
              aplicaciones web únicas.
            </p>
          </div>
        </div>
        <div className="flex gap-5 mt-5">
          <DropdownContact
            email="carlos.rodriguez.s@gmail.com"
            whatsapp="3205576260"
          />
          <a
            className="bg-transparent border-2 border-gray-50 p-1  px-2 rounded-xl flex items-center gap-2"
            target="_black"
            href={
              "https://www.linkedin.com/in/carlos-andres-rodriguez-avila-9742a428b/"
            }
          >
            <LinkedIn />
            LinkedIn
          </a>
        </div>
      </section>
    </>
  );
}
