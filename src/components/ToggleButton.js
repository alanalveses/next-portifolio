import React, { useState } from "react";
import { motion } from "framer-motion";
import { EasterEggIcon } from "./Icons";

const ToggleButton = ({ setOpen }) => {
  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div
      onClick={toggleOpen}
      className="w-12 h-12 rounded-full relative -bottom-96 left-96 border-none cursor-pointer bg-transparent text-black"
    >
      <EasterEggIcon />
    </div>
  );
};

export default ToggleButton;
