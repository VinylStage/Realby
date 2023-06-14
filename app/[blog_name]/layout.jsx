import "../page.module.css";

import Link from "next/link";
import React from "react";

export default function blogLayout({ children, params }) {
  return (
    <>
      <div>{children}</div>
      <div>lay</div>
      <Link href={`/${params.blog_name}`}>블로그로 돌아가자</Link>
    </>
  );
}
