/* eslint-disable react/prop-types */
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Contact from "./icon/Contact";
import Email from "./icon/Email";
import WhatsApp from "./icon/WhatsApp";
export default function DropdownContact({ email, whatsapp }) {
  return (
    <Dropdown className="text-black">
      <DropdownTrigger>
        <Button
          variant="bordered"
          color="white"
          className="bg-transparent border-2 border-gray-50 p-1 px-2 rounded-xl flex items-center gap-2"
        >
          <Contact />
          Contactame
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">
          <a className="flex items-center gap-2" href={`mailto:${email}`}>
            <Email />
            Enviar correo
          </a>
        </DropdownItem>
        <DropdownItem key="copy">
          <a
            className="flex items-center gap-2"
            target="_blank"
            href={`https://wa.me/${whatsapp}`}
          >
            <WhatsApp />
            Enviar WhatsApp
          </a>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
