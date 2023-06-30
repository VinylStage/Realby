import React from "react";

export default function CategoryArticle({
  blog_name: blog_name,
  cateogry_name: cateogry_name,
}) {
  return (
    <>
      <div>{cateogry_name}</div>
    </>
  );
}
