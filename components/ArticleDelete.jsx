"use client";

import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import jwt from "jsonwebtoken";

/** 게시글삭제버튼 */
export default function ArticleDelete({
  blog_name: blog_name,
  article_id: article_id,
}) {
  const [userId, setUserId] = useState("");
  const [id, setId] = useState([]);

  useEffect(() => {
    idData();
  }, [blog_name]);

  async function handleArticleDelete() {
    const token = localStorage.getItem("access");
    await axios.delete(`http://localhost:8000/blogs/detail/${article_id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  const idData = async () => {
    try {
      const token = localStorage.getItem("access");
      const userId = jwt.decode(token).user_id;
      const response = await axios.get(
        `http://localhost:8000/blogs/${blog_name}`
      );
      const data = response.data.user;

      setId(data);
      setUserId(userId);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {id === userId && (
        <div className="mt-2 pb-2 mb-1 flex border-solid pl-6 justify-end">
          <form action={`/${blog_name}/`}>
            <Button
              type="submit"
              onClick={handleArticleDelete}
              startIcon={<DeleteIcon />}
              className="text-black mr-2"
            >
              게시글 삭제
            </Button>
            <Link
              href={`/${blog_name}/articleupdate/${article_id}/edit`}
              className="text-[14px] border-black border rounded-md pl-1 pr-1 inline-block hover:bg-[#d3d3d3]"
            >
              수정
            </Link>
          </form>
        </div>
      )}
    </>
  );
}
