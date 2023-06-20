import React from "react";
import Posts from "@/components/Posts";

/** 게시글 작성페이지 */
export default function posts({ params }) {
  return (
    <>
      <div>posts</div>
      <Posts blog_name={params.blog_name} />
    </>
  );
}
