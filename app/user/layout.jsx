import "../page.module.css";

import React from "react";

/** 유저관련 레이아웃 */
export default function userlayout({ children }) {
  return (
    <>
      <div>{children}</div>
      <div>userlay</div>
    </>
  );
}
