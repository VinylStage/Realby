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
    <p className="article-detail-category">{data.category}</p>
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
    <div className="article-detail-wrap">
      <div className="article-head-wrap">
        {category}
        <Link href={`/${blog_name}/articles/${id}`}>
          <strong className="article-detail-title">{title}</strong>
        </Link>
      </div>
      <div className="article-info">
        {user} | {created_at}
      </div>
      <div
        className="airtlcie-detail-body"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
      <div className="article-hits-empathys">
        {hits} |
        <ArticleLike blog_name={blog_name} article_id={article_id} />
      </div>
    </div>
  );
}
