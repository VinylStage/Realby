"use client";

import axios from "axios";
import React from "react";

export default function ArticleDelete({
  blog_name: blog_name,
  article_id: article_id,
}) {
  async function handleArticleDelete() {
    const token = localStorage.getItem("access");
    const response = await axios.delete(
      `http://localhost:8000/blogs/${blog_name}/detail/${article_id}/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
  return (
    <section>
      <form action={`/${blog_name}/`}>
        <button type="submit" onClick={handleArticleDelete}>
          게시글 삭제
        </button>
      </form>
    </section>
  );
}
