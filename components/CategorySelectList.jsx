"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

/** 카테고리 선택창 */
export default function CategoryList({ blog_name: blog_name }) {
  const [data, setData] = useState([]);

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
    <>
      {data &&
        data.map((e) => {
          return (
            <option value={e.id} key={e.id}>
              {e.category}
            </option>
          );
        })}
    </>
  );
}
