import AnimatedText from "@/components/global/AnimatedText";
import Layout from "@/components/global/Layout";
import Head from "next/head";
import React from "react";
import Image from "next/image";

import article1 from "../../../public/images/articles/profile.jpg";
import article2 from "../../../public/images/articles/violin.jpg";
import article3 from "../../../public/images/articles/animes.jpg";

const AlanArticle = () => {
  return (
    <>
      <Head>
        <title>Alan Alves | Artigo Alan</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-24">
          <AnimatedText
            text="Quem sou eu além do perfil profissional?"
            className="!text-6xl sm:!text-5xl xs:!text-4xl"
          />
          <div
            className="mr-44 ml-44 mx-[3cm] my-[2cm] font-times text-base leading-relaxed text-justify
          lg:mr-32 lg:ml-32 md:mr-24 md:ml-24 sm:mr-20 sm:ml-20 xs:mr-10 xs:ml-10 xxs:mr-0 xxs:ml-0"
          >
            <p className="text-right">Autor: Alan Alves</p>
            <p className="mb-12 text-right">Data: 18 de Junho de 2024</p>

            <p className="mb-12">
              Olá! Eu sou Alan Alves, sou natural da Bahia e moro em São Paulo
              há 6 anos. Atualmente, tenho 25 anos e sou graduado em
              Desenvolvimento de Sistemas. Sou uma pessoa apaixonada por
              tecnologia, jogos digitais, animes e música erudita. Neste espaço,
              gostaria de compartilhar um pouco sobre minha jornada, meus
              interesses e o que me motiva diariamente.
            </p>

            <Image src={article1} alt="Code" className="mb-6 w-full h-1/2" />

            <h2 className="mb-6 mt-10 !text-4xl sm:!text-3xl xs:!text-2xl font-bold">
              Minha Jornada
            </h2>
            <p className="mb-6">
              Nascido e criado no interior da Bahia, tive uma infância repleta
              de marcos para minha história. Onde fui criado, a realidade é bem
              diferente da cidade grande. Ter essa troca de realidade no início
              foi bem desafiador, por causa do medo do desconhecido, mas graças
              a isso pude evoluir como pessoa. Hoje sei que posso alcançar tudo
              o que quero, com muita dedicação, esforço, persistência e
              superando quedas. Quando cheguei em São Paulo, pude falar: &#34;É,
              agora sou um adulto e terei que ser responsável por mim
              mesmo&#34;.
            </p>
            <p className="">
              Morar sozinho em um lugar desconhecido foi intenso. Meu maior
              problema foi a confiança; em minha visão, tudo e todos eram
              confiáveis, mas descobri que &#34;confie desconfiado&#34; é um
              ditado real. Além disso, tive vários outros impasses nesta
              jornada. Hoje posso dizer que evoluí de uma forma que nunca
              imaginaria. Penso de uma forma que jamais pensei antes, com uma
              mistura de otimismo e realidade, conseguindo superar obstáculos
              que para muitos são &#34;impossíveis&#34;.
            </p>

            <h2 className="mb-6 mt-10 !text-3xl sm:!text-2xl xs:!text-xl font-bold">
              Meus Interesses
            </h2>

            <p className="mb-6">
              Desde cedo, fui cativado pela ciência. Sempre quis saber tudo
              sobre algo; eu me perguntava sobre tudo e tentava buscar respostas
              em outros lugares. Às vezes, até meus professores ficavam
              irritados com minhas perguntas. Enquanto não descobria o que
              queria, não parava, e isso continua sendo uma parte significativa
              da minha vida.
            </p>
            <p className="">
              Como toda criança, sempre gostei de desenhos. Amava todos os
              tipos, principalmente os educativos. Foram justamente os desenhos
              que me levaram a esse fascínio pela tecnologia.
              &#34;Cyberchase&#34; é um desenho educativo sobre tecnologia com
              ensinamentos matemáticos e citações de tecnologia. &#34;Sword Art
              Online&#34; é um anime que combina tecnologia avançada com jogos
              de simulação da realidade, onde o jogo se torna a realidade.
              &#34;Astro Boy&#34; é um anime clássico de ficção científica
              ambientado em um mundo futurístico, onde androides convivem com
              seres humanos após o apogeu da tecnologia, repleto de
              inteligências artificiais e cidades totalmente inorgânicas.
            </p>
            <p className="mb-6">
              Hoje, ainda gosto de desenhos, especialmente animes, desenhos
              japoneses mais voltados para o público adolescente e adulto.
            </p>
              
              <Image
                src={article3}
                alt="Anime"
                className="mb-6 w-full h-1/2"
              />
              <p className="">
              Como toda criança, sempre gostei de desenhos. Amava todos os
              tipos, principalmente os educativos. Foram justamente os desenhos
              que me levaram a esse fascínio pela tecnologia.
              &#34;Cyberchase&#34; é um desenho educativo sobre tecnologia com
              ensinamentos matemáticos e citações de tecnologia. &#34;Sword Art
              Online&#34; é um anime que combina tecnologia avançada com jogos
              de simulação da realidade, onde o jogo se torna a realidade.
              &#34;Astro Boy&#34; é um anime clássico de ficção científica
              ambientado em um mundo futurístico, onde androides convivem com
              seres humanos após o apogeu da tecnologia, repleto de
              inteligências artificiais e cidades totalmente inorgânicas. <br></br>
              Hoje, ainda gosto de desenhos, especialmente animes, desenhos
              japoneses mais voltados para o público adolescente e adulto.
              </p>
            
           
              <p className="mr-10">
              Música? Adoro música. Meus gêneros favoritos são aqueles com
              presenças marcantes de instrumentos musicais, como eletrônica,
              rock e erudita. Meu gênero predileto é a música erudita, a qual
              conheci através dos animes do estúdio Ghibli. Todas as obras desse
              estúdio possuem trilhas sonoras instrumentais ou voltadas para
              ópera, muitas delas compostas por Mamoru Fujisawa, conhecido
              profissionalmente como Joe Hisaishi. Ele é um compositor e diretor
              musical que admiro profundamente e que já criou mais de 100
              trilhas sonoras de filmes e álbuns solo desde 1981.
              </p>
             
              <Image
                src={article2}
                alt="Violino"
                className="mb-6 mt-6 w-full h-1/2"
              />
            
            <p className="mb-6">
              Além de Joe Hisaishi, também aprecio compositores contemporâneos
              como Lindsey Stirling, Ludovico Einaudi e Taylor Davis, bem como
              os compositores históricos como Beethoven, Bach, Vivaldi, Chopin e
              Mozart. Recentemente, o Google fez uma homenagem encantadora a
              Bach, utilizando inteligência artificial treinada com suas
              composições para gerar uma breve melodia. Você pode conferir isso
              no link a seguir: ao lado esquerdo do nome de Bach, haverá um
              ícone. Clicando nele, abrirá o demonstrativo com IA: &nbsp;
              <strong>
                <a
                  className="text-primary dark:text-primaryDark underline"
                  href="https://www.google.com/search?sca_esv=9b22f68bf05ca09c&sca_upv=1&rlz=1C1PNFE_enBR1053BR1053&sxsrf=ADLYWIJYRGftCSCFyp_bux6v-AJhK6_MWw:1716780623743&q=Johann+Sebastian+Bach&si=ACC90nw5lwTj0y78C6qQHMsDR7nr_1_OQUI3csNfg6mi3uhU2Ze4FYWEdWxt7u8f9cHweFsFakthsbPpJYLSaHCD2fJ7DYKobysIB_wSTitH4TF12Ep7TkHzQ8_ARg2409Z7Qbb77PMwOsMtasJx6qlyN96okamZS3Ubsu7uBVxQYLfhLT7QZlYozKNV3GavrfuqPqcgCx4E7nILrJ9sLNjFpVHJjI7aibBB1Y3fM22Z4W1WRIrnDIUkEgsY2LuuHwosdg1vbT3zDquutdt8ovkUDWbUL0sAvGcdwxvPgmSreML6rPsjpq8fI9T81MJD6bH8a5sWG7a8hoh9itj7SimW7Os6EzLIGg%3D%3D&sa=X&ved=2ahUKEwiK3vCZ8qyGAxWZqZUCHdzSCpkQ3LoBegQICRAB&biw=1366&bih=599&dpr=1"
                  target="_blank"
                >
                  aqui
                </a>
              </strong>
              . Essa é a minha composição: &nbsp;
              <strong>
                <a
                  className="text-primary dark:text-primaryDark underline"
                  href="//g.co/doodle/zcrs2vf"
                  target="_blank"
                >
                  aqui
                </a>
              </strong>
              .
            </p>

            <p className="mb-6">
              Além disso, comecei a aprender a tocar violino, algo que sempre
              desejei profundamente. Não só pelo apreço que tenho pelo som e
              pelas obras eruditas, mas também pela fascinação e atração que o
              instrumento exerce sobre mim. Tocar violino exige muita dedicação
              e atenção, e estou comprometido a investir o tempo e o esforço
              necessários para me aprimorar.
            </p>
            
            <h2 className="mb-6 mt-10 !text-3xl sm:!text-2xl xs:!text-xl font-bold">
              Valores e Crenças
            </h2>
            <p className="">
              Meus valores são profundamente influenciados pelas experiências
              que vivenciei ao longo dos anos. Acredito firmemente na
              importância de uma boa comunicação, planejamento, evolução e
              empatia em todos os contextos. Colocar-se no lugar do outro
              permite entender melhor a situação. Essas crenças me guiam nas
              minhas ações e interações diárias.
            </p>

            <h2 className="mb-6 mt-10 !text-3xl sm:!text-2xl xs:!text-xl font-bold">
              O que me motiva
            </h2>
            <p className="">
              Sou motivado pela curiosidade e pela vontade de aprender mais
              sobre diversos assuntos. A sensação de realização ao conquistar
              algo, como concluir um projeto ou aprender algo novo, e ver o
              impacto positivo que causei, me impulsiona a continuar me
              esforçando e crescendo.
            </p>
            <h2 className="mb-6 mt-10 !text-3xl sm:!text-2xl xs:!text-xl font-bold">
              Sonhos e Aspirações
            </h2>
            <p className="">
              Tenho muitos sonhos e aspirações. Entre eles, ser um programador
              de sucesso, proporcionar uma vida melhor para meus pais, tocar
              violino proficientemente e conhecer diferentes países. Acredito
              que, com determinação e paixão, posso realizar esses sonhos e
              continuar a crescer como pessoa.
            </p>

            <h2 className="mb-6 mt-10 !text-3xl sm:!text-2xl xs:!text-xl font-bold">
              Considerações Finais
            </h2>
            <p className="">
            Esta é uma breve visão sobre quem eu sou. Minha vida é moldada por minhas experiências, interesses e valores. Ao compartilhar um pouco sobre minha jornada, espero que você tenha uma ideia de quem eu sou e o que me inspira. Estou sempre aberto a novas experiências e aprendizados, ansioso para ver onde a vida me levará a seguir. Acredito que, com determinação, curiosidade e paixão, posso alcançar meus sonhos e continuar a evoluir como pessoa e profissional.

            </p>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default AlanArticle;
