import React from "react";
import "../styles/globals.css";

import Link from "next/link";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Realby",
  description: "",
};

/** 메인페이지 레이아웃 */
const RootLayout = ({ children }) => {
  return (
    <html lang="kr">
      <body>
        <Provider>
          <main className="app">
            <Nav />
            {children}
          </main>
          <footer>ⓒ 2023 Team. Survivors All Rights Reserved.</footer>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
