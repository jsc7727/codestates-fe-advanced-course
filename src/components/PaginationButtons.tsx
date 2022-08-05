import { NextPage } from "next";
import Head from "next/head";
import React, { Dispatch, SetStateAction } from "react";
import paginationStyles from "../../styles/Pagination.module.css";
import Image from "next/image";

interface props {
  indexList: Array<number>;
  setIndex: Dispatch<SetStateAction<number>>;
}

const paginationButton: NextPage<props> = ({ indexList, setIndex }) => {
  const onClickHandler = (n: number) => {
    setIndex(n);
  };
  return (
    <div className={paginationStyles.pagination}>
      {indexList.map((v) => (
        <button
          className={paginationStyles.pagination}
          key={v}
          onClick={() => onClickHandler(v)}
        >
          {v}
        </button>
      ))}
    </div>
  );
};

export default paginationButton;
