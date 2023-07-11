"use client";

import axios from "axios";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

/** 블로그개설 */
export default function BlogCreate() {
  const [blog_name, setBlogName] = useState("");
  const [blog_title, setBlogTitle] = useState("");
  const [blog_intro, setBlogIntro] = useState("");
  const router = useRouter();
  const handlePosts = async () => {
    const token = localStorage.getItem("access");

    if (blog_name === "" || blog_title === "") {
      alert("블로그 주소와 이름은 필수 입력 사항입니다.");
      return;
    }

    // blog_name이 영어만 가능하도록 제한
    if (!/^[A-Za-z]+$/.test(blog_title)) {
      alert("블로그 주소는 영어로만 입력해야 합니다.");
      return;
    }

    try {
      const response = await axios.post(
        "https://www.realbyback.shop/blogs/blogcreate/",
        {
          blog_name: blog_name,
          blog_title: blog_title,
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
      alert("블로그 생성이 완료되었습니다.");
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="mt-2.5 h-40 shadow-md pt-10 pl-5">
      <form>
        <TextField
          id="standard-textarea"
          label="블로그 주소"
          placeholder="사용할 주소를 입력하세요(영문만 가능)"
          multiline
          variant="standard"
          value={blog_title}
          onChange={(event) => setBlogTitle(event.target.value)}
          className="mr-8"
        />
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
