import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import project1 from "../../public/images/projects/gallery-23.jpg";
import project2 from "../../public/images/projects/gallery-24.jpg";
import project3 from "../../public/images/projects/gallery-25.jpg";
import project4 from "../../public/images/projects/gallery-34.jpg";
import project5 from "../../public/images/projects/gallery-35.jpg";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function headleMouse(event) {
        imgRef.current.style.display ="inline-block";
        x.set(event.pageX)
        y.set(-10)
    }
    function headleMouseLeave(event) {
        imgRef.current.style.display ="none";
        x.set(0)
        y.set(0)
    }


  return (
    <Link href={link} target="_blank"
    onMouseMove={headleMouse}
    onMouseLeave={headleMouseLeave}

    >
      <h2 className="text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage 
      style={{x:x, y:y}}
      initial={{opacity:0}}
      whileInView={{opacity:1, transition:{duration: 0.2}}}
      ref={imgRef} src={img} alt={title} className="z-10 w-96 h-auto hidden absolute rounded-lg" />
    </Link>
  );
};

const Project = ({ img, title, date, link }) => {
  return (
    <motion.li
    initial={{y:200}}
    whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
    viewport={{once:true}}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4">{date}</span>
    </motion.li>
  );
};

const FeaturedProjects = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-dark rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark 
      rounded-br-3xl" />
      <div className="absolute top-2 -right-5 -z-20 w-[102%] h-[103%] rounded-[2rem] bg-gray-700 
      rounded-br-3xl"/>
      <div className="absolute top-4 -right-7 -z-30 w-[102%] h-[103%] rounded-[2rem] bg-gray-600
      rounded-br-3xl"/>
      <div className="absolute top-6 -right-9 -z-40 w-[102%] h-[103%] rounded-[2rem] bg-gray-300
      rounded-br-3xl"/>

      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg
      "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="text-2xl font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Alan Alves | Artigos</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-20">
          <AnimatedText
            text="Palavras mudam o mundo!"
            className="mb-16"
          />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedProjects
              title="Últimos artigos criados por mim."
              summary="Descrição prévia do artigo a ser lido."
              time="9 minutos de leitura"
              link="/"
              img={project1}
            />
            <FeaturedProjects
              title="Últimos artigos criados por mim."
              summary="Descrição prévia do artigo a ser lido."
              time="9 minutos de leitura"
              link="/"
              img={project2}
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            Todos os Artigos
          </h2>

          <ul>
            <Project
              title="Outros artigos, aqui o componente é mais sucinto, a descrição do artigo, com características diversas mantendo uma uniformidade e consistência."
              date="10 de Março, 2024"
              link=""
              img={project5}
            />
            <Project
              title="Outros artigos, aqui o componente é mais sucinto, a descrição do artigo, com características diversas mantendo uma uniformidade e consistência."
              date="10 de Março, 2024"
              link=""
              img={project2}
            />
            <Project
              title="Outros artigos, aqui o componente é mais sucinto, a descrição do artigo, com características diversas mantendo uma uniformidade e consistência."
              date="10 de Março, 2024"
              link=""
              img={project3}
            />
            <Project
              title="Outros artigos, aqui o componente é mais sucinto, a descrição do artigo, com características diversas mantendo uma uniformidade e consistência."
              date="10 de Março, 2024"
              link=""
              img={project4}
            />
            <Project
              title="Outros artigos, aqui o componente é mais sucinto, a descrição do artigo, com características diversas mantendo uma uniformidade e consistência."
              date="10 de Março, 2024"
              link=""
              img={project3}
            />
            <Project
              title="Outros artigos, aqui o componente é mais sucinto, a descrição do artigo, com características diversas mantendo uma uniformidade e consistência."
              date="10 de Março, 2024"
              link=""
              img={project4}
            />
            <Project
              title="Outros artigos, aqui o componente é mais sucinto, a descrição do artigo, com características diversas mantendo uma uniformidade e consistência."
              date="10 de Março, 2024"
              link=""
              img={project5}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default projects;
