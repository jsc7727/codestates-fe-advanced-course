import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
const Header: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <a href="/" target="_blank" rel="noopener noreferrer">
        Powered by{" "}
        <span className={styles.logo}>
          <Image
            src="/codestates.png"
            alt="codestates Logo"
            width={72}
            height={16}
          />
        </span>
      </a>
    </footer>
  );
};

export default Header;
