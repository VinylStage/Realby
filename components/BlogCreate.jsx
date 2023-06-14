"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function BlogCreate() {
  /** 블로그개설 컴포넌트 **/
  const [blog_name, setBlogName] = useState("");
  const [blog_intro, setBlogIntro] = useState("");
  const token = localStorage.getItem("access");

  //   const router = useRouter();
  async function handlePosts() {
    try {
      const response = await fetch("http://127.0.0.1:8000/blogs/blogcreate/", {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: JSON.stringify({
          blog_name: blog_name,
          blog_intro: blog_intro,
        }),
      });

      setData(response.data);
    } catch (error) {
      console.error(error);
    }

    // router.push("/");
    // router.refresh();
  }
  return (
    <section>
      <form>
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
