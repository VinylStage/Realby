"use client";

import axios from "axios";
import React, { useState } from "react";

/** 댓글작성 */
export default function CommentWrite({ article_id }) {
  const [comment, setComment] = useState("");

  async function handleComment() {
    try {
      const token = localStorage.getItem("access");
      const response = await axios.post(
        `http://127.0.0.1:8000/blogs/${article_id}/comments/`,
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
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section>
      <form>
        <input
          type="text"
          placeholder="댓글입력"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <button type="submit" onClick={handleComment}>
          댓글작성
        </button>
      </form>
    </section>
  );
}
