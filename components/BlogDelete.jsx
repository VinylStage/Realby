"use client";

import axios from "axios";
import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

/** 블로그 삭제버튼 */
export default function BlogDelete({ blog_name: blog_name }) {
  const handleBlogDelete = async () => {
    const token = localStorage.getItem("access");
    const response = await axios.delete(
      `https://www.realbyback.shop/blogs/${blog_name}/`,
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
          <form action={`/${blog_name}`}>
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
      </Stack>
    </>
  );
}
