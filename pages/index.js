import Head from "next/head";
import WebTicker from "../components/Ticker/WebTicker";
import Welcome from "../components/Welcome/Welcome";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Colchester Canine Creche</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <WebTicker />
        <Welcome />
      </div>
    </div>
  );
}
