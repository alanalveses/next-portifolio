import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

import article1 from "../../../public/images/articles/article-graduacao.jpg";
import article2 from "../../../public/images/articles/display.jpg";
import article3 from "../../../public/images/articles/smile.jpg";
import article4 from "../../../public/images/articles/css.jpg";
import article5 from "../../../public/images/articles/alan.jpg";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function headleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function headleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={headleMouse}
      onMouseLeave={headleMouseLeave}
    >
      <h2 className="text-xl font-semibold hover:underline">{title}</h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
        priority
        sizes="
          (max-width: 768px) 100vw,
          (max-width: 1200px) 50vw, 50vw"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4
        dark:border-light dark:bg-dark dark:text-light sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark text-right
      sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const ArticlesList = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const ArticleTest = [
    {
      title: "Quem sou eu além do perfil profissional",
      date: "24 de Abril, 2024",
      link: "../articles/AlanArticle",
      img: article5,
      category: "pessoal",
    },
    {
      title:
        "A decisão de ingressar em uma área deve ser impulsionada por sua curiosidade natural e um fascínio, algo que te faz querer mais.",
      date: "20 de Janeiro, 2024",
      link: "../articles/GraduationArticle",
      img: article1,
      target: "_self",
      category: "pessoal",
    },
    {
      title:
        "Entendendo o Atributo Display no CSS: Um dos Atributos Mais Importantes na Estilização.",
      date: "02 de Novembro, 2023",
      link: "../articles/DisplayArticle",
      img: article2,
      category: "programacao",
      target: "_self",
    },
    {
      title: "Guia de CSS: Fundamentos para compreender a estilização",
      date: "09 de Outubro, 2023",
      link: "../articles/CssArticle",
      img: article4,
      category: "programacao",
    },
    {
      title: "Equilibrando Saúde, Trabalho e Vida: Uma Jornada Pessoal.",
      date: "14 de Abril, 2023",
      link: "../articles/EquilibriumArticle",
      img: article3,
      category: "outros",
    },
    {
      title: "Pessoal",
      date: "20 de Maio, 1999",
      link: "../articles/AlanArticle",
      img: article1,
      category: "pessoal",
    },
    {
      title: "Outros",
      date: "24 de Abril, 1999",
      link: "../articles/AlanArticle",
      img: article2,
      category: "outros",
    },
  ];

  const filteredArticles = ArticleTest.filter((article) => {
    return (
      selectedCategory === "todos" || article.category === selectedCategory
    );
  });

  const getTitle = () => {
    switch (selectedCategory) {
      case "pessoal":
        return "Artigos Pessoais";
      case "programacao":
        return "Artigos de Programação";
      case "outros":
        return "Outros Artigos";
      default:
        return "Todos os Artigos";
    }
  };

  return (
    <>
      <h2 className="font-bold text-8xl mt-36 mb-24 w-full text-center lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl">
        Lista de Artigos
      </h2>

      <div className="flex justify-evenly items-center mx-24 lg:mx-14 md:mx-10 sm:mx-0
      xs:flex-wrap ">
        <button
          onClick={() => setSelectedCategory("pessoal")}
          className="flex items-center bg-dark text-light p-2.5 px-5
                rounded-lg text-base font-semibold text-nowrap hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                sm:text-xs xs:mb-4
                "
        >
          Pessoais
        </button>
        <button
          onClick={() => setSelectedCategory("programacao")}
          className="flex items-center bg-dark text-light p-2.5 px-5
                rounded-lg text-base font-semibold text-nowrap hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                sm:text-xs xs:mb-4
                "
        >
          Programação
        </button>
        <button
          onClick={() => setSelectedCategory("outros")}
          className="flex items-center bg-dark text-light p-2.5 px-5
                rounded-lg text-base font-semibold text-nowrap hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                sm:text-xs xs:mb-4
                "
        >
          Outros
        </button>
        <button
          onClick={() => setSelectedCategory("todos")}
          className="flex items-center bg-dark text-light p-2.5 px-5
                rounded-lg text-base font-semibold text-nowrap hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                sm:text-xs xs:mb-4
                "
        >
          Todos
        </button>
      </div>

      <ul>
        <h3 className="font-bold text-4xl w-full text-center my-16 mt-12">
          {getTitle()}
        </h3>
        {filteredArticles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </ul>
    </>
  );
};

export default ArticlesList;
