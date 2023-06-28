import React from "react";
import Posts from "@/components/Posts";

/**
 * 게시글 작성페이지
 * @params {blog_name} 블로그 이름
 */
export default function posts({ params }) {
  return (
    <>
      <Posts blog_name={params.blog_name} />
    </>
  );
}
