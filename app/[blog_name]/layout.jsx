import "../../styles/globals.css";
import BlogPage from "@components/BlogPage";
import BlogLeftCategory from "@components/BlogLeftCategory";
import HoverWriteCom from "@components/HoverWriteCom";

import React from "react";

/**
 * 블로그 메인페이지 레이아웃
 * @params {blog_name} 블로그 이름
 */
export default function blogLayout({ children, params }) {
  return (
    <div id="blog-container">
      <BlogPage blog_name={params.blog_name} />
      <main className="blog-wrap">
        <aside className="blog-left-category">
          <BlogLeftCategory blog_name={params.blog_name} />
        </aside>
        <div>{children}</div>
        <HoverWriteCom blog_name={params.blog_name} />
      </main>
    </div>
  );
}
