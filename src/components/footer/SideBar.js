import ToggleButton from "./ToggleButton";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import spoink from "../../../public/images/projects/spoink.png";
import beethoven from "../../../public/images/projects/piano.png";
import emolga from "../../../public/images/projects/emolga.png";
import pokecrush from "../../../public/images/projects/pikachu.png";


const LinksSideBar = () => {
  return (
    <>
      <div className="absolute bottom-1 flex flex-col gap-6 items-center px-24 py-12 md:px-12 md:py-6 text-light bg-dark dark:bg-light dark:text-dark xs:ml-6 xxs:ml-0 xxs:">
        <h3 className="text-2xl font-bold xs:text-base">Jogos em JavaScript</h3>
        <div className="flex flex-row items-center gap-5">
          <li
            className="list-none p-2 bg-light text-dark text-center border border-transparent hover:border-light hover:bg-dark hover:text-light
          dark:bg-dark dark:text-light  dark:hover:bg-light dark:hover:text-dark dark:hover:border-dark
          xs:text-xs"
          >
            <Image
                src={pokecrush}
                alt="Poke Crush"
                className="w-10 rounded-2xl"
              />

            <Link
              href="https://poke-crush.vercel.app/"
              target="_blank"
              className="w-10"
            >
              PokeCrush
            </Link>
          </li>
          <li
            className="list-none p-2 bg-light text-dark text-center border border-transparent hover:border-light hover:bg-dark hover:text-light 
          dark:bg-dark dark:text-light  dark:hover:bg-light dark:hover:text-dark dark:hover:border-dark
          xs:text-xs"
          >
            <Image
                src={spoink}
                alt="Spoink Jump"
                className="w-10 rounded-2xl"
              />
            <Link
              href="https://spoink-jump.vercel.app/"
              target="_blank"
              className="w-10"
            >
              Spoink Jump
            </Link>
          </li>
          <li
            className="list-none p-2 bg-light text-dark text-center border border-transparent hover:border-light hover:bg-dark hover:text-light
          dark:bg-dark dark:text-light  dark:hover:bg-light dark:hover:text-dark dark:hover:border-dark
           xs:text-xs"
          >
            <Image
                src={beethoven}
                alt="Puzzle Beethoven"
                className="w-10 rounded-2xl"
              />
            <Link
              href="https://puzzle-bethoven.vercel.app/"
              target="_blank"
              className="w-10"
            >
              Puzzle Beethoven
            </Link>
          </li>
          <li
            className="list-none p-2 bg-light text-dark text-center border border-transparent hover:border-light hover:bg-dark hover:text-light
          dark:bg-dark dark:text-light  dark:hover:bg-light dark:hover:text-dark dark:hover:border-dark
           xs:text-xs"
          >
            <Image
                src={emolga}
                alt="Fpappy Emolga"
                className="w-10 rounded-2xl"
              />
            <Link
              href="https://flappy-emolga.vercel.app/"
              target="_blank"
              className="w-10"
            >
              Flappy Emolga
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
