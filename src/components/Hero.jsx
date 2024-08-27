import { Image } from "@nextui-org/react";
import LinkedIn from "./icon/LinkedIn";
import DropdownContact from "./Dropdown";
export default function Hero() {
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
        <div className="mt-5">
          <p className="text-4xl md:text-6xl font-raleway-black ">
            Hey, soy Carlos R.
          </p>
          <p className="mt-4 text-xl font-raleway-regular">
            +1 años de experiencia en trabajos de desarrollo web y landing page.{" "}
            <span className="text-yellow-400">
              Soy Ingeniero de sistemas y tecnologo en sistemas de información y
              de software{" "}
            </span>{" "}
            de Cartagena | Colombia 🇨🇴 . Especializado en el desarrollo de
            aplicaciones web únicas
          </p>
        </div>
        <div className="flex gap-5 mt-5">
          <DropdownContact />
          <a
            className="bg-transparent border-2 border-gray-50 p-1  px-2 rounded-xl flex items-center gap-2"
            target="_black"
            href="https://www.linkedin.com/in/carlos-andres-rodriguez-avila-9742a428b/"
          >
            <LinkedIn />
            LinkedIn
          </a>
        </div>
      </section>
    </>
  );
}
