import ToggleButton from "./ToggleButton";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const LinksSideBar = () => {
  return (
    <>
      <div className="absolute bottom-1 flex flex-col gap-6 items-center px-24 py-12 md:px-12 md:py-6 text-light bg-dark xs:ml-6 xxs:ml-0 xxs:">
        <h3>LinksSideBar</h3>
        <div className="flex flex-row items-center gap-5">
          <li className="list-none p-2 bg-light text-dark text-center border border-transparent hover:border-light hover:bg-dark hover:text-light xs:text-xs">
            <Link href="" target="_blank" className="w-10">
              Projeto 1
            </Link>
          </li>
          <li className="list-none p-2 bg-light text-dark text-center border border-transparent hover:border-light hover:bg-dark hover:text-light xs:text-xs">
            <Link href="" target="_blank" className="w-10">
              Projeto 2
            </Link>
          </li>
          <li className="list-none p-2 bg-light text-dark text-center border border-transparent hover:border-light hover:bg-dark hover:text-light xs:text-xs">
            <Link href="" target="_blank" className="w-10">
              Projeto 3
            </Link>
          </li>
          <li className="list-none p-2 bg-light text-dark text-center border border-transparent hover:border-light hover:bg-dark hover:text-light xs:text-xs">
            <Link href="" target="_blank" className="w-10">
              Projeto 4
            </Link>
          </li>
        </div>
      </div>
    </>
  );
};

const SideBar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 150px 150px)",
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
          className="bg w-96 bg-dark relative -bottom-96 right-10 "
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
