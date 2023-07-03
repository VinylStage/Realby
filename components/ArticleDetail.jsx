"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
      href={`/${blog_name}/${data.category}`}
      className="mb-2.7 text-sm font-semibold no-underline hover:underline text-gray-600"
    >
      {data.category}
    </Link>
  ) : (
    <p className="text-gray-900 mb-2.7 text-sm">카테고리 없음</p>
  );
  const content = data.content;
  const user = data.user;
  const created_at = data.created_at;
  const id = data.id;
  const articleViewCount = async () => {
    const response = await axios.post(
      `http://localhost:8000/blogs/detail/${article_id}/`
    );
  };
  return (
    <>
      <div className="shadow-xl rounded-lg p-6">
        {category}
        <div className="mt-8 mb-10 w-full">
          <Link
            href={`/${blog_name}/articles/${id}`}
            className="no-underline text-black"
          >
            <strong className="text-6xl mt-2.5">{title}</strong>
          </Link>
        </div>
        <p className="opacity-100 text-xs leading-normal border-solid border-b border-b-bbg mb-2 pb-2">
          {user} | {created_at}
        </p>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="mt-10 mb-10"
        ></div>
      </div>
    </>
  );
}
