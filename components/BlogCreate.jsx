"use client";

import axios from "axios";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

/** 블로그개설 */
export default function BlogCreate() {
  const [blog_name, setBlogName] = useState("");
  const [blog_intro, setBlogIntro] = useState("");

  const handlePosts = async () => {
    const token = localStorage.getItem("access");

    try {
      const response = await axios.post(
        "http://localhost:8000/blogs/blogcreate/",
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
    <div className="mt-2.5 h-40 shadow-md pt-10 pl-5">
      <form action="/">
        <TextField
          id="standard-textarea"
          label="블로그 이름"
          placeholder="이름을 입력하세요"
          multiline
          variant="standard"
          value={blog_name}
          onChange={(event) => setBlogName(event.target.value)}
          className="mr-8"
        />
        <TextField
          id="standard-textarea"
          label="블로그 소개글"
          placeholder="소개글을 입력하세요"
          multiline
          variant="standard"
          value={blog_intro}
          onChange={(event) => setBlogIntro(event.target.value)}
        />
        <Button
          onClick={handlePosts}
          type="submit"
          className="ml-8 mt-3 text-black text-lg"
        >
          블로그 개설
        </Button>
      </form>
    </div>
  );
}
