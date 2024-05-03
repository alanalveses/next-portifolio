import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/shashank-verma.jpg";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import SoftSkills from "@/components/SoftSkills";
import Soft from "@/components/Soft";
import ColorsCircle from "@/components/ColorsCircle";

const about = () => {
  return (
    <>
      <Head>
        <title>Alan Alves | Sobre</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-20">
          <AnimatedText
            text="A paixão alimenta o propósito!"
            className="mb-16"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Desenvolvedor de Sistemas & Solusionador de Problemas
              </h2>
              <p className="font-medium">
                Sou Alan Alves, desenvolvedor web com ênfase em React.js, amante
                de tecnologia em busca de conhecimento. Sou graduado em Análise
                e Desenvolvimento de Sistemas pela FMU e atualmente atuo como
                desenvolvedor freelancer.
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid 
            border-dark bg-light p-8
            "
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <div className="absolute top-2 -right-5 -z-20 w-[102%] h-[103%] rounded-[2rem] bg-gray-700" />
              <div className="absolute top-4 -right-7 -z-30 w-[102%] h-[103%] rounded-[2rem] bg-gray-600" />
              <div className="absolute top-6 -right-9 -z-40 w-[102%] h-[103%] rounded-[2rem] bg-gray-300" />
              <Image
                src={profilePic}
                alt="Alan Alves"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-start justify-between">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Personalizando
              </h2>
              <p className="font-medium">
                Gosto de construir produtos dinâmicos e criativos do início ao
                fim. Focado no desenvolvimento de experiências intuitivas que
                crescem e melhoram constantemente com base nas métricas do
                usuário.
              </p>
            </div>
          </div>
          <Soft />
          <Skills />
          <Education />
        </Layout>
        <ColorsCircle />
      </main>
    </>
  );
};

export default about;
