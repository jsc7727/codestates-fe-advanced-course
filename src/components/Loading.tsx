import { NextPage } from "next";
import React from "react";
import lodingStyles from "../../styles/Loading.module.css";

const Loading: NextPage = () => {
  return (
    <div className={lodingStyles.container}>
      <div>{`Loding... `}</div>
      <div className={lodingStyles.loading}></div>
    </div>
  );
};

export default Loading;
