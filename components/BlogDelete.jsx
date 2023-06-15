"use client";

import axios from "axios";
import React from "react";

export default function BlogDelete({ blog_name: blog_name }) {
  const handleBlogDelete = async () => {
    const token = localStorage.getItem("access");
    const response = await axios.delete(
      `http://localhost:8000/blogs/${blog_name}/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };
  return (
    <>
      <section>
        <form action="/">
          <button type="submit" onClick={handleBlogDelete}>
            블로그를 삭제하자
          </button>
        </form>
      </section>
    </>
  );
}
