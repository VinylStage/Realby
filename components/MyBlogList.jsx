"use client";

import axios from "axios";
import jwt from "jsonwebtoken";
import Link from "next/link";
import { useEffect, useState } from "react";

/** 내 블로그 리스트 */
export default function MyBlogList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const token = localStorage.getItem("access");
      const userId = jwt.decode(token).user_id;
      const response = await axios.get(
        `https://www.realbyback.shop/blogs/${userId}/list/`
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
            <div className="h-20 mt-2.5 pt-2.5 pl-5 shadow-md" key={e.id}>
              <Link href={`/${e.blog_name}`} className="text-xl">
                {e.blog_name}
                <p className="hover:underline text-sm text-[#6b6b6b] flex">
                  블로그 바로가기
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </p>
              </Link>
            </div>
          );
        })}
    </>
  );
}
