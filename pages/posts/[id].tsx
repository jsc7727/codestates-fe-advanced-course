import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import postStyles from "../../styles/Post.module.css";
import { useRouter } from "next/router";
import Header from "../../src/templates/Header";
import HeaderBar from "../../src/components/HeaderBar";
import Footer from "../../src/templates/Footer";
import { postInterface, commentInterface } from "../../src/types";
import { useEffect, useState } from "react";
import Loading from "../../src/components/Loading";

const Posts_id: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<postInterface | null>(null);
  const [comments, setComments] = useState<Array<commentInterface> | null>(
    null
  );
  useEffect(() => {
    if (id !== null) {
      fetch(`/api/post?postId=${id}`)
        .then((res) => res.json())
        .then((data) => {
          setPost(data);
        });
      fetch(`/api/comments?postId=${id}`)
        .then((res) => res.json())
        .then((data) => {
          setComments(data);
        });
    }
  }, [id]);

  if (post === null || comments === null) {
    return (
      <>
        <Header></Header>
        <HeaderBar></HeaderBar>
        <Loading></Loading>;
      </>
    );
  }

  return (
    <>
      <Header></Header>
      <HeaderBar></HeaderBar>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={postStyles.post}>
            <h1 className={postStyles.post_title}>{post.title}</h1>
            <h3 className={postStyles.post_id}>{`작성자 ${post.id}`}</h3>
            <div>{post.body}</div>
            <div
              className={postStyles.post_body}
            >{`댓글 ${comments.length}개`}</div>

            <div className={postStyles.comment}>
              {comments.map((comment) => {
                return (
                  <div key={comment.name}>
                    <h3>{comment.name}</h3>
                    <p>{comment.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Posts_id;
