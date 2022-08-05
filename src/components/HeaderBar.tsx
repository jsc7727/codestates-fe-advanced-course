import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import styles from "../../styles/Header.module.css";
import Image from "next/image";

const HeaderBar: NextPage = () => {
  return (
    <div className={styles.header_bar}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.logo}>
          <Image
            src="/codestates.png"
            alt="codestates Logo"
            width={154}
            height={32}
          />
        </span>
      </a>
    </div>
  );
};

export default HeaderBar;
