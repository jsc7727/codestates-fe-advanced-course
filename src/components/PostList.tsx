import { NextPage } from "next";
import React from "react";
import styles from "../../styles/Home.module.css";
import postListStyles from "../../styles/PostList.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { postInterface } from "../types";
import Loading from "./Loading";
import PaginationButtons from "./PaginationButtons";

const PostList: NextPage = () => {
  const router = useRouter();
  const [data, setData] = useState<Array<postInterface> | null>(null);
  const [index, setIndex] = useState<number>(0);
  useEffect(() => {
    fetch(`/api/posts`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const onClickHandler = (id: number) => {
    router.push(`/posts/${id}`);
  };

  if (data === null) {
    return <Loading></Loading>;
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={postListStyles.post_list}>
          {data.slice(index * 10, index * 10 + 10).map((v) => {
            return (
              <div onClick={() => onClickHandler(v.id)} key={v.id}>
                <div>{v.title}</div>
                <div>{`작성자 ${v.userId}`}</div>
              </div>
            );
          })}
        </div>
        <PaginationButtons
          indexList={new Array(Math.ceil(data.length / 10))
            .fill(null)
            .map((_, idx) => idx)}
          index={index}
          setIndex={setIndex}
        ></PaginationButtons>
      </main>
    </div>
  );
};

export default PostList;
