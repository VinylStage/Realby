import React from "react";
import CategoryCreate from "@/components/CategoryCreate";
import CategoryList from "@components/CategoryList";

/**
 * 카테고리 생성/삭제
 * @params {blog_name} 블로그 이름
 */
export default function categoryManage({ params }) {
  return (
    <main className="main_by">
      <div class="mb-2.5 mt-1.5 p-2.5 text-xl font-medium leading-relaxed shadow-lg rounded-lg">
        <h4>카테고리 분류</h4>
        <CategoryList blog_name={params.blog_name} />
        <CategoryCreate blog_name={params.blog_name} />
      </div>
    </main>
    
  );
}
