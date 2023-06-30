"use client";

import React, { useState } from "react";
import CommentView from "./CommentView";
import CommentWrite from "./CommentWrite";
import ArticleLike from "@components/ArticleLike";

export default function CommentDropdown({
  blog_name: blog_name,
  article_id: article_id,
}) {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdownClick = () => {
    setDropdown((prev) => !prev);
  };

  const handleInnerClick = (event) => {
    // 클릭된 요소의 태그 이름을 확인하여 토글 동작 제어
    const tagName = event.target.tagName;
    if (tagName !== "INPUT" && tagName !== "BUTTON") {
      setDropdown(false);
    }
  };

  return (
    <>
      <div className="flex">
        <button onClick={handleDropdownClick} className="mr-2">
          댓글
        </button>
        <ArticleLike blog_name={blog_name} article_id={article_id} />
      </div>
      {dropdown && (
        <>
          <div onClick={handleInnerClick}>
            <CommentView article_id={article_id} blog_name={blog_name} />
          </div>
          <CommentWrite article_id={article_id} />
        </>
      )}
    </>
  );
}
