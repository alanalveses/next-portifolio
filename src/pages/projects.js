import AnimatedText from "@/components/Global/AnimatedText";
import { GithubIcon } from "@/components/Global/Icons";
import Layout from "@/components/global/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import project1 from "../../public/images/projects/lud-legends.png";
import project2 from "../../public/images/projects/confeitaria-leide.png";
import project3 from "../../public/images/projects/anime-lud.png";
import project4 from "../../public/images/projects/fokus.png";
import projectSorriaMais from "../../public/images/projects/sorria-mais.jpg";
import projectDelicaVania from "../../public/images/projects/delicias-vania.jpg";
import projectWeatheroPokemon from "../../public/images/projects/weathero-pokemon.jpg";
import projectNerdHub from "../../public/images/projects/nerd-hub.jpg";
import projectChaRevelacao from "../../public/images/projects/cha-revelacao-next.jpg";
import projectConviteSafari from "../../public/images/projects/convite-safari.jpg";
import projectKaoak from "../../public/images/projects/kaoak.jpg";
import projectLojinhaDoces from "../../public/images/projects/lojinha-doces.jpg";
import SideBar from "@/components/Footer/SideBar";
import ColorsCircle from "@/components/Global/ColorsCircle";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl relative rounded-br-2xl
    border border-solid shadow-2xl p-12 border-dark bg-light dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark 
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
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full
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

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <div className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </div>

        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-r-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visite o Projeto
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid p-6 relative border-dark bg-light dark:bg-dark dark:border-light
      xs:p-4 "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark 
      rounded-br-3xl  "
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
        className="w-full cursor-pointer overflow-hidden rounded-lg
      "
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xl:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visite
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon /> {""}
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Alan Alves | Projetos</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-24">
          <AnimatedText
            text="A imaginação é o início de um sonho!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <p className="text-base font-medium">
            Nesta seção, apresento alguns dos projetos que desenvolvi ao longo
            da minha jornada como desenvolvedor. Cada um deles foi pensado para
            resolver um problema real, conectar marcas ao seu público e explorar
            ao máximo o potencial das tecnologias modernas.
          </p>
          <p className="mb-12 text-base font-medium">
            Você encontrará desde sites institucionais até jogos interativos
            desenvolvidos com JavaScript puro, todos com design responsivo e
            foco em usabilidade. Role para conhecer melhor cada trabalho e
            entender como posso ajudar a transformar sua ideia em realidade.
          </p>

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 xs:p-2 xs:mr-2">
            {/* Sorria + */}
            <div className="col-span-12">
              <FeaturedProject
                title="Sorria +"
                summary={
                  <>
                    <p>
                      Este projeto foi desenvolvido utilizando HTML, CSS e
                      JavaScript, com o suporte de frameworks e bibliotecas como
                      Bootstrap, AOS, e Swiper, para criar um website responsivo
                      e moderno.
                    </p>
                    <p>
                      O objetivo principal foi proporcionar uma experiência
                      agradável e funcional, conectando a clínica Sorria+ a seus
                      pacientes de maneira eficiente. O site conta com uma
                      interface intuitiva, destacando informações essenciais
                      sobre os serviços oferecidos, equipe de profissionais,
                      contato e localização.
                    </p>
                    <p>Funcionalidades incluem:</p>
                    <p>
                      Animações dinâmicas, galeria de imagens interativa,
                      carrosséis de conteúdo, filtragem de conteúdo dinâmica.
                    </p>
                    <p>
                      O design responsivo garante uma navegação consistente em
                      qualquer dispositivo, posicionando a Sorria+ como uma
                      clínica inovadora e acessível para seus pacientes.
                    </p>
                  </>
                }
                link="https://clinica-sorria-mais.vercel.app/"
                target="_blank"
                type="Projeto em Destaque"
                github="https://github.com/alanalveses/Clinica-Sorria-Mais"
                img={projectSorriaMais}
              />
            </div>

            {/* Leide Bolos */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Leide Bolos"
                summary=""
                link="https://leidebolos.site/"
                target="_blank"
                type="Projeto em Destaque"
                github="https://github.com/alanalveses/Confeitaria-da-Leide"
                img={project2}
              />
            </div>

            {/* Convite Chá de Fralda */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Convite Chá de Fralda"
                summary="Descricao previa do projeto."
                link="https://cha-revelacao-rust.vercel.app/"
                type="Projeto em Destaque"
                github="https://github.com/alanalveses/cha-revelacao-next"
                img={projectChaRevelacao}
              />
            </div>

            {/* Convite Safari */}
            <div className="col-span-12">
              <FeaturedProject
                title="Convite Aniversário"
                summary={
                  <>
                    <p>
                      Convite de aniversário infantil com tema Safari,
                      desenvolvido em Next.js e Tailwind CSS. O projeto segue a
                      abordagem mobile first, garantindo uma ótima experiência
                      em dispositivos móveis, além de contar com animações
                      interativas, layout totalmente responsivo e integração com
                      Google Sheets para gerenciamento de confirmações (RSVP).
                    </p>

                    <p>
                      Durante o desenvolvimento, foram aplicados princípios de
                      metodologias ágeis, com comunicação diária com o cliente
                      por meio de reuniões rápidas (daily scrum). As alterações
                      solicitadas foram implementadas de forma iterativa até
                      alcançar o resultado final esperado.
                    </p>
                  </>
                }
                link="https://convite-safari.vercel.app/"
                type="Projeto em Destaque"
                github="https://github.com/alanalveses/convite-safari"
                target="_blank"
                img={projectConviteSafari}
              />
            </div>

            {/* Lud Legends */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Lud Legends"
                summary="Projeto desenvolvido com HTML, CSS e JavaScript puros para
                      criar um website responsivo, com o intuito de oferecer uma
                      experiência prática e simplificada para ajudar pessoas que
                      estão iniciando sua jornada no jogo Mobile Legends: Bang
                      Bang.
                      O website conta com uma interface intuitiva e fácil de
                      usar, onde os usuários podem acessar informações
                      essenciais sobre o jogo, como guias para personagens,
                      dicas para iniciantes, estratégias de jogo e notícias
                      atualizadas. A navegação é fluida e adaptável a diferentes
                      dispositivos, garantindo uma experiência consistente em
                      smartphones, tablets e computadores."
                link="https://lud-legends.vercel.app/"
                type="Projeto em Destaque"
                github="https://github.com/alanalveses/lud-legends"
                target="_blank"
                img={project1}
              />
            </div>

            {/* Anime Lud */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Anime Lud"
                summary="Descricao previa do projeto."
                link="https://animelud.vercel.app/"
                type="Projeto em Destaque"
                github="https://github.com/alanalveses/anime-lud"
                img={project3}
              />
            </div>

            {/* Delícias da Vânia */}
            <div className="col-span-12">
              <FeaturedProject
                title="Delícias da Vânia"
                summary={
                  <>
                    <p>
                      Projeto desenvolvido com HTML, CSS com Bootstrap e
                      JavaScript para criar um website responsivo, com o intuito
                      de oferecer uma experiência prática e simplificada para os
                      clientes que queiram um dia mais doce.
                    </p>
                    <p>
                      O site desenvolvido para a Delícias da Vânia foi pensado
                      para valorizar a essência e a qualidade dos doces
                      oferecidos, criando uma experiência simples e envolvente
                      para os clientes.
                    </p>
                    <p>
                      Com um design atrativo e navegação prática, o site permite
                      que os visitantes conheçam o cardápio completo, explorando
                      com facilidade as opções de bolos, tortas e doces
                      exclusivos. Além disso, destaca informações importantes
                      sobre a confeitaria, como contato para encomendas e
                      localização, facilitando a comunicação entre o negócio e
                      seus clientes.
                    </p>
                    <p>
                      Totalmente responsivo, o site proporciona uma experiência
                      consistente em todos os dispositivos, reforçando a conexão
                      da Delícias da Vânia com seu público e sua paixão por
                      oferecer sabores únicos.
                    </p>
                  </>
                }
                link="https://delicias-da-vania.vercel.app/"
                type="Projeto em Destaque"
                github="https://github.com/alanalveses/delicias-da-vania"
                target="_blank"
                img={projectDelicaVania}
              />
            </div>
            {/* Nerd Hub */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Nerd Hub"
                summary="Projeto NerdHub."
                link="https://nerd-hub.vercel.app/"
                type="Projeto em Destaque"
                github="https://github.com/alanalveses/nerdhub"
                target="_blank"
                img={projectNerdHub}
              />
            </div>
            {/* Weathero Pokémon */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Weathero Pokémon"
                summary=""
                link="https://weatherio-blue.vercel.app/#/current-location"
                type="Projeto em Destaque"
                github="https://github.com/alanalveses/weatherio"
                target="_blank"
                img={projectWeatheroPokemon}
              />
            </div>
            {/* Kaoak */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Kaoak"
                summary="Projeto"
                link="https://kaoak.vercel.app/"
                type="Projeto em Destaque"
                github="https://github.com/alanalveses/kaoak"
                target="_blank"
                img={projectKaoak}
              />
            </div>

            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title="Convite Safari"
                summary="Convite de aniversário infantil com tema Safari, desenvolvido em Next.js e Tailwind CSS. O projeto conta com animações divertidas, layout responsivo e integração de formulário RSVP com Google Sheets."
                link="https://lojinha-doces.vercel.app/"
                type="Projeto em Destaque"
                github="https://github.com/alanalveses/lojinha-doces"
                target="_blank"
                img={projectLojinhaDoces}
              />
            </div> */}
          </div>
          <SideBar />
        </Layout>
        <ColorsCircle />
      </main>
    </>
  );
};

export default projects;
