import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, PinterestIcon, WhatsAppIcon } from "./Icons";
import { motion } from "framer-motion";

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
            `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://web.facebook.com/?_rdc=1&_rdr"
          target={"_blank"}
          className="w-7 mr-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>

        <motion.a
          href="https://web.facebook.com/?_rdc=1&_rdr"
          target={"_blank"}
          className="w-6 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>

        <motion.a
          href="https://web.facebook.com/?_rdc=1&_rdr"
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
      </nav>

      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/projects" title="Projetos" className="mx-4" />
        <CustomLink href="/about" title="Sobre" className="mx-4" />
        <CustomLink href="/articles" title="Artigos" className="mx-4" />
        <CustomLink href="/contact" title="Contato" className="mx-4" />
        <CustomLink href="/more" title="Mais" className="ml-4" />
      </nav>
      
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <p>Alan Alves</p>
      </div>
    </header>
  );
};

export default NavBar;
