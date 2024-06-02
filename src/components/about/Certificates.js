import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import certificate1 from "../../../public/images/certificates/CURSO SUPERIOR ADS.jpg";
import certificate2 from "../../../public/images/certificates/LAUREA ACADEMICA.jpg";
import certificate3 from "../../../public/images/certificates/CURSO REACT.jpg";
import certificate4 from "../../../public/images/certificates/CURSO UX DESIGN.jpg";
import Link from "next/link";
import { LinkArrow } from "../global/Icons";

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

const Certificates = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 mb-24 w-full text-center lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl">
        Certificados
      </h2>
      <div className="grid grid-cols-12 gap-20 mb-24 gap-y-32 lg:gap-8 md:grid-cols-1 md:gap-y-16 md:mr-4">
        <div className="col-span-6">
          <Certificate
            title="Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas"
            link="https://github.com/alanalveses/Certificados/blob/main/Curso%20Superior%20de%20Tecnologia%20em%20An%C3%A1lise%20e%20Desenvolvimento%20de%20Sistemas.pdf"
            type="Centro Universitário das Faculdades Metropolitanas Unidas - FMU"
            github="https://github.com/alanalveses/Certificados/blob/main/Curso%20Superior%20de%20Tecnologia%20em%20An%C3%A1lise%20e%20Desenvolvimento%20de%20Sistemas.pdf"
            img={certificate1}
            date="22 de dezembro de 2023"
          />
        </div>
        <div className="col-span-6">
          <Certificate
            title="Láurea Acadêmica de Melhor Desempenho do Segundo Semestre de 2023 de ADS"
            link="https://github.com/alanalveses/Certificados/blob/main/laurea%20academica%20de%20melhor%20desempenho.pdf"
            type="Centro Universitário das Faculdades Metropolitanas Unidas - FMU"
            github="https://github.com/alanalveses/Certificados/blob/main/laurea%20academica%20de%20melhor%20desempenho.pdf"
            img={certificate2}
            date="10 de abril de 2024"
          />
        </div>

        <div className="col-span-6">
          <Certificate
            title="Curso React: Desenvolvendo com JavaScript"
            link="https://github.com/alanalveses/Certificados/blob/main/Curso%20React_%20desenvolvendo%20com%20JavaScript%20-%20Alura.pdf"
            type="Alura"
            github="https://github.com/alanalveses/Certificados/blob/main/Curso%20React_%20desenvolvendo%20com%20JavaScript%20-%20Alura.pdf"
            img={certificate3}
            date="21 de janeiro de 2024"
          />
        </div>

        <div className="col-span-6 ">
          <Certificate
            title="Curso UX Design: Entenda a Área da User Experience"
            link="https://github.com/alanalveses/Certificados/blob/main/Curso%20UX%20Design_%20entenda%20a%20%C3%A1rea%20da%20User%20Experience%20-%20Alura.pdf"
            type="Alura"
            github="https://github.com/alanalveses/Certificados/blob/main/Curso%20UX%20Design_%20entenda%20a%20%C3%A1rea%20da%20User%20Experience%20-%20Alura.pdf"
            img={certificate4}
            date="03 de março de 2024"
          />
        </div>
      </div>
    </>
  );
};

export default Certificates;
