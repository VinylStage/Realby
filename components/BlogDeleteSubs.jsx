"use client";

import axios from "axios";
import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

/** 블로그 삭제버튼 */
export default function BlogDelete({ blog_name: blog_name }) {
  const handleSubs = async () => {
    const token = localStorage.getItem("access");
    const response = await axios.post(
      `http://127.0.0.1:8000/blogs/subscribe/${blog_name}/`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };
  const handleBlogDelete = async () => {
    const token = localStorage.getItem("access");
    const response = await axios.delete(
      `http://localhost:8000/blogs/${blog_name}/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };
  return (
    <>
      <Stack direction="row" spacing={2}>
        <section>
          <form action="/">
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              type="submit"
              onClick={handleBlogDelete}
            >
              Delete
            </Button>
          </form>
        </section>
        <section>
          <form action={`/${blog_name}`}>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              type="submit"
              onClick={handleSubs}
            >
              Subscribe
            </Button>
          </form>
        </section>
      </Stack>
    </>
  );
}
