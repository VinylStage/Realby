"use client";

import axios from "axios";
// import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function CategoryList({ blog_name: blog_name }) {
  const [data, setData] = useState([]);
  //   const router = useRouter();

  useEffect(() => {
    fetchData();
  }, [blog_name]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/blogs/${blog_name}/category/`
      );
      const data = response.data;

      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <form>
        {data &&
          data.map((e) => {
            const id = e.id;
            const category = e.category;
            const handleCategoryDelete = async () => {
              try {
                const token = localStorage.getItem("access");
                const response = await axios.delete(
                  `http://127.0.0.1:8000/blogs/${blog_name}/category/${category}/`,
                  {
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${token}`,
                    },
                  }
                );
              } catch (error) {
                console.error(error);
              }
              router.refresh();
            };

            return (
              <ul key={id}>
                <li>{category}라는 카테고리</li>
                <button type="submit" onClick={handleCategoryDelete} value={id}>
                  카테고리삭제
                </button>
              </ul>
            );
          })}
      </form>
    </section>
  );
}