"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import CommentEditToggle from "@components/CommentEditToggle";

/** 댓글불러오기 */
export default function CommentView({
  article_id: article_id,
  blog_name: blog_name,
}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, [article_id]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/blogs/${article_id}/comments/`
      );
      const data = response.data;

      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      {data &&
        data.map((e) => {
          const comment_id = e.id;
          const comment = e.comment;
          const user = e.user;
          const token = localStorage.getItem("access");

          const handleCommentDelete = async () => {
            try {
              const response = await axios.delete(
                `http://localhost:8000/blogs/comments/${comment_id}/`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
            } catch (error) {
              console.error(error);
            }
          };
          return (
            <form key={comment_id}>
              <ul>
                <li>
                  {user} :{comment}
                </li>
              </ul>
              <button type="submit" onClick={handleCommentDelete}>
                댓글삭제
              </button>
              <CommentEditToggle
                comment_id={comment_id}
                blog_name={blog_name}
                article_id={article_id}
              />
              <span>========================</span>
            </form>
          );
        })}
    </section>
  );
}
