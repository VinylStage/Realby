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
    <div className="blog-articleList">
      {data &&
        data.map((e) => {
          const id = e.id;
          const title = e.title;
          const content = e.content ? (
            <p className="summary">{e.content.substr(0, 100)}...</p>
          ) : null;
          const created = e.created_at.substr(0, 10);
          const category = e.category;

          return (
            <article key={id} className="article-wrap">
              <div className="article-content">
                <Link
                  href={`/${blog_name}/articles/${id}`}
                  className="artielc-link"
                >
                  <strong className="article-title">{title}</strong>
                  {content}
                </Link>
                <div className="box-datecate">
                  <Link href={`/${blog_name}/${category}`}>{category}</Link>
                  <span> | {created}</span>
                </div>
              </div>
            </article>
          );
        })}
    </div>
  );
}
