import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useRef } from "react";
import {
  CodeIcon,
  DarthVader,
  DjRepo,
  GearIcon,
  GithubIcon,
  Guitar,
  LinkedInIcon,
  MoonIcon,
  MusicDesk,
  Piano,
  PinterestIcon,
  Pokeball,
  SpeakerDisable,
  SpiderMan,
  SpiritedAway,
  SunIcon,
  Violin,
  WhatsAppIcon,
} from "../global/Icons";
import { motion } from "framer-motion";
import Logo from "../global/Logo";
import useThemeSwitcher from "../hooks/useThemeSwitcher";
import Cursoratt from "./Cursor";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
            h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"}
            dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  console.log(router);

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`
            h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"}
            dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setisOpen] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [cursorType, setCursorType] = useState("default");

  const handleClick = () => {
    setisOpen(!isOpen);
  };

  const handleCursorChange = (type) => {
    setCursorType(type);
  };

  const audioRef = useRef(null);

  const playMusic = (src) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.5;
    audio.play();

    audioRef.current = audio;
  };

  return (
    <>
      <header className="w-full px-32 py-8 font-medium flex items-center justify-between relative top-0 z-50 bg-light dark:bg-dark dark:text-light lg:px-16 md:px-12 sm:px-8 ">
        <button
          className="flex-col justify-center items-center hidden lg:flex"
          onClick={handleClick}
        >
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            } `}
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>

        <div className="w-full flex justify-between items-center lg:hidden">
          <nav className="flex items-center justify-center flex-wrap absolute left-[85%] top-8">
            {/* <motion.a
              href="https://github.com/alanalveses"
              target={"_blank"}
              className="w-7 mr-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/alanalveses/"
              target={"_blank"}
              className="w-6 mx-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>

            <motion.a
              href="https://wa.me/5511992668420?text=%20Olá,%20estava%20em%20seu%20site%20fiquei%20interessado%20em%20um%20de%20seus%20serviços!"
              target={"_blank"}
              className="w-8 mx-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <WhatsAppIcon />
            </motion.a>

            <motion.a
              href="https://br.pinterest.com/alanalveses/"
              target={"_blank"}
              className="w-6 mx-3 bg-light rounded-full"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <PinterestIcon />
            </motion.a> */}

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1
        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
        `}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>

            <motion.button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-11 ml-3 flex items-center justify-center rounded-full p-1"
              whileHover={{
                rotate: 360,
                transition: { duration: 20, repeat: Infinity },
              }}
            >
              <GearIcon />
            </motion.button>
          </nav>

          {dropdownOpen && (
            <>
              <div className="absolute top-20 right-2 w-auto bg-gray-200 p-5 dark:text-light dark:bg-gray-800 rounded-lg">
                <h3 className="text-center mx-10 mb-4">Personalizar Cursor</h3>
                <div className="flex justify-between">
                  <button
                    className="w-10 border border-black dark:border-light rounded-full bg-spiritedAwayColor"
                    onClick={() => handleCursorChange("spiritedAway")}
                  >
                    <SpiritedAway />
                  </button>
                  <button
                    className="w-10 overflow-hidden border border-black dark:border-light rounded-full"
                    onClick={() => handleCursorChange("dartVader")}
                  >
                    <DarthVader />
                  </button>
                  <button
                    className="w-10 border border-black dark:border-light rounded-full"
                    onClick={() => handleCursorChange("spiderMan")}
                  >
                    <SpiderMan />
                  </button>
                  <button
                    className="w-10 border border-black dark:border-light rounded-full"
                    onClick={() => handleCursorChange("pokemon")}
                  >
                    <Pokeball />
                  </button>
                  <button
                    className="w-10 border border-black dark:border-light rounded-full text-textCursor"
                    onClick={() => handleCursorChange("none")}
                  >
                    Sem Cursor
                  </button>
                </div>

                <h3 className="text-center mx-10 m-4">Tocar Música de Fundo</h3>
                <div className="flex justify-between">
                  <button
                    className="w-10 overflow-hidden border border-black dark:border-light rounded-full bg-spiritedAwayColor"
                    onClick={() => playMusic("sounds/in-the-end.mp3")}
                  >
                    <Piano className={"p-1"} />
                  </button>
                  <button
                    className="w-10 overflow-hidden border border-black dark:border-light rounded-full"
                    onClick={() => playMusic("sounds/nocturn-violin.mp3")}
                  >
                    <Violin className={"p-1"} />
                  </button>
                  <button
                    className="w-10 overflow-hidden border border-black dark:border-light rounded-full"
                    onClick={() => playMusic("sounds/birds-of-a-feather.mp3")}
                  >
                    <DjRepo className={"p-1"} />
                  </button>
                  <button
                    className="w-10 overflow-hidden border border-black dark:border-light rounded-full"
                    onClick={() => playMusic("sounds/faint.mp3")}
                  >
                    <Guitar className={"p-1"} />
                  </button>
                  <button
                    className="w-10 h-10 overflow-hidden border border-black dark:border-light rounded-full text-textCursor flex items-center justify-center"
                    onClick={() => {
                      if (audioRef.current) {
                        audioRef.current.pause();
                        audioRef.current = null;
                      }
                    }}
                  >
                    <SpeakerDisable className={""}/>
                  </button>
                </div>
              </div>
            </>
          )}

          <nav className="absolute left-[50%] top-12">
            <CustomLink href="/" title="Home" className="mr-4" />
            <CustomLink href="/about" title="Sobre" className="mx-4" />
            <CustomLink href="/projects" title="Projetos" className="mx-4" />
            <CustomLink href="/articles" title="Artigos" className="mx-4" />
            <CustomLink href="/contact" title="Contato" className="mx-4" />
            {/* <CustomLink href="/more" title="Mais" className="ml-4" /> */}
          </nav>

          <div className="absolute left-[13%] top-4 translate-x-[-50%] bg-transparent">
            <Logo />
          </div>
        </div>

        {isOpen ? (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            // transition={{duration:1}}
            className="min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
             bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
          >
            <nav className="flex items-center flex-col justify-center">
              <CustomMobileLink
                href="/"
                title="Home"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/about"
                title="Sobre"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/projects"
                title="Projetos"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/articles"
                title="Artigos"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/contact"
                title="Contato"
                className=""
                toggle={handleClick}
              />
              {/* <CustomMobileLink
                href="/more"
                title="Mais"
                className=""
                toggle={handleClick}
              /> */}
            </nav>

            <nav className="flex items-center justify-center flex-wrap mt-2">
              <motion.a
                href="https://github.com/alanalveses"
                target={"_blank"}
                className="w-7 mr-3 bg-light rounded-full dark:bg-dark sm:mx-1"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <GithubIcon />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/alanalveses/"
                target={"_blank"}
                className="w-6 mx-3 sm:mx-1"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkedInIcon />
              </motion.a>

              <motion.a
                href="https://wa.me/5511992668420?text=%20Olá,%20estava%20em%20seu%20site%20fiquei%20interessado%20em%20um%20de%20seus%20serviços!"
                target={"_blank"}
                className="w-8 mx-3 sm:mx-1"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <WhatsAppIcon />
              </motion.a>

              <motion.a
                href="https://web.facebook.com/?_rdc=1&_rdr"
                target={"_blank"}
                className="w-6 mx-3 bg-light rounded-full sm:mx-1"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <PinterestIcon />
              </motion.a>

              <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`ml-3 flex items-center justify-center rounded-full p-1
        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
        `}
              >
                {mode === "dark" ? (
                  <SunIcon className={"fill-dark"} />
                ) : (
                  <MoonIcon className={"fill-dark"} />
                )}
              </button>
            </nav>

            <div className="absolute left-[50%] top-2 translate-x-[-50%] bg-transparent">
              <Logo />
            </div>
          </motion.div>
        ) : null}
      </header>
      <Cursoratt type={cursorType} />
    </>
  );
};

export default NavBar;
