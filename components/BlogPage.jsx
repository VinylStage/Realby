"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import CategoryList from "./BlogLeftCategory.jsx"; 

/** 블로그 정보보기 */
function BlogPage({ blog_name: blog_name }) {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsActive] = useState(false);
  
  useEffect(() => {
    fetchData();
  }, [blog_name]);

  const fetchData = async () => {
    try {
      // const token = localStorage.getItem("access");
      const response = await axios.get(
        `https://www.realbyback.shop/blogs/${blog_name}`
      );
      const data = response.data;

      setData(data);
    } catch (error) {
      console.error(error);
    }
  };
  const name = data.blog_name;
  
  return (
    <>
    <div>
      <Link href={`/${name}`} className="text-7xl">
        {name}
      </Link>
      <span style={{marginTop:"3.7%", marginLeft:"15%", border:"1px solid", background:"red", background: isModalOpen ? "red" : "gray"}}>Live</span>
    </div>
    </>
  );
}
export default BlogPage;
