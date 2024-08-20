import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (e, section) => {
    e.preventDefault();
    const sectionElement = document.getElementById(section);
    sectionElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full mt-3 mb-10 flex justify-center items-center z-50">
      <nav
        className={`font-raleway-medium text-sm md:text-normal w-[95%] truncate md:w-[30%] border-2 border-gray-200 rounded-xl p-1 transition-all duration-300 ${
          isScrolled ? "bg-white/30 backdrop-blur-md" : ""
        }`}
      >
        <ul className="flex items-center gap-x-5 justify-center">
          <li className="flex items-center gap-x-2 ">
            <a
              href="#experiencie"
              onClick={(e) => handleScrollToSection(e, "experiencie")}
            >
              Experiencia
            </a>
          </li>
          <li className="flex items-center gap-x-2">
            <a
              href="#proyect"
              onClick={(e) => handleScrollToSection(e, "proyect")}
            >
              Proyectos
            </a>
          </li>
          <li className="flex items-center gap-x-2">
            <a
              href="#sobreMi"
              onClick={(e) => handleScrollToSection(e, "sobreMi")}
            >
              Sobre mí
            </a>
          </li>
          <li className="flex items-center gap-x-2">
            <a
              href="#contact"
              onClick={(e) => handleScrollToSection(e, "contact")}
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
