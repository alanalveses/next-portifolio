import React from "react";
import Layout from "../Global/Layout";
import Link from "next/link";
import {
  FacebookIcon,
  TwitterIcon,
  TelephoneIcon,
  InstagramIcon,
  EmailIcon,
} from "../Global/Icons";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg
    "
    >
      <Layout className="py-8 flex items-center justify-between">
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-base">Mais Redes Sociais</h2>
          <div className="flex items-center mt-3">
            <motion.a
              href="https://www.instagram.com/alanalveses/"
              target={"_blank"}
              className="w-6 mx-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <InstagramIcon />
            </motion.a>
            <motion.a
              href="https://web.facebook.com/LastLineLove"
              target={"_blank"}
              className="w-8 mx-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FacebookIcon />
            </motion.a>
            <motion.a
              href="https://x.com/alanalveses"
              target={"_blank"}
              className="w-6 mx-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <TwitterIcon />
            </motion.a>
          </div>
        </div>

        <div className="flex flex-col">
          <a href="mailto:alan.alveses@gmail.com">
            <div className="flex items-center mt-2">
              <div className="w-8 mr-2">
                <EmailIcon />
              </div>
              <div className="text-base">alan.alveses@gmail.com</div>
            </div>
          </a>
          <a href="tel:11962178615">
            <div className="flex items-center mt-2">
              <div className="w-6 ml-1 mr-3">
                <TelephoneIcon />
              </div>
              <div className="text-base">11 96217-8615</div>
            </div>
          </a>
          <a href="tel:11992668420">
            <div className="flex items-center">
              <div className="w-6 ml-1 mr-3">
                <TelephoneIcon />
              </div>
              <div className="text-base">11 99266-8420</div>
            </div>
          </a>
        </div>

        <Link
          href="/"
          className="underline underline-offset-2 mr-16"
          target="_blank"
        >
          Oizinho
        </Link>
      </Layout>

      <Layout className="py-8 flex items-center justify-between">
        <span>
          {new Date().getFullYear()} &copy; Todos os Direitos Resevados.
        </span>

        <div className="flex items-center">
          Feito com <span className="text-primary text-2xl px-1">&#9825;</span>
          Por&nbsp;
          <Link
            href="/"
            className="underline underline-offset-2"
            target="_blank"
          >
            Alan
          </Link>
        </div>

        <Link
          href="/"
          className="underline underline-offset-2 mr-20"
          target="_blank"
        >
          Saiba Mais
        </Link>
      </Layout>
    </footer>
  );
}

export default Footer;
