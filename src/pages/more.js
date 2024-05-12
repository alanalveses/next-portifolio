import {
  AdaptationIcon,
  AnalyticalThinkingIcon,
  BrainIcon,
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
import Layout from "@/components/Layout";
import Head from "next/head";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PhoneCallingIconLight } from "@/components/Icons";

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

const More = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  const Differeciales = ({ icon, title, summary, color, secondColor }) => {
    return (
      <>
        <div className="p-10 flex flex-col items-center text-center border border-l-slate-50 hover:bg-slate-50 cursor-pointer">
          <span
            className={`p-6 rounded-full ${color} text-white shadow-lg ${secondColor}`}
          >
            {icon}
          </span>
          <p className="text-xl font-medium text-slate-700 mt-3">{title}</p>
          <p className="mt-2 text-sm text-slate-500">{summary}</p>
        </div>
      </>
    );
  };

  return (
    <>
      <Head>
        <title>Alan Alves | Mais</title>
        <meta nameName="description" content="any description" />
      </Head>

      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="grid grid-cols-1 2xl:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-white shadow-xl shadow-neutral-100 border p-5 mt-32">
            <Differeciales
              icon={<EmotionalIntelligenceIcon />}
              title={"Inteligencia emocional"}
              summary={"Esse é o resumo do texto"}
              color={"bg-orange-500"}
              secondColor={"shadow-orange-200"}
            />
            <Differeciales
              icon={<CriticalThinkingIcon />}
              title={"Pensamento critico"}
              summary={"Esse é o resumo do texto"}
              color={"bg-red-500"}
              secondColor={"shadow-red-200"}
            />
            <Differeciales
              icon={<AdaptationIcon />}
              title={"Colaboracao"}
              summary={"Esse é o resumo do texto"}
              color={"bg-indigo-500"}
              secondColor={"shadow-indigo-200"}
            />
            <Differeciales
              icon={<EmpathyIcon />}
              title={"Empatia"}
              summary={"Esse é o resumo do texto"}
              color={"bg-yellow-500"}
              secondColor={"shadow-yellow-200"}
            />
            <Differeciales
              icon={<LightBulbIcon />}
              title={"criatividade"}
              summary={"Esse é o resumo do texto"}
              color={"bg-lime-500"}
              secondColor={"shadow-lime-200"}
            />
            <Differeciales
              icon={<FlexibilityIcon />}
              title={"flexibilidade"}
              summary={"Esse é o resumo do texto"}
              color={"bg-teal-500"}
              secondColor={"bg-teal-500"}
            />
            <Differeciales
              icon={<NegotiationIcon />}
              title={"negociacao"}
              summary={"Esse é o resumo do texto"}
              color={"bg-indigo-500"}
              secondColor={"shadow-indigo-200"}
            />
            <Differeciales
              icon={<GroupIcon />}
              title={"Adaptabilidade "}
              summary={"Esse é o resumo do texto"}
              color={"bg-teal-500"}
              secondColor={"bg-teal-500"}
            />
            <Differeciales
              icon={<AnalyticalThinkingIcon />}
              title={"pensamento analitico"}
              summary={"Esse é o resumo do texto"}
              color={"bg-indigo-500"}
              secondColor={"shadow-indigo-200"}
            />
            <Differeciales
              icon={<ResilienceIcon />}
              title={"Resiliencia"}
              summary={"Esse é o resumo do texto"}
              color={"bg-teal-500"}
              secondColor={"bg-teal-500"}
            />
            <Differeciales
              icon={<CollaborationIcon />}
              title={"Colaboracao"}
              summary={"Esse é o resumo do texto"}
              color={"bg-indigo-500"}
              secondColor={"shadow-indigo-200"}
            />
            <Differeciales
              icon={<ContinuousLearningIcon />}
              title={"Aprendizado continuo "}
              summary={"Esse é o resumo do texto"}
              color={"bg-teal-500"}
              secondColor={"bg-teal-500"}
            />
            <Differeciales
              icon={<TeamWorkIcon />}
              title={"Trabalho em equipe "}
              summary={"Esse é o resumo do texto"}
              color={"bg-indigo-500"}
              secondColor={"shadow-indigo-200"}
            />

            <Differeciales
              icon={<DoubleChatIcon />}
              title={"Comunicação efetiva/eficaz "}
              summary={"Esse é o resumo do texto"}
              color={"bg-teal-500"}
              secondColor={"bg-teal-500"}
            />
            <Differeciales
              icon={<LogicalThinkingIcon />}
              title={"Pensamento lógico"}
              summary={"Esse é o resumo do texto"}
              color={"bg-indigo-500"}
              secondColor={"shadow-indigo-200"}
            />
            <Differeciales
              icon={<MTimeIcon />}
              title={"Gestao de tempo"}
              summary={"Esse é o resumo do texto"}
              color={"bg-indigo-500"}
              secondColor={"shadow-indigo-200"}
            />
            <Differeciales
              icon={<ProactiveIcon />}
              title={"Proatividade"}
              summary={"Esse é o resumo do texto"}
              color={"bg-indigo-500"}
              secondColor={"shadow-indigo-200"}
            />
            <Differeciales
              icon={<SetaIcon />}
              title={"Visão estratégica"}
              summary={"Esse é o resumo do texto"}
              color={"bg-indigo-500"}
              secondColor={"shadow-indigo-200"}
            />
          </div>

          <motion.div className="w-5/6 h-5/6 flex justify-center items-center mt-6" variants={variants}>
            <motion.div
              className="flex justify-center items-center -z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 3 }}
            >
              <PhoneCallingIconLight
                className="w-full h-full text-center"
                animate={isInView && { pathLength: 1 }}
              />
            </motion.div>
          </motion.div>

          <motion.div className="w-5/6 h-5/6 flex justify-center items-center mt-6" variants={variants}>
            <motion.div
              className="flex justify-center items-center -z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 3 }}
            >
              <BrainIcon
                className="w-full h-full text-center"
                animate={isInView && { pathLength: 1 }}
              />
            </motion.div>
          </motion.div>
        </Layout>
      </main>
    </>
  );
};

export default More;
