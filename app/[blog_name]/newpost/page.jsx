import React from "react";
import Posts from "@/components/Posts";

/**
 * 게시글 작성페이지
 * @params {blog_name} 블로그 이름
 */
export default function posts({ params }) {
  return (
    <div className="mt-10 w-[1100px]">
      <Posts blog_name={params.blog_name} />
      <span className="text-[#acacac] text-xl"># 동영상 임베드 사용불가</span>
    </div>
  );
}
