import React from "react";
import "../../styles/elisa-main.css";

import FeedsNav from "@components/FeedsNav";

// 검색엔진최적화(SEO)
export const metadata = {
  title: "Realby",
  description: "",
};

/** 메인페이지(피드, 토픽) 레이아웃 */
const MainLayout = ({ children }) => {
  return (
    <main className="app">
      <FeedsNav />
      {children}
    </main>
  );
};

export default MainLayout;
