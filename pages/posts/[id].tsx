import type { NextPage } from "next";
import Header from "../../src/templates/Header";
import HeaderBar from "../../src/components/HeaderBar";
import Footer from "../../src/templates/Footer";
import Post from "../../src/components/Post";

const Posts_id: NextPage = () => {
  return (
    <>
      <Header></Header>
      <HeaderBar></HeaderBar>
      <Post></Post>
      <Footer></Footer>
    </>
  );
};

export default Posts_id;
