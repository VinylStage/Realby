import React from "react";
import CategoryCreate from "@/components/CategoryCreate";
import CategoryList from "@components/CategoryList";

export default function categoryManage({ params }) {
  return (
    <>
      hellow
      <CategoryCreate blog_name={params.blog_name} />
      <br />
      <CategoryList blog_name={params.blog_name} />
    </>
  );
}
