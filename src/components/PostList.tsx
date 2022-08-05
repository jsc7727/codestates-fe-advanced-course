import { NextPage } from "next";
import React from "react";
import styles from "../../styles/Home.module.css";
import postListStyles from "../../styles/PostList.module.css";
import lodingStyles from "../../styles/Loading.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { postInterface } from "../types";
import Loading from "./Loading";

const PostList: NextPage = () => {
  const router = useRouter();
  const [data, setData] = useState<Array<postInterface> | null>(null);
  useEffect(() => {
    fetch(`/api/posts`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  if (data === null) {
    return <Loading></Loading>;
  }
  const onClickHandler = (id: number) => {
    router.push(`/posts/${id}`);
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={postListStyles.post_list}>
          {data.map((v) => {
            console.log(v);
            return (
              <div onClick={() => onClickHandler(v.id)} key={v.id}>
                <div>{v.title}</div>
                <div>{`작성자 ${v.userId}`}</div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default PostList;
