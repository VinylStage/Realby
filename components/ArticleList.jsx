"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

/** 게시글 리스트 */
export default function ArticleList({ blog_name: blog_name }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [blog_name]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://54.180.120.169/blogs/${blog_name}/detail/`
      );
      const data = response.data.results;

      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {data &&
        data.map((e) => {
          return (
            <ul key={e.id}>
              <li>id : {e.id}</li>
              <Link href={`/${blog_name}/articles/${e.id}`}>
                title : {e.title}
              </Link>
              <li>content : {e.content}</li>
              <li>created_at : {e.created_at}</li>
              <li>=================</li>
            </ul>
          );
        })}
      <div>ArticleList</div>
    </>
  );
}
