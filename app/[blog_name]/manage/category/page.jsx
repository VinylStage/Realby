import React from "react";
import CategoryCreate from "@/components/CategoryCreate";

export default function categoryManage({ params }) {
  return (
    <>
      hellow
      <CategoryCreate blog_name={params.blog_name} />
    </>
  );
}
