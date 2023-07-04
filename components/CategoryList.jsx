"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

/** 카테고리 리스트(삭제) */
export default function CategoryList({ blog_name: blog_name }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [blog_name]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/blogs/${blog_name}/category/`
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
                  `http://localhost:8000/blogs/${blog_name}/category/${category}/`,
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
              <div>
                <div>
                  {category}
                  <button
                    type="submit"
                    onClick={handleCategoryDelete}
                    value={id}
                    style={{ float: "right" }}
                  >
                    삭제
                  </button>
                </div>
              </div>
            );
          })}
        <br />
      </form>
    </section>
  );
}
