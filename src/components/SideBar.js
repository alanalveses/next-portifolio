import ToggleButton from "./ToggleButton";
import React, { useState } from "react";
import { motion } from "framer-motion";

const LinksSideBar = () => {
  return (
    <div className="absolute bottom-1  flex flex-row items-center gap-5 text-light bg-dark">
      LinksSideBar
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </div>
  );
};

const SideBar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <>
      <motion.div
        className="sidebar flex flex-col items-center justify-center text-dark"
        animate={open ? "open" : "closed"}
      >
        <motion.div
          className="bg w-96 bg-dark relative -bottom-80 right-10 "
          variants={variants}
        >
          <LinksSideBar />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
      </motion.div>
    </>
  );
};

export default SideBar;
