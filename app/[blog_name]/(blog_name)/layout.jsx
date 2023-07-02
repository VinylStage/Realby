import "../../../styles/globals.css";
import BlogPage from "@components/BlogPage";
import BlogLeftCategory from "@components/BlogLeftCategory";
import React from "react";

/**
 * 블로그 메인페이지 레이아웃
 * @params {blog_name} 블로그 이름
 */
export default function blogLayout({ children, params }) {
  return (
    <>
      <header className="flex justify-center p-2.5">
        <BlogPage blog_name={params.blog_name} />
      </header>
      <main className="flex justify-center mt-10">
        <aside className="w-68 flex flex-row justify-between p-2.5 m-0 shadow-xl rounded-md h-full">
          <BlogLeftCategory blog_name={params.blog_name} />
        </aside>
        <div className="ml-0 p-6">{children}</div>
      </main>
    </>
  );
}
