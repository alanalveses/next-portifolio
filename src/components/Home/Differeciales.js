import React from "react";

import {
  BankNotesIcon,
  Flexibility,
  PersonalizedService,
  RocketIcon,
  SupportIcon,
  UserPersonFocus,
  WhatsAppIconContact,
} from "@/components/Global/Icons";
import Link from "next/link";
import AnimatedText from "../Global/AnimatedText";

const Differeciale = ({ icon, title, summary, color, secondColor }) => {
  return (
    <>
      <div className="group p-10 flex flex-col items-center text-center border border-l-slate-50 hover:dark:bg-slate-200 hover:bg-slate-100 cursor-pointer">
        <span
          className={` p-6 rounded-full ${color} text-white shadow-lg ${secondColor}`}
        >
          {icon}
        </span>
        <p
          className="text-xl font-medium text-slate-700 mt-3 
          group-hover:dark:text-dark dark:text-light transition-colors duration-1000 lg:text-base xs:text-sm xxs:text-xs
          "
        >
          {title}
        </p>
        <p className="mt-2 text-sm text-slate-500 lg:text-xs">{summary}</p>
      </div>
    </>
  );
};

const Differeciales = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full mt-24 md:flex-col">
        <div className="w-1/3 flex flex-col items-center self-center mr-2 md:w-full">
          <AnimatedText
            text="Excelência Personalizada: Destaque-se com Serviços de Qualidade Superior."
            className="!text-4xl text-pretty lg:!text-center lg:!text-3xl md:!text-2xl sm:!text-xl xs:text-lg"
          />
          <p className="my-4 text-base font-medium lg:text-sm">
            Destaque-se com meus serviços personalizados e de qualidade
            excepcional! Como freelancer, ofereço uma abordagem única para
            atender às suas necessidades individuais. Com minhas habilidades
            especializadas e um compromisso inabalável com a excelência, garanto
            resultados superiores em cada projeto que assumo. Além disso,
            priorizo a comunicação transparente e a colaboração contínua para
            garantir a sua total satisfação. Escolha a excelência. Escolha um
            serviço que vai além das suas expectativas.
          </p>
          <div className="flex items-center self-center mt-2">
            <Link
              href="https://wa.me//5511992668420?text=%20Olá,%20estava%20em%20seu%20site%20fiquei%20interessado%20em%20um%20de%20seus%20serviços!"
              target="_blank"
              className="flex items-center bg-dark text-light p-2.5 px-5
                rounded-lg text-base font-semibold text-nowrap hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                lg:text-sm
                "
            >
              Mensagem <WhatsAppIconContact className={"w-4 ml-1"} />
            </Link>
            <Link
              href="/contact"
              className="ml-4 text-lg font-medium capitalize text-dark dark:text-light underline
              lg:text-sm"
            >
              Contatos
            </Link>
          </div>
        </div>

        <div className="w-2/3 mr-2 md:w-full md:mt-24">
          <div className="grid grid-cols-1 2xl:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 dark:bg-dark bg-white shadow-xl shadow-neutral-100 dark:shadow-neutral-950 border p-5">
            <Differeciale
              icon={<RocketIcon />}
              title={"Desenvolvimento Ágil"}
              summary={
                "Receber feedback constante permite realizar ajustes com maior precisão e rapidez."
              }
              color={"bg-orange-500"}
              secondColor={"shadow-orange-200"}
            />
            <Differeciale
              icon={<SupportIcon />}
              title={"Suporte 1X1"}
              summary={
                "Você pode entrar em contato diretamente comigo para uma compreensão mais aprofundada."
              }
              color={"bg-red-500"}
              secondColor={"shadow-red-200"}
            />
            <Differeciale
              icon={<BankNotesIcon />}
              title={"Negociação"}
              summary={
                "Tenho habilidades em negociações abrangentes no projeto, tanto financeiras quanto estruturais."
              }
              color={"bg-yellow-500"}
              secondColor={"shadow-yellow-200"}
            />
            <Differeciale
              icon={<PersonalizedService />}
              title={"Serviço Personalizado"}
              summary={
                "Tenho experiência com o público e sei lidar com todos os tipos de pessoas, adaptando-me às suas necessidades."
              }
              color={"bg-lime-500"}
              secondColor={"shadow-lime-200"}
            />
            <Differeciale
              icon={<UserPersonFocus />}
              title={"Foco na Pessoa Usuária"}
              summary={
                "Tudo é pensado considerando o usuário final do produto, visando proporcionar maior satisfação."
              }
              color={"bg-teal-500"}
              secondColor={"shadow-teal-200"}
            />
            <Differeciale
              icon={<Flexibility />}
              title={"Flexibilidade"}
              summary={
                "Tenho capacidade de me adaptar a uma variedade de projetos, prazos e equipes, independentemente da tecnologia utilizada."
              }
              color={"bg-indigo-500"}
              secondColor={"shadow-indigo-200"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Differeciales;
