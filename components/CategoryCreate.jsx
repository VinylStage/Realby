"use client";

import axios from "axios";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
/** 카테고리 생성 */
export default function CategoryCreate({ blog_name: blog_name }) {
  const [category, setCategory] = useState("");

  async function handleCategory() {
    try {
      const token = localStorage.getItem("access");
      const response = await axios.post(
        `http://54.180.120.169/blogs/${blog_name}/category/`,
        {
          category: category,
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
  }
  return (
    <section>
      <form>
        <TextField
          id="standard-basic"
          label="Category Create"
          variant="standard"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <Button
          onClick={handleCategory}
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
        >
          카테고리 생성
        </Button>
      </form>
    </section>
  );
}
