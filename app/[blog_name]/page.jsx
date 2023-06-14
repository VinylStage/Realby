import React from "react";
import BlogPage from "../../components/BlogPage";
import Link from "next/link";

export default function Blog({ params }) {
  return (
    <>
      <BlogPage blog_name={params.blog_name} />
      <div>page</div>
      <Link href={`/${params.blog_name}/manage/posts`}>글쓰기</Link>
    </>
  );
}
