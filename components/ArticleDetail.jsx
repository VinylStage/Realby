"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
        `http://127.0.0.1:8000/blogs/${blog_name}/detail/${article_id}/`
      );
      const data = response.data;

      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const articleViewCount = async () => {
    const response = await axios.post(
      `http://127.0.0.1:8000/blogs/${blog_name}/detail/${article_id}/`
    );
  };
  return (
    <>
      <div>title : {data.title}</div>
      <div>topic : {data.topic}</div>
      <div>category : {data.category}</div>
      <div>content : {data.content}</div>
      {/* <Image
        src={`http://127.0.0.1:8000${data.image}`}
        width={500}
        height={500}
      /> */}
      <div>image : {data.image}</div>
      <div>user : {data.user}</div>
      <div>updated : {data.updated_at}</div>
      <div>조회수 : {data.hits}</div>
      <div>공감 : {data.empathys}</div>
      <div>생성일 : {data.created_at}</div>
    </>
  );
}
