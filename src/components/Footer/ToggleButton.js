import React from "react";
import { motion } from "framer-motion";
import { EasterEggIcon } from "../global/Icons";

const ToggleButton = ({ setOpen }) => {
  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  const shakeAnimation = {
    initial: { x: 0, y: 0 },
    animate: {
      x: [0, -2, 2, -2, 2, 0],
      y: [0, 2, -2, 2, -2, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      onClick={toggleOpen}
      className="w-12 h-12 rounded-full relative -bottom-96 left-96 lg:left-80 lg:-bottom-80 md:left-72 sm:left-48 sm:-bottom-96 xs:left-32 xxs:left-28 border-none cursor-pointer bg-transparent text-black"
    >
      <motion.div variants={shakeAnimation} initial="initial" animate="animate">
        <EasterEggIcon />
      </motion.div>
    </div>
  );
};

export default ToggleButton;
