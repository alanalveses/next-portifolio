import AnimatedText from "@/components/global/AnimatedText";
import Layout from "@/components/global/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile-dev.jpg";
import Education from "@/components/about/Education";
import SoftSkills from "@/components/about/SoftSkills";
import ColorsCircle from "@/components/global/ColorsCircle";
import Certificates from "@/components/about/Certificates";
import HardSkills from "@/components/about/HardSkills";

const about = () => {
  return (
    <>
      <Head>
        <title>Alan Alves | Sobre</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light sm:p-1">
        <Layout className="pt-16">
          <AnimatedText
            text="A paixão alimenta o propósito!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-3 flex flex-col items-start justify-start
            xl:col-span-4 md:order-2 md:col-span-8"
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light md:mt-10">
                Desenvolvedor de Sistemas
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
            xl:col-span-4 md:order-1 md:col-span-8 sm:mr-4
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
                priority
                sizes="
                (max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-start justify-between mt-28 xl:col-span-8 xl:flex-col xl:items-center xl:gap-10 md:order-3">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light xl:text-center">
                Solusionador de Problemas
              </h2>
              <p className="font-medium">
                Gosto de construir produtos dinâmicos e criativos do início ao
                fim. Focado no desenvolvimento de experiências intuitivas que
                crescem e melhoram constantemente com base nas métricas do
                usuário.
              </p>
            </div>
          </div>
          <SoftSkills />
          <HardSkills />
          <Education />
          <Certificates />
        </Layout>
        <ColorsCircle />
      </main>
    </>
  );
};

export default about;
