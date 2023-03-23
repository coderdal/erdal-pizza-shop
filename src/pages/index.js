import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Carousel from "@/components/Home/Carousel";

export default function Home() {
  return (
    <>
      <Head>
        <title>Erdal Pizza | Homepage</title>
        <meta name="description" content="Developed by CodErdal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.home}>
        <Carousel />
      </div>
    </>
  );
}
