import React, { useState, useEffect } from "react";

import {
  BankNotesIcon,
  Flexibility,
  PersonalizedService,
  RocketIcon,
  SupportIcon,
  UserPersonFocus,
  WhatsAppIconContact,
} from "@/components/global/Icons";
import Link from "next/link";
import AnimatedText from "../global/AnimatedText";

const items = [
  {
    icon: <RocketIcon />,
    title: "Desenvolvimento Ágil",
    summary:
      "Receber feedback constante permite realizar ajustes com maior precisão e rapidez.",
    color: "bg-orange-500",
    secondColor: "shadow-orange-200",
  },
  {
    icon: <SupportIcon />,
    title: "Suporte 1X1",
    summary:
      "Você pode entrar em contato diretamente comigo para uma compreensão mais aprofundada.",
    color: "bg-red-500",
    secondColor: "shadow-red-200",
  },
  {
    icon: <BankNotesIcon />,
    title: "Negociação",
    summary:
      "Tenho habilidades em negociações abrangentes no projeto, tanto financeiras quanto estruturais.",
    color: "bg-yellow-500",
    secondColor: "shadow-yellow-200",
  },
  {
    icon: <PersonalizedService />,
    title: "Serviço Personalizado",
    summary:
      "Tenho experiência com o público e sei lidar com todos os tipos de pessoas, adaptando-me às suas necessidades.",
    color: "bg-lime-500",
    secondColor: "shadow-lime-200",
  },
  {
    icon: <UserPersonFocus />,
    title: "Foco na Pessoa Usuária",
    summary:
      "Tudo é pensado considerando o usuário final do produto, visando proporcionar maior satisfação.",
    color: "bg-teal-500",
    secondColor: "shadow-teal-200",
  },
  {
    icon: <Flexibility />,
    title: "Flexibilidade",
    summary:
      "Tenho capacidade de me adaptar a uma variedade de projetos, prazos e equipes, independentemente da tecnologia utilizada.",
    color: "bg-indigo-500",
    secondColor: "shadow-indigo-200",
  },
];

const Differeciale = ({ item, isFocused, onPrev, onNext, onClose }) => (
  <div
    className={`relative flex flex-col items-center justify-center text-center border p-10 rounded-lg shadow-md transition-all duration-500 w-full h-full bg-white dark:bg-gray-700`}
  >
    {isFocused && onClose && (
  <button
    onClick={onClose}
    className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black hidden md:block"
  >
    ❌
  </button>
)}
    <span
      className={`p-4 rounded-full text-white shadow-lg text-4xl ${item.color} ${item.secondColor}`}
    >
      {item.icon}
    </span>
    <h3 className="mt-4 text-xl font-bold text-gray-800 dark:text-white">
      {item.title}
    </h3>
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 max-w-md">
      {item.summary}
    </p>
    <div className="flex gap-6 mt-6 text-2xl text-gray-500">
      <button onClick={onPrev} className="hover:text-black">
        ⬅️
      </button>
      <button onClick={onNext} className="hover:text-black">
        ➡️
      </button>
    </div>
  </div>
);

const Differeciales = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isHoveringGrid, setIsHoveringGrid] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleNext = () => {
    setHoverIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setHoverIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleClose = () => {
    setHoverIndex(null);
    setIsHoveringGrid(false);
  };

  return (
    <div className="flex items-center justify-between w-full mt-24 md:flex-col">
      <div className="w-1/2 flex flex-col items-center self-center mr-2 md:w-full">
        <AnimatedText
          text="Excelência Personalizada: Destaque-se com Serviços de Qualidade Superior."
          className="!text-4xl text-pretty lg:!text-center lg:!text-3xl md:!text-2xl sm:!text-xl xs:text-lg"
        />
        <p className="my-4 text-base font-medium lg:text-sm">
          Destaque-se com meus serviços personalizados e de qualidade excepcional! Como freelancer, ofereço uma abordagem única para atender às suas necessidades individuais. Com minhas habilidades especializadas e um compromisso inabalável com a excelência, garanto resultados superiores em cada projeto que assumo. Além disso, priorizo a comunicação transparente e a colaboração contínua para garantir a sua total satisfação. Escolha a excelência. Escolha um serviço que vai além das suas expectativas.
        </p>
        <div className="flex items-center self-center mt-2">
          <Link
            href="https://wa.me/5511992668420?text=%20Olá,%20estava%20em%20seu%20site%20fiquei%20interessado%20em%20um%20de%20seus%20serviços!"
            target="_blank"
            className="flex items-center bg-dark text-light p-2.5 px-5 rounded-lg text-base font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light lg:text-sm"
          >
            Mensagem <WhatsAppIconContact className="w-4 ml-1" />
          </Link>
          <Link
            href="/contact"
            className="ml-4 text-lg font-medium capitalize text-dark dark:text-light underline lg:text-sm"
          >
            Contatos
          </Link>
        </div>
      </div>

      <div
        className="w-1/2 mr-2 md:w-full md:mt-24 relative"
        onMouseEnter={() => !isSmallScreen && setIsHoveringGrid(true)}
        onMouseLeave={() => {
          if (!isSmallScreen) {
            setIsHoveringGrid(false);
            setHoverIndex(null);
          }
        }}
      >
        <div
          className={`grid grid-cols-2 grid-rows-3 gap-4 transition-opacity duration-300 ${
            isHoveringGrid ? "opacity-30 pointer-events-none" : "opacity-100"
          }`}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 border rounded-lg bg-white shadow cursor-pointer"
              onMouseEnter={!isSmallScreen ? () => setHoverIndex(index) : undefined}
              onClick={isSmallScreen ? () => {
                setHoverIndex(index);
                setIsHoveringGrid(true);
              } : undefined}
            >
              <div className="text-4xl text-white p-4 rounded-full bg-gray-700">
                {item.icon}
              </div>
            </div>
          ))}
        </div>

        {isHoveringGrid && hoverIndex !== null && (
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <Differeciale
              item={items[hoverIndex]}
              isFocused={true}
              onNext={handleNext}
              onPrev={handlePrev}
              onClose={handleClose}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Differeciales;
