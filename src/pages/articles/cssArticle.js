import AnimatedText from "@/components/global/AnimatedText";
import Layout from "@/components/global/Layout";
import Head from "next/head";
import React from "react";
import Image from "next/image";

import article1 from "../../../public/images/articles/css.jpg";
import article2 from "../../../public/images/articles/responsive.png";

const DisplayArticle = () => {
  return (
    <>
      <Head>
        <title>Alan Alves | Artigo</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-24">
          <AnimatedText
            text="Guia de CSS: Fundamentos para compreender a estilização"
            className="!text-6xl sm:!text-5xl xs:!text-4xl"
          />
          <div
            className="mr-44 ml-44 mx-[3cm] my-[2cm] font-times text-base leading-relaxed text-justify
          lg:mr-32 lg:ml-32 md:mr-24 md:ml-24 sm:mr-20 sm:ml-20 xs:mr-10 xs:ml-10 xxs:mr-0 xxs:ml-0"
          >
            <p className="text-right">Autor: Alan Alves</p>
            <p className="mb-12 text-right">Data: 09 de Outubro de 2023</p>

            <p className="mb-12">
              O CSS (Cascading Style Sheets) é uma linguagem de estilização
              essencial para o desenvolvimento web, responsável por controlar a
              apresentação visual de uma página HTML. Com o CSS, desenvolvedores
              podem transformar um simples documento HTML em um site visualmente
              atraente e funcional. Ele permite aplicar estilos como cores,
              fontes, espaçamento e layout aos elementos de uma página web. Este
              artigo explora desde os fundamentos até algumas técnicas avançadas
              de CSS, ajudando iniciantes a aprimorar suas habilidades.
            </p>

            <Image src={article1} alt="Code" className="mb-6 w-full h-1/2" />

            <h2 className="mb-6 mt-10 !text-4xl sm:!text-3xl xs:!text-2xl font-bold">
              Estrutura Básica
            </h2>
            <p className="">
              A estrutura básica de um arquivo CSS consiste em seletores e
              declarações. Um seletor aponta para o elemento HTML que você quer
              estilizar, enquanto a declaração define o estilo a ser aplicado,
              composta por uma propriedade e um valor.
            </p>

            <h2 className="mb-6 mt-10 !text-3xl sm:!text-2xl xs:!text-xl font-bold">
              Seletores
            </h2>

            <p className="mb-6">
              Os seletores são a base do CSS, permitindo que você aplique
              estilos a elementos específicos no seu documento HTML, há outros
              meios de utilizar o CSS como: inline, com frameworks e interno no
              head do HTML, mas aqui iremos abortar o CSS tradicional usando
              seletores. Os seletores podem ser IDs, classes, type ou as tag do
              HTML, por exempo: &lt;div&gt;, &lt;h1&gt;, &lt;p&gt; e
              &lt;section&gt;.
            </p>

            <ul className="flex flex-col gap-4">
              <li>
                Tags HTML: Aplica estilos a todas as instâncias de um elemento
                (h1, p).
              </li>
              <li>
                Classe: Aplica estilos a elementos que têm uma determinada
                classe (.classe).
              </li>
              <li>
                ID: Aplica estilos a um único elemento com um ID específico
                (#id).
              </li>
              <li>
                Atributo: Aplica estilos a elementos que possuem um determinado
                atributo (input[type=&#34;text&#34;]).
              </li>
              <li>
                Combinados: Permitem a combinação de seletores para maior
                especificidade (div .classe p). Aqui a estilização será apenas
                na tag p dentro da classe que esta dendo da div.
              </li>
            </ul>

            <h2 className="mb-6 mt-10 !text-3xl sm:!text-2xl xs:!text-xl font-bold">
              Propriedades e Valores
            </h2>
            <ul className="flex flex-col gap-4">
              <li>
                Cor e Fundo: Controle das cores de texto e de fundo dos
                elementos (color, background-color, background-image).
              </li>
              <li>
                Texto: Estilização do texto (font-size, font-family, text-align,
                line-height).
              </li>
              <li>
                Modelo de Caixa: Manipulação do espaço ao redor dos elementos
                (margin, padding, border, width, height).
              </li>
              <li>
                Posicionamento: Controle da posição dos elementos na página
                (position, top, right, bottom, left).
              </li>
              <li>
                Display: Block, Inline, Grid e Flexbox, grid e flexbox são
                modelos de layout avançados para organizar o conteúdo de maneira
                eficiente.
              </li>
            </ul>
            <h2 className="mb-6 mt-10 !text-3xl sm:!text-2xl xs:!text-xl font-bold">
              Flexbox
            </h2>
            <p className="">
              Flexbox é um modelo de layout unidimensional que facilita a
              organização de elementos em linhas ou colunas, ajustando-se
              automaticamente ao espaço disponível. Flexbox é particularmente
              útil para criar layouts dinâmicos e responsivos.
            </p>

            <h2 className="mb-6 mt-10 !text-3xl sm:!text-2xl xs:!text-xl font-bold">
              Grid Layout
            </h2>
            <p className="">
              Grid Layout é um sistema bidimensional de layout que permite criar
              grades complexas de elementos. Ele facilita a divisão da página em
              regiões principais e a definição de relações de tamanho, posição e
              camada entre partes do conteúdo.
            </p>

            <h2 className="mb-6 mt-10 !text-3xl sm:!text-2xl xs:!text-xl font-bold">
              Media Queries
            </h2>
            <div className="flex mx-auto mb-6 mt-6 xl:flex-col xl:items-center xl:justify-center">
              <p className="mr-10">
                Media Queries são regras CSS que permitem aplicar estilos
                diferentes com base em características do dispositivo, como a
                largura da tela. Isso é essencial para o design responsivo,
                garantindo que sua página fique bem em qualquer dispositivo,
                desde desktops até smartphones.
              </p>
              <Image
                src={article2}
                alt="Code"
                className="w-7/12 h-auto xl:mt-6"
              />
            </div>

            <h2 className="mb-6 mt-10 !text-3xl sm:!text-2xl xs:!text-xl font-bold">
              Animações e Transições
            </h2>
            <p className="">
              CSS permite a criação de animações e transições para melhorar a
              experiência do usuário. As transições suavizam a mudança de um
              estilo para outro, enquanto as animações permitem mudanças mais
              complexas e repetitivas nos estilos.
            </p>

            <h2 className="mb-6 mt-10 !text-3xl sm:!text-2xl xs:!text-xl font-bold">
              Tipos de organização do código
            </h2>
            <p className="">
              A organização do código CSS é vital para facilitar a manutenção e
              a escalabilidade do projeto. Manter o código bem estruturado
              permite localizar rapidamente seções específicas e entender a
              lógica subjacente. O uso de comentários é uma prática recomendada,
              pois descreve seções e blocos de estilo, tornando o código mais
              compreensível para outros desenvolvedores e para você mesmo no
              futuro. Adotar convenções de nomenclatura, como o método BEM
              (Block, Element, Modifier), ajuda a criar nomes de classes mais
              descritivos e organizados, melhorando a clareza do código. Além
              disso, modularizar o CSS, dividindo-o em vários arquivos menores
              conforme necessário, facilita a manutenção e o gerenciamento de
              estilos específicos, como layout, componentes ou temas. Existes
              outros meios de utilizar o CSS, cada um com um tipo de organização
              e especificidades como: CSS em Pré-processadores, CSS em
              Frameworks, CSS em Componentes (CSS-in-JS) e CSS Modular.
            </p>

            <h2 className="mb-6 mt-10 !text-3xl sm:!text-2xl xs:!text-xl font-bold">
              Performance do código
            </h2>
            <p className="">
              A performance é outro aspecto crucial no desenvolvimento web, pois
              CSS bem otimizado pode reduzir significativamente o tempo de
              carregamento das páginas, proporcionando uma experiência de
              navegação mais rápida e fluida. Minificar o CSS, removendo espaços
              em branco, comentários e caracteres desnecessários, resulta em
              arquivos menores que carregam mais rapidamente. Ferramentas como
              CSSNano ou UglifyCSS podem automatizar esse processo. Compactar
              arquivos CSS, agrupando múltiplos arquivos em um só e utilizando
              técnicas de compactação no servidor, como Gzip, também melhora a
              performance. Além disso, carregar CSS adicional apenas quando
              necessário, utilizando media queries para carregar estilos
              específicos para dispositivos móveis, por exemplo, evita carregar
              CSS desnecessário em outras circunstâncias.
            </p>

            <h2 className="mb-6 mt-10 !text-3xl sm:!text-2xl xs:!text-xl font-bold">
              Considerações Finais
            </h2>
            <p className="">
              CSS é uma ferramenta essencial para qualquer desenvolvedor web,
              oferecendo poder e flexibilidade para criar páginas web atraentes
              e funcionais. Dominar tanto os fundamentos quanto as técnicas
              avançadas de CSS permitirá que você crie designs responsivos,
              acessíveis e visualmente impactantes. Continuar praticando e
              explorando as possibilidades do CSS é a chave para aprimorar suas
              habilidades e criar experiências web excepcionais.
            </p>
            <p className="mt-2">
              Neste link você confere o site do{" "}
              <strong>
                <a
                  className="text-primary dark:text-primaryDark"
                  href="https://www.w3schools.com/cssref/css4_pr_accent-color.php"
                  target="_blank"
                >
                  w3schools
                </a>
              </strong>
              , esse site oferece códigos pré prontos para você praticar, testar
              e modificar. Para aprofundar seu conhecimento, experimente
              diferentes valores e observe como eles afetam a disposição dos
              elementos. A prática é a melhor maneira de dominar as nuances do
              CSS e se tornar um dev front-end de qualidade.
            </p>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default DisplayArticle;
