import "../styles/globals.css";
import "../styles/index.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Nav from "../components/Nav";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>E-recruit</title>
      </Head>
      <Nav />
      <div className="main-content">
        <Component {...pageProps} />
      </div>
    </>
  );
}
// function CMapp extends app {

// }
export default MyApp;
