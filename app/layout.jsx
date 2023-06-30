import React from "react";
import "../styles/elisa.css";

import Link from "next/link";

import Nav from "@components/Nav";

// 검색엔진최적화(SEO)
export const metadata = {
  title: "Realby",
  description: "",
};

/** 메인페이지 레이아웃 */
const RootLayout = ({ children }) => {
  return (
    <html lang="kr">
      <body>
        <main className="app">
          <Nav />
          {children}
        </main>
        <footer>ⓒ 2023 Team. Survivors All Rights Reserved.</footer>
      </body>
    </html>
  );
};

export default RootLayout;
