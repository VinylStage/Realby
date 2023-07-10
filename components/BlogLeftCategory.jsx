"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { red } from "@mui/material/colors";
import jwt from "jsonwebtoken";
import blogchat from "@app/[blog_name]/blogchat/page";
import BlogSubs from "./BlogSubs";

/** 카테고리 리스트(삭제) */
export default function CategoryList({ blog_name: blog_name }) {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blogUsedrId, setBlogUserId] = useState("");
  const [userId, setUserId] = useState("");
  const [roomActive, setRoomActive] = useState(false);
  const [roomdata, setRoomData] = useState("");

  useEffect(() => {
    fetchData(), fetchBlog(), fetchActive();
  }, [blog_name]);

  const openModal = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("access");
    const confirmation = window.confirm("Live방송을 시작하시겠습니까?");
    if (confirmation) {
      try {
        const response = await axios.post(
          `https://www.realbyback.shop/livechat/${blog_name}/`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setIsModalOpen(true);
      } catch (error) {
        console.error(error);
      }

      try {
        const response = await axios.get(
          `https://www.realbyback.shop/livechat/active/${blog_name}/`
        );

        setRoomActive(true);
        setIsModalOpen(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const closeModal = async (event) => {
    event.preventDefault();
    const confirmation = window.confirm("Live방송을 종료하시겠습니까?");
    if (confirmation) {
      try {
        const response = await axios.get(
          `https://www.realbyback.shop/livechat/active/${blog_name}/`
        );

        setRoomActive(false);
        setIsModalOpen(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const fetchActive = async () => {
    try {
      const response = await axios.get(
        `https://www.realbyback.shop/livechat/${blog_name}/`
      );

      const data = response.data;

      setRoomData(data.is_active);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://www.realbyback.shop/blogs/${blog_name}/category/`
      );

      const data = response.data;

      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBlog = async () => {
    try {
      const token = localStorage.getItem("access");
      const userId = jwt.decode(token).user_id;
      const response = await axios.get(
        `https://www.realbyback.shop/blogs/${blog_name}`
      );
      const data = response.data.user;
      setBlogUserId(data);
      setUserId(userId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="p-2.5">
      {blogUsedrId === userId ? (
        <Link href={`/${blog_name}/newpost`} className="hover:underline">
          ✏️글쓰기
        </Link>
      ) : (
        <BlogSubs blog_name={blog_name} />
      )}
      <form className="mb-10">
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
        {blogUsedrId !== userId ? null : ( // 조건이 참일 경우 아무것도 렌더링하지 않음
          <div>
            실시간 채팅방
            <button
              onClick={isModalOpen ? closeModal : openModal}
              style={{ marginLeft: "15px", color: "red" }}
            >
              {isModalOpen ? "비활성화" : "활성화"}
            </button>
          </div>
        )}

        {roomActive || roomdata ? (
          <div>
            <Link
              href={`/${blog_name}/blogchat`}
              className="no-underline text-inherit hover:underline text-base"
              style={{ color: "red" }}
            >
              Live 방 입장하기
            </Link>
          </div> // 조건이 참일 경우 아무것도 렌더링하지 않음
        ) : null}
      </form>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateCalendar", "DateCalendar"]}>
          <DemoItem label="Today">
            <DateCalendar defaultValue={dayjs()} readOnly />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </section>
  );
}
