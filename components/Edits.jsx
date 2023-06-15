"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryList from "./CategorySelectList";

export default function Posts({
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
        `http://127.0.0.1:8000/blogs/${blog_name}/detail/${article_id}/`
      );
      const data = response.data;

      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadTitle = data.title;
  const loadContent = data.content;
  const loadTopic = data.topic;
  const loadCategory = data.category;
  const loadImage = data.image;

  async function hanldePosts() {
    try {
      const token = localStorage.getItem("access");
      const response = await axios.put(
        `http://localhost:8000/blogs/${blog_name}/detail/${article_id}/`,
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
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
        <form action={`/${blog_name}/articles/${article_id}`}>
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
