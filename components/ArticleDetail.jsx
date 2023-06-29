"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ArticleLike from "@components/ArticleLike";

/** 상세 게시글 보기/삭제 */
export default function ArticleDetail({
  blog_name: blog_name,
  article_id: article_id,
}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(), articleViewCount();
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
  const title = data.title;
  const category = data.category ? (
    <Link
      href={`/${blog_name}/${category}`}
      className="mb-2.7 text-sm font-semibold no-underline hover:underline"
    >
      {data.category}
    </Link>
  ) : (
    "카테고리 없음"
  );
  const content = data.content;
  const user = data.user;
  const created_at = data.created_at;
  const hits = data.hits;
  const id = data.id;
  const articleViewCount = async () => {
    const response = await axios.post(
      `http://localhost:8000/blogs/detail/${article_id}/`
    );
  };
  return (
    <div>
      <div>
        {category}
        <Link
          href={`/${blog_name}/articles/${id}`}
          className="no-underline text-black"
        >
          <strong className="text-3xl mt-2.5">{title}</strong>
        </Link>
      </div>
      <div className="opacity-100 text-xs leading-normal">
        {user} | {created_at}
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
      <div className="mt-2 pb-2 mb-1 border-solid border-b border-b-bbg">
        {hits} |
        <ArticleLike blog_name={blog_name} article_id={article_id} />
      </div>
    </div>
  );
}
