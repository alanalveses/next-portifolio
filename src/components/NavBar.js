import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  WhatsAppIcon,
} from "./Icons";
import { motion } from "framer-motion";
import Logo from "./Logo";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

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
    router.push(href)
  }

  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
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

  const handleClick = () => {
    setisOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between relative top-0 z-50 bg-light dark:bg-dark dark:text-light lg:px-16 md:px-12 sm:px-8 ">

      <button
        className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}
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

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
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
          href="https://wa.me//5511992668420?text=%20Olá,%20estava%20em%20seu%20site%20fiquei%20interessado%20em%20um%20de%20seus%20serviços!"
          target={"_blank"}
          className="w-8 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <WhatsAppIcon />
        </motion.a>

        <motion.a
          href="https://web.facebook.com/?_rdc=1&_rdr"
          target={"_blank"}
          className="w-6 mx-3 bg-light rounded-full"
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

      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/projects" title="Projetos" className="mx-4" />
        <CustomLink href="/about" title="Sobre" className="mx-4" />
        <CustomLink href="/articles" title="Artigos" className="mx-4" />
        <CustomLink href="/contact" title="Contato" className="mx-4" />
        <CustomLink href="/more" title="Mais" className="ml-4" />
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%] bg-transparent">
        <Logo />
      </div>
      
    </div>
    
    {
      isOpen ?

      <motion.div 
      initial={{scale:0, opacity:0, x: "-50%", y: "-50%"}}
      animate={{scale:1, opacity:1}}
      // transition={{duration:1}}
      className="min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">

      <nav className="flex items-center flex-col justify-center">
        <CustomMobileLink href="/" title="Home" className="" toggle={handleClick}/>
        <CustomMobileLink href="/projects" title="Projetos" className="" toggle={handleClick}/>
        <CustomMobileLink href="/about" title="Sobre" className="" toggle={handleClick}/>
        <CustomMobileLink href="/articles" title="Artigos" className="" toggle={handleClick}/>
        <CustomMobileLink href="/contact" title="Contato" className="" toggle={handleClick}/>
        <CustomMobileLink href="/more" title="Mais" className="" toggle={handleClick}/>
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
          href="https://wa.me//5511992668420?text=%20Olá,%20estava%20em%20seu%20site%20fiquei%20interessado%20em%20um%20de%20seus%20serviços!"
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

      : null
    }

    </header>
  );
};

export default NavBar;
