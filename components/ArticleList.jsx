"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ArticleList({ blog_name: blog_name }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [blog_name]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/blogs/${blog_name}/detail/`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>ArticleList</div>
    </>
  );
}
