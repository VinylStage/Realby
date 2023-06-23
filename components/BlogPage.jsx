"use client";

import { useEffect, useState } from "react";
import axios from "axios";

/** 블로그 정보보기 */
function BlogPage({ blog_name: blog_name }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [blog_name]);

  const fetchData = async () => {
    try {
      // const token = localStorage.getItem("access");
      const response = await axios.get(
        `http://localhost:8000/blogs/${blog_name}`
      );
      const data = response.data;

      setData(data);
    } catch (error) {
      console.error(error);
    }
  };
  const name = data.blog_name;
  const intro = data.blog_intro;

  return (
    <>
      <div>Blog : {name}</div>
      <div>Intro : {intro}</div>
    </>
  );
}
export default BlogPage;
