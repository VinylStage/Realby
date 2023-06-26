"use client";

import axios from "axios";
import React, { useState } from "react";

/** 블로그개설 */
export default function BlogCreate() {
  const [blog_name, setBlogName] = useState("");
  const [blog_intro, setBlogIntro] = useState("");

  const handlePosts = async () => {
    const token = localStorage.getItem("access");

    try {
      const response = await axios.post(
        "http://54.180.120.169/blogs/blogcreate/",
        {
          blog_name: blog_name,
          blog_intro: blog_intro,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section>
      <form action="/">
        <input
          type="text"
          placeholder="블로그 이름"
          value={blog_name}
          onChange={(event) => setBlogName(event.target.value)}
        />
        <textarea
          type="text"
          placeholder="블로그 소개"
          value={blog_intro}
          onChange={(event) => setBlogIntro(event.target.value)}
        />
        <button onClick={handlePosts} type="submit">
          블로그 개설
        </button>
      </form>
    </section>
  );
}
