import React from "react";
import CategoryCreate from "@/components/CategoryCreate";
import CategoryList from "@components/CategoryList";

/**
 * 카테고리 생성/삭제
 * @params {blog_name} 블로그 이름
 */
export default function categoryManage({ params }) {
  return (
    <>
      <h4>Category</h4>
      <CategoryCreate blog_name={params.blog_name} />
      <br />
      <CategoryList blog_name={params.blog_name} />
    </>
  );
}
