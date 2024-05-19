import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SpiritedAway, DarthVader, SpiderMan, Pokeball } from "../Global/Icons";

const Cursor = ({ type }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="w-10 h-10 fixed z-50"
      animate={{ x: position.x + 10, y: position.y + 10 }}
    >
      {type === "spiritedAway" && (
        <SpiritedAway className="!w-12 rounded-full border bg-spiritedAwayColor border-black dark:border-light" />
      )}
      {type === "pokemon" && (
        <Pokeball className="!w-12 rounded-full border border-black" />
      )}
      {type === "dartVader" && (
        <DarthVader className="!w-12 rounded-full border border-black dark:border-light" />
      )}
      {type === "spiderMan" && (
        <SpiderMan className="!w-12 rounded-full border border-black " />
      )}
    </motion.div>
  );
};

export default Cursor;
