import Edits from "@/components/Edits";
import React from "react";

/** 게시글 수정페이지 */
export default function edit({ params }) {
  return (
    <>
      <Edits blog_name={params.blog_name} article_id={params.article_id} />
      <span className="text-[#acacac] text-xl"># 동영상 임베드 사용불가</span>
      <br />
      <span className="text-[#acacac] text-xl">
        # 제목을 한번 클릭해 주세요
      </span>
    </>
  );
}
