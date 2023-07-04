import BlogChat from "@components/BlogChat";
import React from "react";

export default function blogchat({ params }) {
  return (
    <>
      <BlogChat blog_name={params.blog_name} />
    </>
  );
}
