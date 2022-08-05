import { NextPage } from "next";
import Head from "next/head";
import React, { Dispatch, SetStateAction } from "react";
import paginationStyles from "../../styles/Pagination.module.css";

interface props {
  indexList: Array<number>;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}

const paginationButton: NextPage<props> = ({ indexList, index, setIndex }) => {
  const onClickHandler = (n: number) => {
    setIndex(n);
  };
  return (
    <div className={paginationStyles.pagination}>
      {indexList.map((v, idx) => {
        let style = `${paginationStyles.paginationButton}`;
        if (idx === index) {
          style += ` ${paginationStyles.selected}`;
        }
        return (
          <button className={style} key={v} onClick={() => onClickHandler(v)}>
            {v}
          </button>
        );
      })}
    </div>
  );
};

export default paginationButton;
