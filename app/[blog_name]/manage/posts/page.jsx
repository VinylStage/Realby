import React from "react";
import ArticleList from "@components/ArticleList";

/** 블로그 내 게시글관리페이지 */
export default function posts({ params }) {
  return (
    <main className="main_by">
      <div>
        <ArticleList blog_name={params.blog_name} />
      </div>
    </main>
  )
}
