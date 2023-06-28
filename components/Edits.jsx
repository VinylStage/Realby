"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryList from "@components/CategorySelectList";

/** 게시글 수정*/
export default function Edits({
  blog_name: blog_name,
  article_id: article_id,
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [article_id]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/blogs/${blog_name}/detail/${article_id}/`
      );
      const data = response.data;

      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  async function hanldeEdits() {
    try {
      const token = localStorage.getItem("access");
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);

      if (image) {
        formData.append("image", image);
      }

      if (topic) {
        formData.append("topic", topic);
      }

      if (category) {
        formData.append("category", category);
      }
      const response = await axios.put(
        `http://localhost:8000/blogs/${blog_name}/detail/${article_id}/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <section>
        <form action={`/${blog_name}/articles/${article_id}`}>
          <div>
            <select
              name="category"
              onChange={(event) => setCategory(event.target.value)}
            >
              <option defaultValue={data.category}>{data.category}</option>
              <option>카테고리없음</option>
              <CategoryList blog_name={blog_name} />
            </select>
            <select
              name="topic"
              onChange={(event) => setTopic(event.target.value)}
            >
              <option defaultValue={data.topic}>{data.topic}</option>
              <option>토픽없음</option>
              <option value="CULTURE">문화</option>
              <option value="LIFE">일상</option>
              <option value="SPORTS">스포츠</option>
              <option value="TRAVEL">여행</option>
              <option value="IT">IT</option>
            </select>
            <input
              type="text"
              placeholder="title"
              name="title"
              defaultValue={data.title}
              onChange={(event) => setTitle(event.target.value)}
            />

            <textarea
              name="content"
              placeholder="content"
              defaultValue={data.content}
              onChange={(event) => setContent(event.target.value)}
            />
            <input
              type="file"
              accept="image/*"
              defaultValue={data.image}
              onChange={(event) => setImage(event.target.value)}
            />
          </div>
          <button onClick={hanldeEdits} type="submit">
            작성
          </button>
        </form>
      </section>
    </>
  );
}
