import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, WhatsAppIcon } from "./Icons";
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

const NavBar = () => {

  const [mode, setMode] = useThemeSwitcher();


  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between fixed top-0 z-50 bg-light dark:bg-dark dark:text-light lg:px-16 md:px-12 sm:px-8 ">
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
          className="w-6 ml-3"
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
          {
            mode === "dark" ?
            <SunIcon className={"fill-dark"}/>
            : <MoonIcon className={"fill-dark"} />
          }
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
        <Logo/>
      </div>
    </header>
  );
};

export default NavBar;
