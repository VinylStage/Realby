import React from "react";
import "@styles/globals.css";
import Link from "next/link";

export const metadata = {
  title: "RealBy",
  description: "",
};

/** 메인 레이아웃 */
const RootLayout = ({ children }) => {
  return (
    <html lang="kr">
      <head>
        <title>Document</title>
      </head>
      <body>
        <header>
          <Link href={"/"}>홈</Link>
          <br />
          <Link href={"/auth/login"}>login</Link>
        </header>
        <main className="app">{children}</main>
        <footer>ⓒ 2023 Team. Survivors All Rights Reserved.</footer>
      </body>
    </html>
  );
};

export default RootLayout;
