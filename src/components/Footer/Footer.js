import React from "react";
import Layout from "../global/Layout";
import Link from "next/link";
import {
  FacebookIcon,
  TwitterIcon,
  TelephoneIcon,
  InstagramIcon,
  EmailIcon,
  TelephoneIconLight,
  EmailIconLight,
  PinterestIcon,
  WhatsAppIcon,
  LinkedInIcon,
  GithubIcon,
} from "../global/Icons";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg
    dark:text-light dark:border-light
    "
    >
      <Layout className="py-8 flex items-center justify-between sm:flex-col">
        <div className="flex items-center justify-center flex-col pl-20 sm:pl-0 sm:pb-6">
          <h2 className="text-base sm:text-lg">Redes Sociais</h2>
          <div className="flex items-center mt-3">
            

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
              href=""
              target={"_blank"}
              className="w-6 mx-3 bg-light rounded-full sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <PinterestIcon />
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
              href="https://www.instagram.com/alanalveses/"
              target={"_blank"}
              className="w-6 mx-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <InstagramIcon />
            </motion.a>

          </div>
        </div>

        <div className="flex flex-col sm:justify-center sm:items-center sm:pb-6">
          <a href="mailto:alan.alveses@gmail.com">
            <div className="flex items-center mt-2">
              <div className="w-8 mr-2">
                <EmailIcon className="flex dark:hidden" />
                <EmailIconLight className="hidden dark:flex" />
              </div>
              <div className="text-base">alan.alveses@gmail.com</div>
            </div>
          </a>
          <a href="tel:11962178615">
            <div className="flex items-center mt-2">
              <div className="w-6 ml-1 mr-3">
                <TelephoneIcon className="flex dark:hidden" />
                <TelephoneIconLight className="hidden dark:flex" />
              </div>
              <div className="text-base">11 96217-8615</div>
            </div>
          </a>
          <a href="tel:11992668420">
            <div className="flex items-center">
              <div className="w-6 ml-1 mr-3">
                <TelephoneIcon className="flex dark:hidden" />
                <TelephoneIconLight className="hidden dark:flex" />
              </div>
              <div className="text-base">11 99266-8420</div>
            </div>
          </a>
        </div>

        <Link
          href="/contact"
          className="underline underline-offset-2 "
          target="_self"
        >
          Oizinho
        </Link>
      </Layout>

      <Layout className="py-8 flex items-center justify-between pl-48 sm:pl-0 sm:py-0 sm:flex-col-reverse sm:pb-10">
        <span className="text-center xs:text-wrap">
          2023/{new Date().getFullYear()} &copy; Todos os Direitos Resevados.
        </span>

        <div className="flex items-center sm:pb-6">
          Feito com{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          Por&nbsp;
          <Link
            href="https://www.linkedin.com/in/alanalveses/"
            className="underline underline-offset-2"
            target="_blank"
          >
            Alan
          </Link>
        </div>

        <Link
          href="https://www.linkedin.com/in/alanalveses/"
          className="underline underline-offset-2 max-w-10 "
          target="_blank"
        ></Link>
      </Layout>
    </footer>
  );
}

export default Footer;
