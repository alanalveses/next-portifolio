import AnimatedText from "@/components/Global/AnimatedText";
import Layout from "@/components/Global/Layout";
import Head from "next/head";
import React from "react";
import Image from "next/image";

import article1 from "../../../public/images/article/cyberchase.jpg";
import article2 from "../../../public/images/article/game.jpg";
import article3 from "../../../public/images/article/code.jpg";
import article4 from "../../../public/images/article/fireworks.jpg";

const GraduationArticle = () => {
  return (
    <>
      <Head>
        <title>Alan Alves | Artigo</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center  dark:text-light">
        <Layout className="pt-24">
          <AnimatedText
            text="Começando uma Nova Jornada!"
            className=" !text-5xl"
          />
          <div className="mr-44 ml-44 mx-[3cm] my-[2cm] font-times text-base leading-relaxed text-justify">
            <p className="text-right">Autor: Alan Alves</p>
            <p className="mb-12 text-right">Data: 20 de Janeiro de 2024</p>

            <p className="mb-12">
              A decisão de ingressar em uma área deve ser impulsionada por sua
              curiosidade natural e um fascínio, algo que te faz querer mais. Ao
              longo deste artigo, você encontrará relatos sobre os momentos
              cruciais da minha trajetória, desde a escolha do curso até os
              desafios que enfrentei e as vitórias que celebrei. Espero que
              minha história inspire outros a perseguirem seus sonhos,
              independentemente das dificuldades que possam encontrar.
            </p>

            <Image src={article3} alt="Code" className="mb-6 w-full h-1/2" />

            <h2 className="mb-6 mt-10 text-4xl font-bold">Mudanças Radicais</h2>
            <p className="">
              Antes de iniciar minha jornada acadêmica, enfrentei desafios e
              obstáculos que precisei superar. Meu caminho foi repleto de altos
              e baixos, mas cada momento contribuiu para meu crescimento pessoal
              e profissional. Antes de estudar Análise e Desenvolvimento de
              Sistemas, tomei uma decisão bastante radical: mudar de cidade,
              começar do zero, assim, realizar meu sonho. Fiz essa escolha com
              cuidado, após muito planejamento e uma estratégia bem pensada para
              alcançar meus objetivos. No começo, eu estava em dúvida sobre qual
              caminho seguir, pois tinha interesse em diversas áreas.{" "}
            </p>

            <h2 className="mb-6 mt-10 text-4xl font-bold">Decidindo a Área </h2>

            <p className="mb-6">
              A tecnologia sempre exerceu um grande fascínio sobre mim. A ideia
              de como usamos coisas intangíveis, transferimos dados virtuais e
              como dispositivos funcionam sempre me deixou curioso. Cada aspecto
              da tecnologia é uma aventura. Por isso, decidi trilhar o caminho
              da tecnologia, porque sempre fui atraído pelo desconhecido e pelo
              impacto crescente da tecnologia na sociedade. Outros fatores que
              influenciaram minha decisão foram os videogames e um desenho
              animado chamado &#34;Cyberchase&#34;. Este desenho está cheio de
              referências tecnológicas, e seus episódios são projetados para
              ensinar conceitos matemáticos e habilidades de resolução de
              problemas de maneira divertida e envolvente.
            </p>

            <div className="flex mx-auto mb-6 mt-6">
              <Image
                src={article1}
                alt="Cyberchase"
                className="w-6/12 h-auto"
              />

              <Image src={article2} alt="Games" className="w-6/12 h-auto" />
            </div>

            <h2 className="mb-6 mt-10 text-4xl font-bold">Início do Sonho</h2>
            <p className="">
              Ao entrar na faculdade, eu estava entusiasmado e ansioso para
              aprender tudo sobre programação e desenvolvimento de sistemas. Nas
              primeiras semanas, as coisas foram relativamente tranquilas, com
              novos conceitos e uma rotina de estudos diferente da qual eu
              estava acostumado. Com isso, me esforcei para absorver o máximo de
              conhecimento possível. Sempre que surgia um assunto que despertava
              minha curiosidade, eu investigava mais a fundo para entender
              melhor o tópico em questão.
            </p>

            <h2 className="mb-6 mt-10 text-4xl font-bold">
              Desafios Durante o Curso
            </h2>
            <p className="">
              Ao longo do curso, enfrentei desafios significativos, muitos
              relacionados à gestão do tempo. Depois que decidi mudar de estado,
              recomeçar do zero, trabalhar e estudar, tive que elaborar um
              cronograma minucioso para acomodar todas as minhas atividades
              diárias. As disciplinas mais complexas, como algoritmos avançados
              e arquitetura de software, exigiram esforço adicional e mais tempo
              de dedicação para compreendê-las. Trabalhar em projetos em equipe
              também foi uma experiência de aprendizado valiosa, pois desenvolvi
              habilidades de gerenciamento do tempo e trabalho colaborativo.
            </p>

            <h2 className="mb-6 mt-10 text-4xl font-bold">
              Conquistas e Momentos Memoráveis
            </h2>
            <div className="flex  mx-auto mb-6 mt-6">
              <p className="mr-10">
                Apesar dos desafios, também tive muitos momentos de celebração.
                Uma conquista marcante foi o desenvolvimento de um projeto de
                software mobile com características semelhantes às de uma rede
                social. O design do aplicativo foi criado no Figma e documentado
                com base nos princípios de engenharia de software. O software
                foi desenvolvido nas matérias de &#34;Desenvolvimento Apps
                Móveis&#34; e sua documentação na &#34;Engenharia de
                Software&#34;.
              </p>
              <Image src={article4} alt="Fogos" className="w-7/12 h-auto" />
            </div>
            <p className="">
              Embora o projeto não tenha sido concluído devido ao curto prazo do
              semestre, foi uma experiência divertida e instrutiva conhecer uma
              das muitas metodologias para construir um software. Essa
              experiência me mostrou como a tecnologia pode ser moldada para
              atender às necessidades dos usuários.
            </p>
            <p className="">
              Fui eleito representante da minha turma, o que me deu a
              oportunidade de colaborar com a universidade e liderar meus
              colegas, atuando como intermediário entre os alunos e a
              instituição. Nessa função, eu tirava dúvidas coletivas, resolvia
              conflitos e ajudava a encontrar soluções para problemas comuns a
              todos.
            </p>

            <p className="">
              Além disso, participar de eventos e competições de programação com
              colegas de classe foi incrivelmente estimulante. Essas
              oportunidades me permitiram aplicar o que aprendi em situações
              práticas e aprimorar minhas habilidades de resolução de problemas
              e colaboração.
            </p>

            <h2 className="mb-6 mt-10 text-4xl font-bold">
              Conclusão da Graduação
            </h2>
            <p className="">
              Concluir o curso foi uma mistura de alívio e realização, tanto
              profissional quanto pessoal. Ter obtido meu diploma de graduação
              representa um marco significativo na minha vida, já que sempre
              tive a ambição de alcançar o ensino superior. Ao longo do curso,
              aprendi muito sobre tecnologia, mas também sobre mim mesmo,
              desenvolvendo minhas habilidades interpessoais, como resiliência,
              empatia, pensamento lógico, crítico e analítico, comunicação e
              colaboração, gestão do tempo e capacidade de superar obstáculos.
            </p>

            <h2 className="mb-6 mt-10 text-4xl font-bold">
              Considerações Finais
            </h2>
            <p className="">
              Minha jornada acadêmica foi mais do que apenas adquirir
              conhecimentos técnicos; foi um processo de autodescoberta,
              crescimento e resiliência. Sou grato por cada experiência vivida e
              ansioso para enfrentar novos desafios na próxima etapa da minha
              vida. Estou animado para aplicar meu conhecimento à minha carreira
              e continuar aprendendo e evoluindo. Ao olhar para trás, percebo
              que cada desafio enfrentado e cada conquista obtida me trouxeram
              ao ponto em que estou agora: um recém-formado, pronto para abraçar
              novas oportunidades. O campo da tecnologia está em constante
              evolução, e estou empolgado por fazer parte dessa transformação
              contínua.
            </p>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default GraduationArticle;
