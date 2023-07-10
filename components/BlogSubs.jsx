"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";

/** 블로그 구독 */
export default function BlogSubs({ blog_name: blog_name }) {
  const [myBlog, setMyBlog] = useState("");
  const [isSubscribers, setIsSubscribers] = useState(false);
  const [token, setToken] = useState("");
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("access");
    setToken(token);
    myBlogInfo();
  }, []);
  useEffect(() => {
    if (myBlog !== "") {
      fetchData();
    }
  }, [myBlog]);

  const handleSubs = async () => {
    const token = localStorage.getItem("access");
    await axios.post(
      `https://www.realbyback.shop/blogs/subscribe/${blog_name}/`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    router.refresh();
  };

  const myBlogInfo = async () => {
    try {
      if (token) {
        const userId = jwt.decode(token).user_id;
        const response = await axios.get(
          `https://www.realbyback.shop/blogs/${userId}/list/`
        );
        const data = response.data;
        const myBlog = data[0].blog_name;
        setMyBlog(myBlog);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    const response = await axios.get(
      `https://www.realbyback.shop/blogs/subscribe/${myBlog}/`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const subsData = response.data;
    const subsList = subsData.subscribes;
    const isSubscribers = subsList.includes(blog_name);
    setIsSubscribers(isSubscribers);
  };

  return (
    <form>
      <section>
        {isSubscribers ? (
          <button type="submit" onClick={handleSubs}>
            구독취소
          </button>
        ) : (
          <button type="submit" onClick={handleSubs}>
            구독하기
          </button>
        )}
      </section>
    </form>
  );
}
