/* eslint-disable react/prop-types */
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import Code from "./icon/Code";
import Preview from "./icon/Preview";

export default function InfoProjects({
  project,
  idProject,
  isOpen,
  onOpenChange,
}) {
  const getProjectByID = (PROJECTS) => {
    return PROJECTS.find((project) => project.link === idProject);
  };

  const selectedProject = getProjectByID(project);

  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        style={{
          backgroundImage:
            'url("https://img.freepik.com/premium-photo/textured-dark-blue-background_882595-3912.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20 ",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="flex flex-col gap-2 ">
                {selectedProject ? (
                  <>
                    <section className="relative top-4 w-full flex justify-center items-center">
                      <Image
                        style={{
                          maskImage: "linear-gradient(black 90%, transparent)",
                        }}
                        src={selectedProject.image}
                        alt="project"
                        height={200}
                        className="rounded-xl object-cover w-full"
                      />
                    </section>
                    <section className="mt-4">
                      <p className="ml-2 font-raleway-black text-2xl font-bold">
                        {selectedProject.title}
                      </p>
                      <p className="ml-2 font-raleway-medium">
                        {selectedProject.description}
                      </p>
                      <ul className="flex flex-row mb-2 gap-x-2 items-center ml-1 mt-2">
                        {selectedProject.tags.map((tag) => (
                          <li key={tag.name}>
                            <span
                              className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-[3px] px-2 items-center`}
                            >
                              <tag.icon class="size-4" />
                              {tag.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </>
                ) : (
                  <p>Project not found</p>
                )}
                <div className="flex gap-2 w-full justify-center items-center mt-2 font-raleway-regular text-white text-sm font-bold">
                  {selectedProject.github != "" ? (
                    <>
                      <a
                        target="_blank"
                        className="flex items-center gap-2 bg-transparent border-2 border-gray-200 text-white py-1 px-3 rounded-xl hover:scale-105 hover:transition-all hover:duration-300"
                        href={selectedProject.github}
                      >
                        <Code />
                        Code
                      </a>

                      <a
                        target="_blank"
                        className="flex items-center gap-2 bg-transparent border-2 border-gray-200 text-white py-1 px-3 rounded-xl hover:scale-105 hover:transition-all hover:duration-300"
                        href={selectedProject.link}
                      >
                        <Preview />
                        Preview
                      </a>
                    </>
                  ) : (
                    <a
                      target="_blank"
                      className="flex items-center gap-2 bg-transparent border-2 border-gray-200 text-white py-1 px-3 rounded-xl hover:scale-105 hover:transition-all hover:duration-300"
                      href={selectedProject.link}
                    >
                      <Preview />
                      Preview
                    </a>
                  )}
                </div>
              </ModalBody>
              <ModalFooter className="m-0 pt-0 px-2">
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
