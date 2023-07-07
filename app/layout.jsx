import React from "react";
import "../styles/elisa-main.css";

import Link from "next/link";

import ProfileNav from "@components/ProfileNav";

// 검색엔진최적화(SEO)
export const metadata = {
  title: "Realby",
  description: "",
};

/** 루트 레이아웃 */
export default function RootLayout ({ children }) {
  return (
    <html lang="kr">
      <body>
        <main className="app">
          <ProfileNav />
        </main>
        {children}
        <footer>ⓒ 2023 Team. Survivors All Rights Reserved.</footer>
      </body>
    </html>
  );
};

