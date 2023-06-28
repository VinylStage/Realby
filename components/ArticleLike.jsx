"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

/** 게시글 공감버튼 */
export default function ArticleLike({
  blog_name: blog_name,
  article_id: article_id,
}) {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData();
  }, [article_id]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/blogs/detail/${article_id}/`
      );
      const data = response.data;
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

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
    <form>
      <button type="submit" onClick={handleLike}>
        {data.empathys}
      </button>
    </form>
  );
}
