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
    <>
      <header className="flex justify-center p-2.5">
        <BlogPage blog_name={params.blog_name} />
      </header>
      {/* <nav className="bg-blue-400 h-16">
        <Link
          href={`/${params.blog_name}/manage/newpost`}
          className="hover:underline"
        >
          ✏️글쓰기
        </Link>
      </nav> */}

      <main className="flex justify-center mt-10">
        <aside className="w-68 flex flex-row justify-between p-2.5 m-0 shadow-xl rounded-md h-[300px]">
          <BlogLeftCategory blog_name={params.blog_name} />
        </aside>
        <div className="ml-0 p-6">{children}</div>
      </main>
    </>
  );
}
