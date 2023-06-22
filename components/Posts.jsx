"use client";

import axios from "axios";
import React, { useState } from "react";
import CategoryList from "@components/CategorySelectList";

/** 게시물 작성 */
export default function Posts({ blog_name: blog_name }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  async function hanldePosts() {
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

      const response = await axios.post(
        `http://54.180.120.169/blogs/${blog_name}/write/`,
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
        <form action={`/${blog_name}`}>
          <div>
            <select
              name="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option>카테고리없음</option>
              <CategoryList blog_name={blog_name} />
            </select>
            <select
              name="topic"
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
            >
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
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <textarea
              name="content"
              placeholder="content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
            <input
              type="file"
              accept="image/*"
              onChange={(event) => setImage(event.target.files[0])}
            />
          </div>
          <button onClick={hanldePosts} type="submit">
            작성
          </button>
        </form>
      </section>
    </>
  );
}
