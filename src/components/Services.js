import React from "react";
import { PuzzleIcon } from "./Icons";
import { Differences } from "./Differences";

const Services = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-52 w-full text-center">Serviços</h2>
      <div className="w-full gap-0 mt-10 p-0">
        <ul className="p-0 m-0 grid grid-cols-3">
          <Differences
            icon={<PuzzleIcon className={"w-3/6"} />}
            title="Comunicação"
            info="Williamsburg tofu polaroid, 90's Bushwick irony locavore ethnic meh messenger bag Truffaut jean shorts."
          />
          <Differences
            icon={<PuzzleIcon className={"w-3/6"} />}
            title="Comunicação"
            info="Williamsburg tofu polaroid, 90's Bushwick irony locavore ethnic meh messenger bag Truffaut jean shorts."
          />
          <Differences
            icon={<PuzzleIcon className={"w-3/6"} />}
            title="Comunicação"
            info="Williamsburg tofu polaroid, 90's Bushwick irony locavore ethnic meh messenger bag Truffaut jean shorts."
          />
          <Differences
            icon={<PuzzleIcon className={"w-3/6"} />}
            title="Comunicação"
            info="Williamsburg tofu polaroid, 90's Bushwick irony locavore ethnic meh messenger bag Truffaut jean shorts."
          />
          <Differences
            icon={<PuzzleIcon className={"w-3/6"} />}
            title="Comunicação"
            info="Williamsburg tofu polaroid, 90's Bushwick irony locavore ethnic meh messenger bag Truffaut jean shorts."
          />
          <Differences
            icon={<PuzzleIcon className={"w-3/6"} />}
            title="Comunicação"
            info="Williamsburg tofu polaroid, 90's Bushwick irony locavore ethnic meh messenger bag Truffaut jean shorts."
          />
        </ul>
      </div>
    </>
  );
};

export default Services;
