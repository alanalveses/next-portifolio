import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import certificateADS from "../../../public/images/certificates/curso_superior_ads.jpg";
import certificateLaurea from "../../../public/images/certificates/laurea_academica.jpg";
import certificateComunicacao from "../../../public/images/certificates/comunicacao_lideres.jpg";
import certificateFull from "../../../public/images/certificates/pilha_full_stack.jpg";
import certificateUX from "../../../public/images/certificates/formacao_ux.jpg";
import certificateUI from "../../../public/images/certificates/formacao_ui.jpg";
import certificateOOP from "../../../public/images/certificates/web_oop.jpg";
import certificateAcessibilidade from "../../../public/images/certificates/acessibilidade.jpg";
import certificateHooks from "../../../public/images/certificates/jsx_hooks.jpg";
import certificate4 from "../../../public/images/certificates/CURSO UX DESIGN.jpg";
import Link from "next/link";
import { LinkArrow } from "../global/Icons";
import AnimatedText from "../Global/AnimatedText";

const FramerImage = motion(Image);

const Certificate = ({ title, type, img, link, github, date }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid p-6 relative border-dark bg-light dark:bg-dark dark:border-light
      lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark 
        rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <div
        className="absolute top-2 -right-5 -z-20 w-[102%] h-[103%] rounded-[2rem] bg-gray-700 
        rounded-br-3xl"
      />
      <div
        className="absolute top-4 -right-7 -z-30 w-[102%] h-[103%] rounded-[2rem] bg-gray-600 
        rounded-br-3xl"
      />
      <div
        className="absolute top-6 -right-9 -z-40 w-[102%] h-[103%] rounded-[2rem] bg-gray-300 
        rounded-br-3xl"
      />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg lg:w-full
        "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          priority
          sizes="
          (max-width: 768px) 100vw,
          (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <span className="text-primary dark:text-primaryDark font-medium text-xl">
            {date}
          </span>
          <Link href={github} target="_blank" className="w-8">
            <LinkArrow />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Certificates = ({ limit }) => {
  const certificates = [
    {
      title: "Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas",
      link: "https://github.com/alanalveses/Certificados/blob/main/Curso%20Superior%20de%20Tecnologia%20em%20An%C3%A1lise%20e%20Desenvolvimento%20de%20Sistemas.pdf",
      type: "Centro Universitário das Faculdades Metropolitanas Unidas - FMU",
      github: "https://github.com/alanalveses/Certificados/blob/main/Curso%20Superior%20de%20Tecnologia%20em%20An%C3%A1lise%20e%20Desenvolvimento%20de%20Sistemas.pdf",
      img: certificateADS,
      date: "22 de dezembro de 2023",
    },
    {
      title: "Láurea Acadêmica de Melhor Desempenho do Segundo Semestre de 2023 de ADS",
      link: "https://github.com/alanalveses/Certificados/blob/main/laurea%20academica%20de%20melhor%20desempenho.pdf",
      type: "Centro Universitário das Faculdades Metropolitanas Unidas - FMU",
      github: "https://github.com/alanalveses/Certificados/blob/main/laurea%20academica%20de%20melhor%20desempenho.pdf",
      img: certificateLaurea,
      date: "10 de abril de 2024",
    },
    {
      title: "Formação: Comunicação para líderes",
      link: "https://github.com/alanalveses/Certificados/blob/main/Curso%20UX%20Design_%20entenda%20a%20%C3%A1rea%20da%20User%20Experience%20-%20Alura.pdf",
      type: "Alura",
      github: "https://github.com/alanalveses/Certificados/blob/main/Curso%20UX%20Design_%20entenda%20a%20%C3%A1rea%20da%20User%20Experience%20-%20Alura.pdf",
      img: certificateComunicacao,
      date: "22 de outubro de 2024",
    },
    {
      title: "Treinamento: Pilha Completa, React com Node.js",
      link: "https://github.com/alanalveses/Certificados/blob/main/Curso%20React_%20desenvolvendo%20com%20JavaScript%20-%20Alura.pdf",
      type: "Alura",
      github: "https://github.com/alanalveses/Certificados/blob/main/Curso%20React_%20desenvolvendo%20com%20JavaScript%20-%20Alura.pdf",
      img: certificateFull,
      date: "27 de novembro de 2024",
    },
    {
      title: "Formação: UX Design",
      link: "https://github.com/alanalveses/Certificados/blob/main/Curso%20UX%20Design_%20entenda%20a%20%C3%A1rea%20da%20User%20Experience%20-%20Alura.pdf",
      type: "Alura",
      github: "https://github.com/alanalveses/Certificados/blob/main/Curso%20UX%20Design_%20entenda%20a%20%C3%A1rea%20da%20User%20Experience%20-%20Alura.pdf",
      img: certificateUX,
      date: "24 de novembro de 2024",
    },
    {
      title: "Formação: UI Design para Devs",
      link: "https://github.com/alanalveses/Certificados/blob/main/Curso%20UX%20Design_%20entenda%20a%20%C3%A1rea%20da%20User%20Experience%20-%20Alura.pdf",
      type: "Alura",
      github: "https://github.com/alanalveses/Certificados/blob/main/Curso%20UX%20Design_%20entenda%20a%20%C3%A1rea%20da%20User%20Experience%20-%20Alura.pdf",
      img: certificateUI,
      date: "24 de novembro de 2024",
    },
    {
      title: "Formação: Desenvolva Aplicações Web em JavaScript com Tarefas Concorrentes e Orientadas a Objetos",
      link: "https://github.com/alanalveses/Certificados/blob/main/Curso%20UX%20Design_%20entenda%20a%20%C3%A1rea%20da%20User%20Experience%20-%20Alura.pdf",
      type: "Alura",
      github: "https://github.com/alanalveses/Certificados/blob/main/Curso%20UX%20Design_%20entenda%20a%20%C3%A1rea%20da%20User%20Experience%20-%20Alura.pdf",
      img: certificateOOP,
      date: "24 de novembro de 2024",
    },
    {
      title: "Formação: Acessibilidade e Tecnologias Web - Técnicas em HTML, CSS e JavaScript para Projetos Inclusivos",
      link: "https://github.com/alanalveses/Certificados/blob/main/Curso%20UX%20Design_%20entenda%20a%20%C3%A1rea%20da%20User%20Experience%20-%20Alura.pdf",
      type: "Alura",
      github: "https://github.com/alanalveses/Certificados/blob/main/Curso%20UX%20Design_%20entenda%20a%20%C3%A1rea%20da%20User%20Experience%20-%20Alura.pdf",
      img: certificateAcessibilidade,
      date: "25 de novembro de 2024",
    },
    {
      title: "React: Desenvolva aplicações web usando JSX e Hooks",
      link: "https://github.com/alanalveses/Certificados/blob/main/Curso%20UX%20Design_%20entenda%20a%20%C3%A1rea%20da%20User%20Experience%20-%20Alura.pdf",
      type: "Alura",
      github: "https://github.com/alanalveses/Certificados/blob/main/Curso%20UX%20Design_%20entenda%20a%20%C3%A1rea%20da%20User%20Experience%20-%20Alura.pdf",
      img: certificateHooks,
      date: "27 de novembro de 2024",
    },
    {
      title: "Curso UX Design: Entenda a Área da User Experience",
      link: "https://github.com/alanalveses/Certificados/blob/main/Curso%20UX%20Design_%20entenda%20a%20%C3%A1rea%20da%20User%20Experience%20-%20Alura.pdf",
      type: "Alura",
      github: "https://github.com/alanalveses/Certificados/blob/main/Curso%20UX%20Design_%20entenda%20a%20%C3%A1rea%20da%20User%20Experience%20-%20Alura.pdf",
      img: certificate4,
      date: "03 de março de 2024",
    },
  ];

  
  const visibleCertificates = limit ? certificates.slice(0, limit) : certificates;

  return (
    <>
      <AnimatedText
            text="Certificados"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
      <div className="grid grid-cols-12 gap-20 mb-24 gap-y-32">
        {visibleCertificates.map((cert, index) => (
          <div className="col-span-6" key={index}>
            <Certificate {...cert} />
          </div>
        ))}
      </div>
    </>
  );
};


export default Certificates;
