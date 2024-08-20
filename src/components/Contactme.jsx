/* eslint-disable react/no-unescaped-entities */
import { Image, Button } from "@nextui-org/react";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import Contact from "./icon/Contact";
export default function Contactme() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name === "" || email === "" || message === "") {
      toast.error("Debes llenar todos los campos");
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("El email no es valido");
    }
  };

  return (
    <>
      <div className="flex justify-start items-start mt-32 mb-0 ml-5 ">
        <h2 className=" text-2xl font-raleway-black flex items-center gap-4">
          <Contact />
          Contacte
        </h2>
      </div>
      <section className="flex w-[100%] mt-10 justify-center items-center m-auto ">
        <div className="w-[50%] hidden md:block  m-auto  ">
          <Image
            src="https://images.pexels.com/photos/7236850/pexels-photo-7236850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className=" h-[400px] rounded-lg bg-blue-400 flex justify-center items-center ml-[50%]"
          />
        </div>
        <div className="w-full md:w-[50%] md:ml-4  m-auto">
          <form className="w-full h-[400px] " onSubmit={handleSubmit}>
            <section className="flex flex-col justify-center items-center md:justify-start md:items-start">
              <h2 className="text-4xl font-raleway-black  ">Contacto</h2>
              <p className="text-sm font-raleway-medium ml-1 ">
                Let's Collaborate
              </p>
            </section>
            <section className="md:ml-1 w-full flex flex-col justify-center items-center md:justify-start md:items-start mt-5 ">
              <label className="w-[80%] md:w-[60%] text-start" htmlFor="">
                Nombre Completo
              </label>
              <input
                className="w-[80%] md:w-[60%] bg-transparent mt-1 border-2 border-gray-200 rounded-lg p-1 px-3"
                type="text"
                placeholder="Tu nombre"
                onChange={(e) => setName(e.target.value)}
              />
              <label className="mt-3 w-[80%] md:w-[60%] text-start" htmlFor="">
                Direccion de Email
              </label>
              <input
                className="w-[80%] md:w-[60%] bg-transparent mt-1 border-2 border-gray-200 rounded-lg p-1 px-3"
                type="mail"
                placeholder="Tu correo"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="mt-3 w-[80%] text-start" htmlFor="">
                Mensaje
              </label>
              <textarea
                className="w-[80%] md:w-[60%] bg-transparent mt-1 border-2 border-gray-200 rounded-lg p-1 px-3 h-[90px]"
                placeholder="Tu mensaje"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className="w-[80%] md:w-[60%] ml-1 mt-2 flex justify-end items-end">
                <Button type="submit">Enviar</Button>
              </div>
            </section>
            <Toaster />
          </form>
        </div>
      </section>
    </>
  );
}
