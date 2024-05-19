import AnimatedText from "@/components/Global/AnimatedText";
import Layout from "@/components/Global/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import article1 from "../../public/images/articles/article-graduacao.jpg";
import article2 from "../../public/images/articles/display.jpg";
import { motion } from "framer-motion";
import ColorsCircle from "@/components/Global/ColorsCircle";
import ArticlesList from "../components/Articles/ArticlesList";

const FramerImage = motion(Image);

const FeaturedArticles = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-dark rounded-2xl dark:bg-dark dark:border-light ">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark 
      rounded-br-3xl"
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
        target="_self"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg
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
      <Link href={link} target="_self">
        <h2 className="text-2xl font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Alan Alves | Artigos</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-20">
          <AnimatedText text="Palavras mudam o mundo!" className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticles
              title="Sonho da Graduação."
              summary="Artigo de autoria própria que conta um pouco sobre minha trajetória acadêmica."
              time="7 minutos de leitura"
              link="../Articles/GraduationArticle"
              target="_self"
              img={article1}
            />
            <FeaturedArticles
              title="O que é display no CSS?"
              summary="Entendendo o Atributo Display no CSS: Um dos Atributo Mais Importantes na Estilização."
              time="5 minutos de leitura"
              link="../Articles/DisplayArticle"
              target="_self"
              img={article2}
            />
          </ul>

          <ArticlesList />
        </Layout>
        <ColorsCircle />
      </main>
    </>
  );
};

export default articles;
