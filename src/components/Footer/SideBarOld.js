import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ToggleButton from "./ToggleButton";

const SideBarOld = () => {
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
    <motion.div
      className="flex flex-row items-center justify-center bg-light text-dark"
      animate={open ? "open" : "closed"}
    >
      <motion.div className=" w-96 bg-light" variants={variants}>
        <Link href={"/"} className="w-full h-full flex items-center gap-20">
          {/* Conteúdo do link aqui */}
        </Link>
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default SideBarOld;
