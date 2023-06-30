import "../../styles/page.module.css";

import React from "react";

/** 유저관련 레이아웃 */
export default function userlayout({ children }) {
  return (
    <main className="flex justify-center mt-10">
      <aside className="fw-68 flex flex-row justify-between p-2.5 m-0 h-[300px]">
        <div className="bg-[#fdb6b6]">
          <div className="bg-[#ccfdb6]">사진</div>
          <div className="bg-[#d7b6fd]">이름</div>
          <strong className="bg-[#ffa1eb]">내 블로그</strong>
          <div className="bg-[#b6e2fd]">내 계정</div>
        </div>
      </aside>
      {children}
    </main>
  );
}
