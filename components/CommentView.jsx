"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CommentView({ article_id: article_id }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, [article_id]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/blogs/${article_id}/comments/`
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
          const comment = e.comment;
          const user = e.user;
          const token = localStorage.getItem("access");
          const handleCommentDelete = async () => {
            try {
              const response = await axios.delete(
                `http://127.0.0.1:8000/blogs/comments/${e.id}`,
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
            <>
              <section>
                <form>
                  <ul>
                    <li key={e.id}>
                      {user} :{comment}
                    </li>
                    <button type="submit" onClick={handleCommentDelete}>
                      댓글삭제
                    </button>
                  </ul>
                </form>
              </section>
            </>
          );
        })}
    </>
  );
}
