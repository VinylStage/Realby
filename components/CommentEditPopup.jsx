"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

/** 댓글수정 팝업페이지 */
export default function CommentView({ comment_id: comment_id }) {
  const [data, setData] = useState("");
  const [comment, setComment] = useState("");
  useEffect(() => {
    fetchData();
  }, [comment_id]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://www.realbyback.shop/blogs/comments/${comment_id}`
      );
      const data = response.data.comment;

      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommentUpdate = async () => {
    try {
      const token = localStorage.getItem("access");
      const response = await axios.put(
        `https://www.realbyback.shop/blogs/comments/${comment_id}/`,
        {
          comment: comment,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      window.close();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <form>
        <input
          type="text"
          defaultValue={data}
          onChange={(event) => setComment(event.target.value)}
        />
        <button type="submit" onClick={handleCommentUpdate}>
          수정
        </button>
      </form>
    </section>
  );
}
