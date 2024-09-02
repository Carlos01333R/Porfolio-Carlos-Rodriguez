import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Input,
} from "@nextui-org/react";

import { toast } from "sonner";

// eslint-disable-next-line react/prop-types
export default function Validate({ isOpen, onOpenChange }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const Data = new FormData(e.target);
    const code = Data.get("code");
    const codeAccess = "Cpey1nxn";
    if (code === "") {
      toast.error("El codigo no puede estar vacio");
      return;
    }
    code == codeAccess ? redireccionatar() : toast.error("Codigo incorrecto");
  };

  const redireccionatar = () => {
    window.location.href = "https://dashboard-porfolio.vercel.app/dashboard";
  };
  return (
    <Modal
      className="bg-[#131e56]"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Editar Porfolio
            </ModalHeader>
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <Input
                  label="Codigo de acceso"
                  placeholder="Enter your code"
                  type="password"
                  name="code"
                  variant="bordered"
                />
                <div className="w-full flex justify-end  gap-2 mt-5 mb-2">
                  <Button type="submit" color="primary">
                    Validar
                  </Button>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                </div>
              </form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
