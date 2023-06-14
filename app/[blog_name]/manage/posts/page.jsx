import React from "react";
import Posts from "../../../../components/Posts";

export default function posts({ params }) {
  return (
    <>
      <div>posts</div>
      <Posts blog_name={params.blog_name} />
    </>
  );
}
