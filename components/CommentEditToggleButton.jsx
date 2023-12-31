"use client";

import React from "react";

/** 댓글 수정페이지 팝업버튼 */
export default function CommentEditToggleButton({ comment_id: comment_id }) {
  const openPopup = () => {
    const width = 800; // 팝업 창 가로 크기
    const height = 600; // 팝업 창 세로 크기
    const left = (window.innerWidth - width) / 2; // 팝업 창 가로 위치
    const top = (window.innerHeight - height) / 2; // 팝업 창 세로 위치

    const popupWindow = window.open(
      `/comment/update/${comment_id}`,
      "댓글수정",
      `width=${width},height=${height},left=${left},top=${top}`
    );

    // 팝업 창이 차단되었을 경우에 대한 처리
    if (popupWindow === null || typeof popupWindow === "undefined") {
      const script = document.createElement("script");
      script.innerHTML = `alert("팝업 창이 차단되었습니다.");`;
      document.head.appendChild(script);
    }
  };

  return <button onClick={openPopup}>Edit</button>;
}
