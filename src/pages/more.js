import Layout from "@/components/Layout";
import Head from "next/head";

const more = () => {
  return (
    <>
      <Head>
        <title>Alan Alves | Mais</title>
        <meta name="description" content="any description" />
      </Head>

      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0"></Layout>
      </main>
    </>
  );
};

export default more;
