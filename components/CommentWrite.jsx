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
        `http://localhost:8000/blogs/${article_id}/comments/`,
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
    <section className="mt-2.5">
      <form>
        <input
          type="text"
          placeholder="댓글입력"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          className="border-2 rounded-lg w-30 h-10"
        />

        <button type="submit" onClick={handleComment}>
          댓글작성
        </button>
      </form>
    </section>
  );
}
