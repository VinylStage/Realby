"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as React from "react";

/** 게시글 리스트 */
export default function ArticleList({ blog_name: blog_name }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [blog_name]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/blogs/${blog_name}/detail/`
      );
      const data = response.data;

      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {data &&
        data.map((e) => {
          const id = e.id;
          const title = e.title;
          const content = e.content ? (
            <p className="text-gray-400 break-all">
              {e.content.substr(0, 100)}...
            </p>
          ) : null;
          const created = e.created_at.substr(0, 10);
          const category = e.category ? (
            <Link
              href={`/${blog_name}/${e.category}`}
              className="no-underline text-black hover:underline"
            >
              {e.category}
            </Link>
          ) : (
            "카테고리 없음"
          );
          return (
            <article
              key={id}
              className="flex flex-row justify-between mb-2.5 mt-1.5 p-2.5 text-xl font-medium leading-relaxed shadow-lg rounded-lg"
            >
              <div>
                <Link
                  href={`/${blog_name}/articles/${id}`}
                  className="no-underline hover:underline"
                >
                  <strong className="mb-5">{title}</strong>
                  {content}
                </Link>
                <div className="mt-1">
                  <span className="text-sm">
                    {category} | {created}
                  </span>
                </div>
              </div>
            </article>
          );
        })}
    </>
  );
}
