import AnimatedText from "@/components/global/AnimatedText";
import Layout from "@/components/global/Layout";
import Head from "next/head";
import { motion, useInView } from "framer-motion";
import {
  EmailIcon,
  EmailIconLight,
  PhoneCallingIcon,
  PhoneCallingIconLight,
  TelephoneIcon,
  TelephoneIconLight,
  WhatsAppIconContact,
} from "@/components/global/Icons";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ColorsCircle from "@/components/global/ColorsCircle";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export default function Contact() {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jjekuri", "template_7xswrj9", formRef.current, {
        publicKey: "AIHIvUfqcQssSEDSV",
      })
      .then(
        () => {
          setSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <>
      <Head>
        <title>Alan Alves | Contato</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-10 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout>
          <AnimatedText
            text="Quer compartilhar um sonho?"
            className="text-center !text-7xl md:text-6xl lg:!text-7xl sm:!text-6xl xs:!text-4xl "
          />
          <AnimatedText
            text="Vamos construí-lo juntos!"
            className="text-center !text-7xl  md:text-6xl lg:!text-7xl sm:!text-6xl xs:!text-4xl mb-24 "
          />

          <motion.div
            ref={ref}
            className="h-full flex xs:flex-col items-center"
            variants={variants}
            initial="initial"
            whileInView="animate"
          >
            <motion.div
              className="flex-1 flex flex-col gap-4 leading-11 xs:mb-24 xs:items-center xs:text-center"
              variants={variants}
            >
              <motion.div variants={variants}>
                <motion.h2 className="text-8xl text-start font-semibold lg:!text-6xl md:text-5xl sm:!text-4xl xs:!text-4xl xs:text-center">
                  Vamos conversar!
                </motion.h2>
              </motion.div>
              <div className="flex flex-col gap-8 mt-2 ">
                <motion.div className="item " variants={variants}>
                  <h2 className="xs:flex xs:items-center">
                    <EmailIcon className="!w-10 flex dark:hidden xs:ml-12 xs:mr-4 xs:mb-2" />
                    <EmailIconLight className="!w-10 hidden dark:flex xs:ml-12 xs:mr-4 xs:mb-2" />
                    E-mail
                  </h2>
                  <span className="font-light">alan.alveses@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                  <h2 className="xs:flex xs:items-center">
                    <TelephoneIcon className="!w-10 flex dark:hidden xs:ml-12 xs:mr-4 xs:mb-2" />
                    <TelephoneIconLight className="!w-10 hidden dark:flex xs:ml-12 xs:mr-4 xs:mb-2" />
                    Telefone
                  </h2>
                  <span className="font-light">11 99266-8420</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                  <h2 className="xs:flex xs:items-center">
                    <WhatsAppIconContact className="w-20 h-20 xs:ml-10 xs:mr-4 xs:mb-2" />{" "}
                    WhatsApp
                  </h2>
                  <span className="font-light">11 96217-8615</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="flex-1 flex flex-col leading-11 mt-6 relative pl-2"
              variants={variants}
            >
              <motion.div
                className="absolute m-auto -z-10"
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 0 }}
                transition={{ delay: 3, duration: 1 }}
              >
                <PhoneCallingIcon
                  className="dark:hidden "
                  animate={isInView && { pathLength: 1 }}
                />
                <PhoneCallingIconLight
                  className=" hidden dark:flex"
                  animate={isInView && { pathLength: 1 }}
                />
              </motion.div>

              <motion.form
                ref={formRef}
                onSubmit={sendEmail}
                className="flex flex-col gap-6 "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
              >
                <motion.input
                  variants={variants}
                  className="p-5 bg-transparent border border-black text-black  dark:text-light rounded-lg"
                  type="text"
                  required
                  placeholder="Seu Nome"
                  name="name"
                ></motion.input>
                <motion.input
                  variants={variants}
                  className="p-5 bg-transparent border border-black text-black dark:text-light rounded-lg"
                  type="text"
                  required
                  placeholder="E-mail"
                  name="email"
                ></motion.input>
                <motion.textarea
                  variants={variants}
                  className="p-5 bg-transparent border border-black text-black dark:text-light rounded-lg"
                  required
                  placeholder="Mensagem"
                  rows={5}
                  name="message"
                ></motion.textarea>
                <motion.button
                  variants={variants}
                  className=" mt-7 p-5 flex items-center justify-center bg-dark text-light px-5
                rounded-lg text-base font-semibold text-nowrap hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                dark:text-dark dark:bg-light dark:hover:text-light dark:hover:bg-dark
                 dark:hover:border-light"
                >
                  Enviar
                </motion.button>
                {error && "Erro ao enviar!"}
                {success && "Enviado com sucesso!"}
              </motion.form>
            </motion.div>
          </motion.div>
        </Layout>
        <ColorsCircle />
      </main>
    </>
  );
}
