"use client";

import axios from "axios";
import Link from "next/link";
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
        `http://54.180.120.169/blogs/${blog_name}/category/`
      );
      const data = response.data;

      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="category-link-wrap">
      <form>
        {data &&
          data.map((e) => {
            const id = e.id;
            const category = e.category;
            return (
              <ul key={id}>
                <li className="category-link">
                  <Link href={`/${blog_name}/${category}`}>{category}</Link>
                </li>
              </ul>
            );
          })}
        <br />
      </form>
    </section>
  );
}
