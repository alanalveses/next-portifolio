import Certificates from "@/components/About/Certificates";
import SideBar from "@/components/Footer/SideBar";
import ColorsCircle from "@/components/Global/ColorsCircle";
import Layout from "@/components/global/Layout";
import Head from "next/head";

const certificates = () => {
  return (
    <>
      <>
        <Head>
          <title>Alan Alves | Certificados</title>
          <meta name="description" content="any description" />
        </Head>
        <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
          <Layout className="pt-24">
            <Certificates />
           
          </Layout>
          <ColorsCircle />
        </main>
      </>
    </>
  );
};

export default certificates;
