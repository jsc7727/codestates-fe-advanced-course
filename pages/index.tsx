import type { NextPage } from "next";
import Image from "next/image";
import HeaderBar from "../src/components/HeaderBar";
import styles from "../styles/Home.module.css";
import Header from "../src/templates/Header";
import Footer from "../src/templates/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HeaderBar />
      <div className={styles.container}>
        <main className={styles.main}>
          <div>/</div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
