"use client";

import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

/** 카테고리 생성 */
export default function CategoryCreate({ blog_name: blog_name }) {
  const [category, setCategory] = useState("");

  async function handleCategory() {
    try {
      const token = localStorage.getItem("access");
      const response = await axios.post(
        `http://127.0.0.1:8000/blogs/${blog_name}/category/`,
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
        <input
          type="text"
          placeholder="카테고리추가"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button onClick={handleCategory} type="submit">
          카테고리 생성
        </button>
      </form>
    </section>
  );
}
