"use client";

import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function CommentWrite({ article_id }) {
  const [comment, setComment] = useState("");

  async function handleComment() {
    try {
      const token = localStorage.getItem("access");
      const response = await fetch(
        `http://localhost:8000/blogs/${article_id}/comments/`,
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          method: "POST",
          body: JSON.stringify({
            comment: comment,
          }),
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
