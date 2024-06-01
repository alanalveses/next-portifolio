import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SpiritedAway, DarthVader, SpiderMan, Pokeball } from "../global/Icons";

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
      animate={{ x: position.x + 30, y: position.y - 100 }}
    >
      {type === "spiritedAway" && (
        <SpiritedAway className="!w-12 rounded-full border bg-spiritedAwayColor border-black dark:border-light" />
      )}
      {type === "pokemon" && (
        <Pokeball className="!w-12 rounded-full border border-black dark:border-light" />
      )}
      {type === "dartVader" && (
        <DarthVader className="!w-12 rounded-full border border-black dark:border-light" />
      )}
      {type === "spiderMan" && (
        <SpiderMan className="!w-12 rounded-full border border-black dark:border-light" />
      )}
    </motion.div>
  );
};

export default Cursor;
