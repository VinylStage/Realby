import React from "react";
import Link from "next/link";
import "../styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Realby",
  description: "",
};

/** 메인 레이아웃 */
const RootLayout = ({ children }) => {
  return (
    <html lang="kr">
      <body>
        <Provider>
          <header>
            <Link href={"/"}>홈</Link>
            <br />
            <Link href={"/auth/login"}>login</Link>
          </header>
          <main className="app">{children}</main>
          <footer>ⓒ 2023 Team. Survivors All Rights Reserved.</footer>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
