"use client";

import axios from "axios";
import React from "react";

/** 블로그 구독 */
export default function BlogSubs({ blog_name: blog_name }) {
  const handleSubs = async () => {
    const token = localStorage.getItem("access");
    const response = await axios.post(
      `http://localhost:8000/blogs/subscribe/${blog_name}/`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };
  return (
    <section>
      <form action={`/${blog_name}`}>
        <button type="submit" onClick={handleSubs}>
          구독버튼
        </button>
      </form>
    </section>
  );
}
