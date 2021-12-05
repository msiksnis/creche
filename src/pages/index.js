import Head from "next/head";
import Landing from "../components/Landing/Landing";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Twin.Macro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Landing />
      </main>
    </div>
  );
}
