import { Image } from "@nextui-org/react";
import LinkedIn from "./icon/LinkedIn";
import DropdownContact from "./Dropdown";
import useSupabaseSobreMi from "../hook/ApiSobreMi";
import Spliner from "./Spliner";
export default function Hero() {
  const { sobreMi, loading } = useSupabaseSobreMi();
  return (
    <>
      <section className="w-full text-white">
        <div className="flex p w-full justify-center items-center">
          <Image
            width={200}
            height={200}
            src="https://as1.ftcdn.net/v2/jpg/05/90/59/88/1000_F_590598870_TOcGd4cUZzPoEMlxSc7XYwcupHOE0vLM.jpg"
            alt="Carlos Rodriguez"
            className="rounded-full group"
          />
        </div>
        <section className="w-full mt-10">
          {loading && <Spliner title={"Datos"} />}
        </section>

        {!loading &&
          sobreMi.map((item) => (
            <>
              <div key={item.id} className="mt-5">
                <p className="text-4xl md:text-6xl font-raleway-black ">
                  Hey, soy {item.name.slice(0, 6)}.
                </p>

                <p className="mt-4 text-xl font-raleway-regular">
                  {item.experienciageneral.slice(0, 69)}
                  <span className="text-yellow-400">
                    {item.experienciageneral.slice(69, 148)}
                  </span>
                  <span>
                    {item.experienciageneral.slice(
                      148,
                      item.experienciageneral.length
                    )}
                    .
                  </span>
                </p>
              </div>
              <div className="flex gap-5 mt-5">
                <DropdownContact email={item.mail} whatsapp={item.whasapp} />
                <a
                  className="bg-transparent border-2 border-gray-50 p-1  px-2 rounded-xl flex items-center gap-2"
                  target="_black"
                  href={item.LinkedIn}
                >
                  <LinkedIn />
                  LinkedIn
                </a>
              </div>
            </>
          ))}
      </section>
    </>
  );
}
