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
        `http://localhost:8000/blogs/${blog_name}/category/`
      );

      const data = response.data;

      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="p-2.5">
      <form>
        <Link href={`/${blog_name}/newpost`} className="hover:underline">
          ✏️글쓰기
        </Link>
        {data &&
          data.map((e) => {
            const id = e.id;
            const category = e.category;
            return (
              <ul key={id} className="mb-2.5 mt-2.5">
                <li>
                  <Link
                    href={`/${blog_name}/${category}`}
                    className="no-underline text-inherit hover:underline text-base"
                  >
                    {category}
                  </Link>
                </li>
              </ul>
            );
          })}
        <br />
      </form>
    </section>
  );
}
