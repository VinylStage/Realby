"use client";

import axios from "axios";
import React from "react";

export default function ArticleLike({
  blog_name: blog_name,
  article_id: article_id,
}) {
  const handleLike = async () => {
    const token = localStorage.getItem("access");

    const response = await axios.post(
      `http://localhost:8000/blogs/${article_id}/empathys/`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  return (
    <form action={`/${blog_name}/articles/${article_id}`}>
      <button type="submit" onClick={handleLike}>
        공감
      </button>
    </form>
  );
}
