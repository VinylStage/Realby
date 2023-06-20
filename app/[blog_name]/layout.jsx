import "../page.module.css";

import Link from "next/link";
import React from "react";

/** 블로그 메인페이지 레이아웃 */
export default function blogLayout({ children, params }) {
  return (
    <>
      <div>{children}</div>
      <div>lay</div>
      <Link href={`/${params.blog_name}`}>블로그로 돌아가자</Link>
    </>
  );
}
