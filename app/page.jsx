import MyBlogList from "@components/MyBlogList";
import Link from "next/link";
import React from "react";

/** 메인페이지 */
const Home = () => {
  return (
    <>
      <div>와ㅏㅏ</div>
      <Link href={"/user/myBlogs"}>블로그만들자</Link>
      <MyBlogList />
    </>
  );
};

export default Home;
