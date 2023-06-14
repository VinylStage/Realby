import React from 'react'
import "@styles/globals.css";

export const metadata = {
  title: "RealBy",
  description: ""
}

const RootLayout = ({children}) => {
  return (
    <html lang="kr">
      <head>
        <title>Document</title>
      </head>
      <body>
        <header>
          <a href="/auth/login">login</a>
        </header>
        <main className="app">
          {children}
        </main>
        <footer>
          ⓒ 2023 Blog Platform Company. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;