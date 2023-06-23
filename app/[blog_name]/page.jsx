import React from "react";
import BlogPage from "../../components/BlogPage";
import Link from "next/link";
import ArticleList from "@components/ArticleList";
import BlogDelete from "@components/BlogDelete";
import BlogSubs from "@components/BlogSubs";

/**
 * 블로그 메인 페이지
 * @params {blog_name} 블로그 이름
 * */
export default function Blog({ params }) {
  return (
    <>
      <BlogPage blog_name={params.blog_name} />
      <div>page</div>
      <Link href={`/${params.blog_name}/manage/posts`}>글쓰기</Link>
      <br />
      <Link href={`/${params.blog_name}/manage/category`}>
        카테고리 생성하기
      </Link>
      <div>모든 게시물 불러와</div>
      <ArticleList blog_name={params.blog_name} />
      <div>
        <BlogDelete blog_name={params.blog_name} />
      </div>
      <div>
        wowwowowo
        <BlogSubs blog_name={params.blog_name} />
      </div>
    </>
  );
}
