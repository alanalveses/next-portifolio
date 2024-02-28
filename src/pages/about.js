import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/shashank-verma.jpg";

const about = () => {
  return (
    <>
      <Head>
        <title>Alan Alves | Sobre</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="A paixão alimenta o propósito!"
            className="mb-16"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biografia
              </h2>
              <p className="font-medium">
                Olá, sou Alan Alves, desenvolvedor web e designer UX apaixonado
                por criar designs bonitos, funcionais e e experiências digitais
                centradas no usuário. Com 1 anos de experiência na área. Estou
                sempre procurando maneiras novas e inovadoras de dar vida às
                visões dos meus clientes.
              </p>
              <p className="my-4 font-medium">
                Acredito que design é mais do que apenas fazer as coisas
                parecerem bonitas - é resolver problemas e criando experiências
                intuitivas e agradáveis para os usuários.
              </p>
              <p className="font-medium">
                Esteja eu trabalhando em um site, aplicativo móvel ou outro
                produto digital, trago meu compromisso com a excelência em
                design e o pensamento centrado no usuário para cada projeto em
                que trabalho. Estou ansioso pela oportunidade de trazer minhas
                habilidades e paixão para seu próximo projeto.
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid 
            border-dark bg-light p-8
            "
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <div className="absolute top-2 -right-5 -z-20 w-[102%] h-[103%] rounded-[2rem] bg-gray-700" />
              <div className="absolute top-4 -right-7 -z-30 w-[102%] h-[103%] rounded-[2rem] bg-gray-300" />
              <Image
                src={profilePic}
                alt="Alan Alves"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-start justify-between">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Hobbs
              </h2>
              <p className="font-medium">
              Além da tecnologia, tenho uma paixão genuína por música, jogos e animes. Uma das minhas grandes inspirações foi o desenho &quot;Cyberchase&quot; que ainda considero extremamente inspirador o contato das crianças com a tecnologia. 
              </p>
              <p className="my-4 font-medium">
              Desde pequeno, sempre apreciei desafios, e é por isso que sempre gostei de jogos. Sempre os achei fascinantes, especialmente os jogos digitais, que desempenharam um papel crucial em expandir meus horizontes para este majestoso campo da programação.
              </p>
              <p className="font-medium">
              Adoro música, especialmente músicas instrumentais, que são as minhas preferidas.
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
