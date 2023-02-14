import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Head from "next/head";
import styles from "./MainLayout.module.scss";

export default function MainLayout({ children, title, keywords }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="Keywords" content={keywords} />
      </Head>
      <Header />
      <main className={styles.Main}>{children}</main>
      <Footer />
    </>
  );
}
