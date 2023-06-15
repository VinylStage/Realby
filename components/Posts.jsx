"use client";

import axios from "axios";
import React, { useState } from "react";
import CategoryList from "./CategorySelectList";

export default function Posts({ blog_name: blog_name }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  async function hanldePosts() {
    try {
      const token = localStorage.getItem("access");
      const response = await fetch(
        `http://localhost:8000/blogs/${blog_name}/write/`,
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          method: "POST",
          body: JSON.stringify({
            title: title,
            content: content,
            topic: topic,
            category: category,
            image: image,
          }),
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
              value={image}
              onChange={(event) => setImage(event.target.value)}
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
