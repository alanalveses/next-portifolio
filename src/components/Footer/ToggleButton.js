import React, { useState } from "react";
import { motion } from "framer-motion";
import { EasterEggIcon } from "../Global/Icons";

const ToggleButton = ({ setOpen }) => {
  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div
      onClick={toggleOpen}
      className="w-12 h-12 rounded-full relative -bottom-96 left-96 lg:left-80 lg:-bottom-80 md:left-72 sm:left-48 sm:-bottom-96 xs:left-32 xxs:left-28 border-none cursor-pointer bg-transparent text-black"
    >
      <EasterEggIcon />
    </div>
  );
};

export default ToggleButton;
