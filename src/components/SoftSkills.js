import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold
            bg-dark text-light py-6 px-6 shadow-dark cursor-pointer absolute
            "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const SoftSkills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">
        Soft Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center 
        rounded-full bg-circularLight"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold
             bg-dark text-light p-8 shadow-dark cursor-pointer
            "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          Comunicação Efetiva
        </motion.div>

        <Skill name="Flexibilidade" x="-17vw" y="4vw" />
        <Skill name="Empatia" x="-5vw" y="-10vw" />
        <Skill name="Resiliência" x="20vw" y="6vw" />
        <Skill name="Pensamento Crícito" x="3vw" y="12vw" />
        <Skill name="Negociação" x="-20vw" y="-15vw" />
        <Skill name="Colaboração" x="15vw" y="-12vw" />
        <Skill name="Criatividade" x="32vw" y="-5vw" />
        <Skill name="Aprendizado Contínuo" x="-28vw" y="-2vw" />
        <Skill name="Autogerenciado" x="0vw" y="-20vw" />
        <Skill name="Trabalho em Equipe" x="-20vw" y="18vw" />
        <Skill name="Adaptabilidade" x="18vw" y="18vw" />
      </div>
    </>
  );
};

export default SoftSkills;
