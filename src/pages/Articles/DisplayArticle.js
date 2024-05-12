import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import Image from "next/image";

import article1 from "../../../public/images/article/displays.jpg";
import article2 from "../../../public/images/article/code.jpg";

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
            text="O que é display no CSS?"
            className=" !text-5xl"
          />
          <div className="mr-44 ml-44 mx-[3cm] my-[2cm] font-times text-base leading-relaxed text-justify">
            <p className="text-right">Autor: Alan Alves</p>
            <p className="mb-12 text-right">Data: 02 de Novembro de 2023</p>

            <p className="mb-12">
              O CSS (Cascading Style Sheets) é a uma linguagem usada para
              estilizar a apresentação de documentos HTML. O atributo display é
              uma ferramenta muito poderosa para controlar o layout da
              aplicação. Ele determina como um elemento é exibido e como
              interage com outros elementos em termos de posicionamento e fluxo.
              Existem vários valores para a propriedade display, cada um com seu
              próprio impacto no layout. Os displays block e inline são os mais
              presentes nos elementos, podendo ser alterandos quando necessario,
              outros artibutos bastante usados são: Inline-block, Flex, Grid e
              None.
            </p>

            <Image src={article1} alt="Code" className="mb-6 w-full h-1/2" />

            <h2 className="mb-6 mt-10 text-4xl font-bold">
              Por Que o display é Importante?
            </h2>
            <p className="">
              O display é essencial porque define a estrutura básica do layout.
              Dependendo do valor atribuído a esse atributo, um elemento pode se
              comportar como um bloco, ocupando toda a largura disponível, ou
              como um elemento em linha, que compartilha o mesmo espaço
              horizontal com outros elementos. Com o uso adequado do display, é
              possível criar layouts complexos e flexíveis.{" "}
            </p>

            <h2 className="mb-6 mt-10 text-4xl font-bold">Display Block</h2>

            <p className="mb-6">
              O display block é um display bem presente no comportamento dos
              elementos, ele ocupa toda a largura disponível da tela, cria uma
              nova linha para cada elemento formando assim blocos entre os
              elementos um abaixo do outro. Eles normalmente começam uma linha
              nova antes e depois de si mesmos. Alguns exemplos de elementos
              nativos de display block são &lt;div&gt;, &lt;h1&gt; - &lt;h6&gt;,
              &lt;p&gt;, &lt;form&gt;, &lt;header&gt;, &lt;footer&gt; e
              &lt;section&gt;.
            </p>

            <h2 className="mb-6 mt-10 text-4xl font-bold">Display Inline</h2>
            <p className="">
              Os elementos com display inline são exibidos na mesma linha que
              outros elementos, seguindo um fluxo como texto. Eles não permitem
              definir largura ou altura específicas, a margem entre elementos é
              geralmente menor. Exemplos de elementos com display inline são
              &lt;span&gt;, &lt;a&gt; e &lt;strong&gt;.
            </p>

            <h2 className="mb-6 mt-10 text-4xl font-bold">
              Display Inline-block
            </h2>
            <p className="">
              Esse valor combina propriedades de inline e block. Ele permite que
              um elemento seja exibido na mesma linha que outros, mas com a
              capacidade de definir largura e altura. É útil quando você deseja
              controlar o tamanho de um elemento, mas ainda mantê-lo na mesma
              linha que outros elementos.
            </p>

            <h2 className="mb-6 mt-10 text-4xl font-bold">Display Flex</h2>
            <p className="">
            O Flexbox é um modelo de layout moderno que oferece grande
                flexibilidade para organizar elementos em uma linha ou coluna.
                Com o Flexbox, é possível alinhar, justificar e distribuir
                elementos de maneiras mais sofisticadas. Ele é ideal para criar
                layouts responsivos que se adaptam a diferentes tamanhos de
                tela. O inline-flex se comporta como inline-block, mas com as
                funcionalidades do Flexbox.
            </p>

            <h2 className="mb-6 mt-10 text-4xl font-bold">Display Grid</h2>
            <div className="flex mx-auto mb-6 mt-6">
              <p className="mr-10">O Grid CSS é outro modelo moderno que permite criar layouts
              bidimensionais usando linhas e colunas. É perfeito para projetos
              complexos onde a estrutura precisa ser mais rigorosa, como
              dashboards ou galerias de imagens. O inline-grid é semelhante ao
              inline-flex, mas com a flexibilidade do Grid.
                
              </p>
              <Image src={article2} alt="Fogos" className="w-7/12 h-auto" />
            </div>

            <h2 className="mb-6 mt-10 text-4xl font-bold">Display None</h2>
            <p className="">
              Diferente da propriedade &#34;hidden&#34; que o componente fica
              oculto na tela, mas memso assim ele é renderizado a propriedade
              &#34;none&#34; não é renderizado, ou seja ele não é renderizado na
              tela é como se não existisse na aplicação, o elemento é
              completamente oculto e removido do fluxo do documento. Isso é
              diferente de apenas &#34;esconder&#34; visualmente, porque o
              elemento não ocupa espaço. Útil para esconder elementos com base
              em condições ou para animações.
            </p>

            <h2 className="mb-6 mt-10 text-4xl font-bold">
              Considerações Finais
            </h2>
            <p className="">
              O atributo display é uma ferramenta poderosa e versátil no arsenal
              do CSS. Compreender os diferentes valores e como eles afetam o
              layout é crucial para criar páginas web eficientes e visualmente
              atraentes flexíveis e responsivos.. Seja para organizar um layout
              básico ou criar estruturas complexas, o display é o ponto de
              partida para dar forma ao design.
            </p>
            <p className="mt-2">
              Para aprofundar seu conhecimento, experimente diferentes valores
              do display em seus projetos e observe como eles afetam a
              disposição dos elementos. A prática é a melhor maneira de dominar
              as nuances do CSS e alcançar layouts perfeitos.
            </p>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default DisplayArticle;
