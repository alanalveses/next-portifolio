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
} from "@/components/InonsSkills";


const SoftSkill = ({ x, y, icon, color, secondColor, text }) => {
  return (
    <motion.div
      className={`flex items-center justify-center rounded-full font-semibold
      ${color} text-light shadow-dark cursor-pointer absolute
      `}
      whileHover={{ scale: 1.05 }}
      initial={{ x: "-10vw", y: "0vw" }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <span
        className={` flex flex-col justify-center items-center p-4 rounded-full ${color} text-white text-xs shadow-xl ${`shadow-${secondColor}`}`}
      >
        {icon}
      </span>
      <span className="pr-1">
      {text}

      </span>
    </motion.div>
  );
};

const Soft = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-36 w-full text-center'>Soft Skills</h2>
    <div className="w-full h-[150vh] relative flex items-center justify-center 
     bg-brainBackground dark:bg-brainBackgroundLight bg-no-repeat bg-contain ml-44 mt-24">
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
        icon={<AdaptationIcon />}
        color={"bg-indigo-500"}
        secondColor={"shadow-indigo-200"}
        x="-25vw"
        y="-18vw"
        text="Adaptação"
      />
      <SoftSkill
        icon={<AnalyticalThinkingIcon />}
        color={"bg-yellow-500"}
        secondColor={"shadow-yellow-200"}
        x="-17vw"
        y="-25vw"
        text="Pensamento Analitico"
      />
      <SoftSkill
        icon={<CollaborationIcon />}
        color={"bg-indigo-500"}
        secondColor={"bg-indigo-500"}
        x="-25vw"
        y="20vw"
        text="Colaboração"
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
        icon={<CriticalThinkingIcon />}
        color={"bg-red-500"}
        secondColor={"shadow-red-200"}
        x="-20vw"
        y="-10vw"
        text="Pensamento Crítico"
      />
      <SoftSkill
        icon={<DoubleChatIcon />}
        color={"bg-indigo-500"}
        secondColor={"shadow-indigo-200"}
        x="2vw"
        y="-10vw"
        text="Comunicação Acertiva"
      />
      <SoftSkill
        icon={<EmpathyIcon />}
        color={"bg-lime-500"}
        secondColor={"shadow-lime-200"}
        x="-14vw"
        y="26vw"
        text="Empatia"
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
        icon={<GroupIcon />}
        color={"bg-orange-500"}
        secondColor={"shadow-orange-200"}
        x="-10vw"
        y="19vw"
        text="Liderança"
      />
      <SoftSkill
        icon={<LightBulbIcon />}
        color={"bg-red-500"}
        secondColor={"shadow-red-200"}
        x="2vw"
        y="23vw"
        text="Criatividade"
      />
      <SoftSkill
        icon={<LogicalThinkingIcon />}
        color={"bg-orange-500"}
        secondColor={"shadow-orange-200"}
        x="0vw"
        y="-22vw"
        text="Pensamento Lógico"
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
        icon={<NegotiationIcon />}
        color={"bg-lime-500"}
        secondColor={"shadow-lime-200"}
        x="-8vw"
        y="-4vw"
        text="Negociação"
      />
      <SoftSkill
        icon={<ProactiveIcon />}
        color={"bg-teal-500"}
        secondColor={"bg-teal-500"}
        x="-25vw"
        y="-2vw"
        text="Proatividade"
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
        icon={<SetaIcon />}
        color={"bg-lime-500"}
        secondColor={"shadow-lime-200"}
        x="5vw"
        y="15vw"
        text="Visão Estratégica"
      />
      <SoftSkill
        icon={<TeamWorkIcon />}
        color={"bg-teal-500"}
        secondColor={"bg-teal-500"}
        x="7vw"
        y="1vw"
        text="Trabalho em Equipe"
      />
    </div>
    </>
  );
};

export default Soft;
