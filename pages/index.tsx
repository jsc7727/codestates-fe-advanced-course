import type { NextPage } from "next";
import HeaderBar from "../src/components/HeaderBar";
import styles from "../styles/Home.module.css";
import Header from "../src/templates/Header";
import Footer from "../src/templates/Footer";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/posts");
  }, []);
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
