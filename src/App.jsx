import Experiencie from "./components/Experiencie";
import Hero from "./components/Hero";
import Proyect from "./components/Proyect";
import Header from "./components/Header";
import { Toaster } from "sonner";
import SobreMe from "./components/SobreMe";
import useSupabaseSobreMi from "./hook/ApiSobreMi";

//import Contactme from "./components/Contactme";
function App() {
  const { sobreMi } = useSupabaseSobreMi();
  return (
    <>
      <header className="w-[90%] md:max-w-[900px] mx-auto mt-20">
        <Header />
      </header>
      <main className="w-[90%] md:max-w-[900px] mx-auto">
        <section id="hero" className="mt-5 mb-20">
          <Hero />
        </section>
        <section id="experiencie" className="mt-5 mb-20">
          <Experiencie />
        </section>
        <section id="proyect">
          <Proyect />
        </section>
        <section id="sobreMi">
          <SobreMe />
        </section>
        <section id="contact">{/* <Contactme /> */}</section>
        <Toaster />
      </main>

      <footer className=" w-[90%] md:max-w-[900px] mx-auto mt-40 flex justify-center items-center">
        <div className="flex gap-5 ml-1">
          {sobreMi.map((item) => (
            <p className="truncate" key={item.id}>
              © {item.name} | inspirado midudev 🙏
            </p>
          ))}
        </div>
      </footer>
    </>
  );
}

export default App;
