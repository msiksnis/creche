import Head from "next/head";
import "tailwindcss/tailwind.css";
import Page from "../components/Page";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </div>
  );
}

export default MyApp;
