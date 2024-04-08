import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CodeIcon, SpiritedAway } from "./Icons";

const Cursor = () => {
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
      className="w-10 h-10 rounded-full border  border-primary fixed z-50"
      animate={{ x: position.x+10, y: position.y+10 }}
    >
        <SpiritedAway/>
    </motion.div>
  );
};

export default Cursor;
