"use client";

import axios from "axios";
import jwt from "jsonwebtoken";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MyBlogList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const token = localStorage.getItem("access");
      const userId = jwt.decode(token).user_id;
      const response = await axios.get(
        `http://127.0.0.1:8000/blogs/${userId}/list/`
      );

      const data = response.data;

      setData(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div>MyBlogList</div>
      <>
        {data &&
          data.map((e) => {
            const blog_name = e.blog_name;
            return (
              <Link href={`/${blog_name}`} key={e.id}>
                {blog_name}
              </Link>
            );
          })}
      </>
    </>
  );
}
