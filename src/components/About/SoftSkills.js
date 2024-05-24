import React from "react";
import { motion } from "framer-motion";
import {
  AdaptationIcon,
  AnalyticalThinkingIcon,
  CollaborationIcon,
  ContinuousLearningIcon,
  CriticalThinkingIcon,
  DoubleChatIcon,
  EmotionalIntelligenceIcon,
  EmpathyIcon,
  FlexibilityIcon,
  GroupIcon,
  LightBulbIcon,
  LogicalThinkingIcon,
  MTimeIcon,
  NegotiationIcon,
  ProactiveIcon,
  ResilienceIcon,
  SetaIcon,
  TeamWorkIcon,
} from "@/components/Global/InonsSkills";

const SoftSkill = ({ x, y, icon, color, secondColor, text }) => {
  return (
    <motion.div
      className={`flex items-center justify-center rounded-full font-semibold
      ${color} text-light shadow-dark cursor-pointer absolute
      lg:py-2 lg:px-4 md:p-4 sm:p-2
      `}
      whileHover={{ scale: 1.05 }}
      initial={{ x: "-10vw", y: "0vw" }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <span
        className={` flex flex-col justify-center items-center p-4 lg:p-1 md:p-0 rounded-full ${color} text-white text-xs shadow-xl ${`shadow-${secondColor}`} md:hidden`}
      >
        {icon}
      </span>
      <span className="pr-1 lg:text-sm md:text-xs xs:text-textCursor">{text}</span>
    </motion.div>
  );
};

const SoftSkills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl w-full text-center mt-40 mb-24 md:text-6xl xs:text-4xl md:mb-16">
        Soft Skills
      </h2>
      <div className="flex items-center justify-center">
        <div
          className="w-full h-[150vh] relative flex items-center justify-center 
     bg-brainBackground dark:bg-brainBackgroundLight bg-no-repeat bg-contain 
     lg:h-[80vw] xxs:h-[40vw]"
        >
          <motion.div
            className="flex items-center justify-center rounded-full font-semibold
        bg-dark text-light shadow-dark cursor-pointer absolute
          "
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <SoftSkill
              icon={<EmotionalIntelligenceIcon />}
              color={"bg-orange-500"}
              secondColor={"shadow-orange-200"}
              x="-14vw"
              y="3vw"
              text="Inteligência Emocional"
            />
          </motion.div>

          <SoftSkill
            icon={<AnalyticalThinkingIcon />}
            color={"bg-yellow-500"}
            secondColor={"shadow-yellow-200"}
            x="-19vw"
            y="-27vw"
            text="Pensamento Analitico"
          />

          <SoftSkill
            icon={<LogicalThinkingIcon />}
            color={"bg-orange-500"}
            secondColor={"shadow-orange-200"}
            x="2vw"
            y="-25vw"
            text="Pensamento Lógico"
          />

          <SoftSkill
            icon={<AdaptationIcon />}
            color={"bg-indigo-500"}
            secondColor={"shadow-indigo-200"}
            x="-27vw"
            y="-18vw"
            text="Adaptação"
          />

          <SoftSkill
            icon={<FlexibilityIcon />}
            color={"bg-teal-500"}
            secondColor={"bg-teal-500"}
            x="-11vw"
            y="-16vw"
            text="Flexibilidade"
          />

          <SoftSkill
            icon={<CriticalThinkingIcon />}
            color={"bg-red-500"}
            secondColor={"shadow-red-200"}
            x="-27vw"
            y="-10vw"
            text="Pensamento Crítico"
          />

          <SoftSkill
            icon={<DoubleChatIcon />}
            color={"bg-indigo-500"}
            secondColor={"shadow-indigo-200"}
            x="8vw"
            y="-10vw"
            text="Comunicação Acertiva"
          />

          <SoftSkill
            icon={<ProactiveIcon />}
            color={"bg-teal-500"}
            secondColor={"bg-teal-500"}
            x="-27vw"
            y="-2vw"
            text="Proatividade"
          />

          <SoftSkill
            icon={<NegotiationIcon />}
            color={"bg-lime-500"}
            secondColor={"shadow-lime-200"}
            x="-8vw"
            y="-6vw"
            text="Negociação"
          />

          <SoftSkill
            icon={<TeamWorkIcon />}
            color={"bg-teal-500"}
            secondColor={"bg-teal-500"}
            x="12vw"
            y="1vw"
            text="Trabalho em Equipe"
          />

          <SoftSkill
            icon={<MTimeIcon />}
            color={"bg-yellow-500"}
            secondColor={"shadow-yellow-200"}
            x="-31vw"
            y="5vw"
            text="Gestao de Tempo"
          />

          <SoftSkill
            icon={<ResilienceIcon />}
            color={"bg-yellow-500"}
            secondColor={"shadow-yellow-200"}
            x="-1vw"
            y="8vw"
            text="Resiliência"
          />

          <SoftSkill
            icon={<ContinuousLearningIcon />}
            color={"bg-red-500"}
            secondColor={"shadow-red-200"}
            x="-19vw"
            y="12vw"
            text="Aprendizado Contínuo"
          />

          <SoftSkill
            icon={<SetaIcon />}
            color={"bg-lime-500"}
            secondColor={"shadow-lime-200"}
            x="10vw"
            y="15vw"
            text="Visão Estratégica"
          />

          <SoftSkill
            icon={<CollaborationIcon />}
            color={"bg-indigo-500"}
            secondColor={"bg-indigo-500"}
            x="-29vw"
            y="20vw"
            text="Colaboração"
          />

          <SoftSkill
            icon={<GroupIcon />}
            color={"bg-orange-500"}
            secondColor={"shadow-orange-200"}
            x="-10vw"
            y="19vw"
            text="Liderança"
          />

          <SoftSkill
            icon={<EmpathyIcon />}
            color={"bg-lime-500"}
            secondColor={"shadow-lime-200"}
            x="-14vw"
            y="29vw"
            text="Empatia"
          />

          <SoftSkill
            icon={<LightBulbIcon />}
            color={"bg-red-500"}
            secondColor={"shadow-red-200"}
            x="2vw"
            y="26vw"
            text="Criatividade"
          />
        </div>
      </div>
    </>
  );
};

export default SoftSkills;
