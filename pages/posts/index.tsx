import type { NextPage } from "next";
import Header from "../../src/templates/Header";
import HeaderBar from "../../src/components/HeaderBar";
import Footer from "../../src/templates/Footer";
import PostList from "../../src/components/PostList";

const Posts: NextPage = () => {
  return (
    <>
      <Header />
      <HeaderBar />
      <PostList />
      <Footer />
    </>
  );
};

export default Posts;
