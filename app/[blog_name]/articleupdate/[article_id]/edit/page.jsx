import Edits from "@/components/Edits";
import React from "react";

/** 게시글 수정페이지 */
export default function edit({ params }) {
  return (
    <>
      <div>
        <Edits blog_name={params.blog_name} article_id={params.article_id} />
      </div>
    </>
  );
}
