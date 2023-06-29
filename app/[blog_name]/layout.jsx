import "../../styles/globals.css";
import BlogPage from "@components/BlogPage";
import BlogLeftCategory from "@components/BlogLeftCategory";
import React from "react";
import Link from "next/link";

/**
 * 블로그 메인페이지 레이아웃
 * @params {blog_name} 블로그 이름
 */
export default function blogLayout({ children, params }) {
  return (
    <div>
      <BlogPage blog_name={params.blog_name} />
      <br />
      <Link
        href={`/${params.blog_name}/manage/newpost`}
        className="hover:underline"
      >
        ✏️글쓰기
      </Link>
      <main className="flex justify-center">
        <aside className="w-64 flex flex-row justify-between pl-2.5 m-0">
          <BlogLeftCategory blog_name={params.blog_name} />
        </aside>
        <div>{children}</div>
      </main>
    </div>
  );
}
