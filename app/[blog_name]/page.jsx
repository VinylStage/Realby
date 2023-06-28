import React from "react";
import ArticleList from "@components/ArticleList";

/**
 * 블로그 메인 페이지
 * @params {blog_name} 블로그 이름
 * */
export default function Blog({ params }) {
  return (
    <div className="blog-article-list-wrap">
      <ArticleList blog_name={params.blog_name} />
    </div>
  );
}
