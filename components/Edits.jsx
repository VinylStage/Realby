"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import CategorySelectList from "@components/CategorySelectList";

const UpdateEditorApp = dynamic(() => import("@components/UpdateEditorApp"), {
  ssr: false,
});

/** 게시글 수정*/
export default function Edits({
  blog_name: blog_name,
  article_id: article_id,
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [article_id]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://www.realbyback.shop/blogs/detail/${article_id}/`
      );
      const data = response.data;

      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  async function hanldePosts() {
    try {
      const token = localStorage.getItem("access");
      await axios.put(
        `https://www.realbyback.shop/blogs/detail/${article_id}/`,
        { title: title, content: content, topic: topic, category: category },
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
  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <>
      <section>
        <form action={`/${blog_name}/articles/${article_id}`}>
          <div>
            <Select name="category" dt>
              efaultValue={data.category}
              onChange={(event) => setCategory(event.target.value)}
              labelId="demo-simple-select-label" id="demo-simple-select"
              label="Category" className="mr-5"
              <MenuItem>{data.category}</MenuItem>
              <MenuItem>카테고리 없음</MenuItem>
              <CategorySelectList blog_name={blog_name} />
            </Select>
            <Select
              name="topic"
              defaultValue={data.topic}
              onChange={(event) => setTopic(event.target.value)}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Topic"
            >
              <MenuItem>{data.topic}</MenuItem>
              <MenuItem>토픽없음</MenuItem>
              <MenuItem value="CULTURE">문화</MenuItem>
              <MenuItem value="LIFE">일상</MenuItem>
              <MenuItem value="SPORTS">스포츠</MenuItem>
              <MenuItem value="TRAVEL">여행</MenuItem>
              <MenuItem value="IT">IT</MenuItem>
            </Select>
          </div>
          <TextField
            className="w-full"
            id="outlined-basic"
            label="title"
            variant="outlined"
            name="title"
            defaultValue={data.title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <UpdateEditorApp
            content={content}
            onChange={handleContentChange}
            article_id={article_id}
          />
          <Button onClick={hanldePosts} type="submit" endIcon={<SendIcon />}>
            수정
          </Button>
          <Link
            href={`/${blog_name}/articles/${article_id}`}
            className="hover:border hover:bg-gray-100 rounded-md border-gray pr-1 pt-1 pl-1 pb-1 ml-2.5"
          >
            이전
          </Link>
        </form>
      </section>
    </>
  );
}
