/* eslint-disable react/prop-types */

import { Select, SelectItem } from "@nextui-org/react";

export default function Filter({ PROJECT, filter, setFilter }) {
  const handleSelect = (e) => {
    setFilter(e.target.value);
  };

  const UniqueType = [...new Set(PROJECT.map((animal) => animal.type))];

  return (
    <section className="flex w-full justify-end items-end mt-2">
      <div className="flex w-[200px]  items-start   text-black">
        <Select
          color="default"
          placeholder="Landing, Web app, etc."
          className="max-w-xs flex justify-end items-end"
          value={filter}
          onChange={handleSelect}
        >
          <SelectItem className="bg-gray-700 text-white" key="all" value="all">
            Todos
          </SelectItem>
          {UniqueType.map((animal) => (
            <SelectItem
              className="bg-gray-700 text-white"
              key={animal}
              value={animal}
            >
              {animal}
            </SelectItem>
          ))}
        </Select>
      </div>
    </section>
  );
}
