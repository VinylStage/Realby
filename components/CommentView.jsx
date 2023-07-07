"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import CommentEditToggleButton from "./CommentEditToggleButton";
import jwt from "jsonwebtoken";

/** 댓글불러오기 */
export default function CommentView({
  article_id: article_id,
  blog_name: blog_name,
}) {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    fetchData();
  }, [article_id]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("access");
      const username = jwt.decode(token).username;
      const response = await axios.get(
        `http://localhost:8000/blogs/${article_id}/comments/`
      );
      const data = response.data;

      setData(data);
      setToken(token);
      setUsername(username);
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
            <form key={comment_id} className="shadow-xl rounded-lg p-5 pt-8">
              <ul>
                <li>
                  {user} : {comment}
                </li>
              </ul>
              {user === username && (
                <>
                  <button
                    type="submit"
                    onClick={handleCommentDelete}
                    className="mr-2"
                  >
                    댓글삭제
                  </button>
                  <CommentEditToggleButton comment_id={comment_id} />
                </>
              )}
            </form>
          );
        })}
    </section>
  );
}
